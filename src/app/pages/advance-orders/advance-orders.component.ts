import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { manuFacturers } from 'src/app/data';
import { OrderService } from 'src/app/services/orders/order.service';
import { AppState } from 'src/app/store/app-state.model';

import {
  countries,
  colors,
  transmissions,
  fuelTypes,
  enginCapacities,
} from 'src/app/data';
import { ToastService } from 'src/app/toast/toast-service';

import { environment } from 'src/environments/environment';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-advance-orders',
  templateUrl: './advance-orders.component.html',
  styleUrls: ['./advance-orders.component.scss'],
})
export class AdvanceOrdersComponent implements OnInit {
  validationform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;
  manuFacturers!: any;
  rootURL = environment.rootURL;

  brandsData: any;
  modelsList!: any;
  loading: boolean = false;
  isLoading = false;
  wished: boolean = true;
  localUser: any;

  countriesList: any = [];
  colorsList: any = [];
  transmissionsList: any = [];
  fuelTypesList: any = [];
  enginCapacityList: any = [];

  id = 'MHw6PI_6ygs';
  constructor(
    private formBuilder: UntypedFormBuilder,
    private store: Store<AppState>,
    private http: HttpClient,
    private orderService: OrderService,
    private ref: ChangeDetectorRef,
    public toastService: ToastService,
    private tokenStorage: TokenStorageService,
    private modalService: NgbModal
  ) {}

  ngAfterContentChecked() {
    this.ref.detectChanges();
  }
  resultMessage = '';

  YearOptions = {
    floor: 1960,
    ceil: 2025,
  };

  filters = {
    YearFrom: 1960,
    YearTo: 2022,
  };

  ngOnInit(): void {
    this.loading = true;
    this.countriesList = countries;
    this.colorsList = colors;
    this.transmissionsList = transmissions;
    this.fuelTypesList = fuelTypes;
    this.enginCapacityList = enginCapacities;
    this.validationform = this.formBuilder.group({
      YearFrom: [''],
      YearTo: [''],
      Color: [''],
      Transmission: [''],
      FuelType: [''],
      EnginCapacity: [''],
      DriveTrain: [''],
      ManufacturerId: ['', [Validators.required]],
      ModelId: ['', [Validators.required]],
      CountryId: ['', [Validators.required]],
      CustomerId: 0,
      wished: false,
      Remarks: [''],
      captcha: ['', [Validators.required]],
    });

    // Data Get Function
    this._fetchData();

    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }
  }

  // Data Fetch
  private _fetchData() {
    this.manuFacturers = manuFacturers;
    this.brandsData = this.store.select((store) => store.brands);
    this.loading = false;
  }

  onChangeBrand(e) {
    this.http
      .post(this.rootURL + `/GetModelByManufacturer?manufacturerId=${e}`, {})
      .subscribe((t) => {
        this.modelsList = t;
      });
  }

  config = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true,
    loop: true,
  };
  toggleModal(staticDataModal: any) {
    this.modalService.open(staticDataModal, { size: 'lg', centered: true });
    document.querySelector('.modal-content')?.classList.add('border-light');
  }
  validSubmit(toggleLoginModel) {
    if (!this.tokenStorage.isAuthenticated()) {
      this.toggleModal(toggleLoginModel);
      return;
    }
    if (this.validationform.status === 'VALID') {
      this.isLoading = true;

      let user = JSON.parse(localStorage.getItem('user_profile')) ?? { id: 0 };

      this.validationform.value.CustomerId = user.Id;
      this.validationform.value.YearFrom = this.filters.YearFrom;
      this.validationform.value.YearTo = this.filters.YearTo;
      this.orderService.createAdvanceOrder(this.validationform.value).subscribe(
        (res) => {
          this.isLoading = false;
          this.toastService.show(`Advance order placed successfully`, {
            classname: 'bg-success text-light',
            delay: 5000,
          });
        },
        (e) => {
          this.isLoading = false;
          this.toastService.show(`${e.message}`, {
            classname: 'bg-danger text-light',
            delay: 5000,
          });
        }
      );
    } else {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
    this.submit = true;
  }

  get form() {
    return this.validationform.controls;
  }

  inView(ele: any) {
    ele.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }
}
