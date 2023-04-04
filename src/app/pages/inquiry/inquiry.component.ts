import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { manuFacturers } from 'src/app/data';
import { InquiriesService } from 'src/app/services/inquiries/inquiries.service';
import { AppState } from 'src/app/store/app-state.model';
import { countries } from 'src/app/data';

import { ToastService } from 'src/app/toast/toast-service';
import * as $ from 'jquery';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { CatalogService } from 'src/app/services';
import { UserService } from 'src/app/services/auth/user.service';
@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.scss'],
})

/**
 * SingleBlog Component
 */
export class InquiryComponent implements OnInit {
  // bread crumb items
  breadCrumbItems!: Array<{}>;

  validationform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;
  manuFacturers!: any;
  rootURL = environment.rootURL;

  brandsData: any;
  modelsList!: any;
  isLoading = false;
  query: any;

  showToast: boolean = false;
  countriesList: any = [];

  id = 'MHw6PI_6ygs';
  constructor(
    private _catalogService: CatalogService,
    private tokenStorage: TokenStorageService,
    public toastService: ToastService,
    private formBuilder: UntypedFormBuilder,
    private store: Store<AppState>,
    private http: HttpClient,
    private inquiriesService: InquiriesService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  resultMessage = '';
  selectedVehicle: any = {};
  YearOptions = {
    floor: 1960,
    ceil: 2050,
  };

  filters = {
    YearFrom: 1960,
    YearTo: new Date().getFullYear(),
  };

  ngOnInit(): void {
    this.countriesList = countries;

    this.breadCrumbItems = [
      { label: 'Home', link: '' },
      { label: 'News & reviews', link: '/blog-grid' },
      { label: 'This Year is All About New Harley Davidson', active: true },
    ];

    this.validationform = this.formBuilder.group({
      Name: ['', [Validators.required]],
      CountryId: ['', [Validators.required]],
      Company: ['', []],
      Email: ['', [Validators.required]],
      RetypeEmail: ['', [Validators.required]],
      Phone: ['', [Validators.required]],
      Message: [''],
      ManufacturerId: ['', [Validators.required]],
      ModelId: ['', [Validators.required]],
      Transmission: [''],
      Steering: [''],
      YearFrom: [''],
      YearTo: [''],
      PriceType: [''],
      recapchavalid: ['', [Validators.required]],
    });

    // Data Get Function
    this._fetchData();

    this.route.queryParams.subscribe((params) => {
      for (var [k, v] of Object.entries(params)) {
        if (k === 'sku' && v != '') this.getVehicleDetails(v);
      }
    });

    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }
  }
  getVehicleDetails(sku) {
    this._catalogService.getCatalogDetails(sku).subscribe((data) => {
      this.selectedVehicle = data;

      this.populateFromLocal();
    });
  }

  public populateFromLocal() {
    Object.keys(this.selectedVehicle).forEach((k) => {
      let control = this.validationform.get(k);
      if (control)
        control.setValue(this.selectedVehicle[k], { onlySelf: true });
    });

    this.onChangeBrand(this.selectedVehicle.ManufacturerId);

    this.filters.YearFrom = this.selectedVehicle.Year;
    this.filters.YearTo = this.selectedVehicle.Year;

    //localStorage.setItem('VehicleForInquiry', JSON.stringify({}));
  }

  // Data Fetch
  private _fetchData() {
    this.manuFacturers = manuFacturers;
    this.brandsData = this.store.select((store) => store.brands);

    this.userService.getUserProfile().subscribe((user) => {
      this.validationform.controls['Name'].setValue(user['FirstName']);
      this.validationform.controls['CountryId'].setValue(user['CountryId']);
      this.validationform.controls['Company'].setValue(user['Company']);
      this.validationform.controls['Email'].setValue(user['Email']);
      this.validationform.controls['RetypeEmail'].setValue(user['Email']);
      this.validationform.controls['Phone'].setValue(user['Phone']);
    });
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

  validSubmit() {
    if (this.validationform.status === 'VALID') {
      this.isLoading = true;

      let params = { ...this.validationform.value };
      params.YearFrom = this.filters.YearFrom;
      params.YearTo = this.filters.YearTo;

      this.inquiriesService.addInquiry(params).subscribe(
        (data) => {
          this.isLoading = false;
          this.toastService.show('Inquiry submitted successfully', {
            classname: 'bg-success text-light',
            delay: 5000,
          });
          this.validationform.reset();
        },
        (err) => {
          this.resultMessage = err;
          this.toastService.show('Please login to submit inquiry', {
            classname: 'bg-primary text-light',
          });
          this.isLoading = false;
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

  toggleModal(staticDataModal: any) {
    this.modalService.open(staticDataModal, { size: 'lg', centered: true });
    document.querySelector('.modal-content')?.classList.add('border-light');
  }

  inView(ele: any) {
    ele.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }
}
