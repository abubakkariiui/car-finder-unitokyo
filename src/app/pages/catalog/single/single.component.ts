import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { apartments, latestCar } from './single.model';

import { apartmentsData } from './data';

import { AppState } from 'src/app/store/app-state.model';

import { Store } from '@ngrx/store';

import { CarModel } from 'src/app/store/models/car.model';

import { carsData, countries } from 'src/app/data';

import { Observable } from 'rxjs';
import { CartCatalogService } from 'src/app/services/cartCatalog.service';

import {
  AddItemAction,
  DeleteItemAction,
} from 'src/app/store/actions/compare.actions';

import { CatalogService } from 'src/app/services/catalog/catalog.service';
import { HttpClient } from '@angular/common/http';
import { Meta, Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuoteService } from 'src/app/services/quotes/quote.service';
import { ToastService } from 'src/app/toast/toast-service';
import { CompareCatalogService } from 'src/app/services/compareCatalog.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})

/**
 * Single Component
 */
export class SingleComponent implements OnInit {
  SelectedVehicleSKU: any = 0;
  breadCrumbItems!: Array<{}>;
  apartmentsData!: apartments[];
  latestCarData: any = [];

  carsData: any = [];
  isLoggedIn: boolean = false;
  rootURL = environment.rootURL;

  selectedVehicle: any = {};

  showRoomsList: any = [];

  portsList: any = [];

  calculatedFrieght: any = '';
  rout: string = '/'; // used for refresh purpose after login
  frieghtParams = {
    M3: 0,
    CountryId: 0,
    SourcePortId: 0,
    DestinationPortId: 0,
    Insurance: true,
    Inspection: true,
  };

  sourcePorstList: any = [];
  distinationPorstList: any = [];

  public firstColleaps = true;
  public msgColleaps = true;

  //  Validation form
  validationform!: UntypedFormGroup;
  makeOfferForm: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;
  compareItems$: Observable<Array<CarModel>>;

  items = [];

  isDataAvailable: boolean = false;
  countriesList: any = [];
  loading = true;
  paramSku: any = '';
  shareUrl: any;

  quoteSubmitLoading: boolean = false;

  VehicleType: [
    'Sedan',
    'Hatchback',
    'Sport',
    'SUV_or_4WD',
    'Wagon',
    'Van',
    'Mini_Bus',
    'Bus',
    'Truck',
    'Machinery'
  ];

  admin_base_url = environment.admin_base_url;

  constructor(
    private tokenStorage: TokenStorageService,
    private quoteService: QuoteService,
    private modalService: NgbModal,
    private formBuilder: UntypedFormBuilder,
    private _catalogService: CatalogService,
    private store: Store<AppState>,
    private http: HttpClient,
    private router: Router,
    private metaTagService: Meta,
    public CartCatalogService: CartCatalogService,
    private titleService: Title,
    private toastService: ToastService,
    private route: ActivatedRoute,
    public CompareCatalogService: CompareCatalogService
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) this.isLoggedIn = true;
    else this.isLoggedIn = false;

    this.route.queryParams.subscribe((params) => {
      this.paramSku = params['sku'];
    });

    this.makeOfferForm = this.formBuilder.group({
      OfferPrice: 0,
      CountryId: ['', [Validators.required]],
      Sku: [''],
      DiscountAmount: 0,
      IsDiscountPercent: true,
      PlainId: '',
    });

    this._catalogService.getCatalogDetails(this.paramSku).subscribe((data) => {
      this.selectedVehicle = data;
    });

    this.countriesList = countries;
    this.carsData = carsData;
    this.isDataAvailable = false;

    this.store
      .select((store) => store.showrooms)
      .subscribe((s) => {
        this.showRoomsList = s;

        this.showRoomsList.forEach((s) => {
          s.Country.Ports.forEach((p) => {
            this.distinationPorstList.push(p);
          });
        });

        // this.distinationPorstList = [
        //   this.distinationPorstList,
        //   ...this.showRoomsList.map((s) => Object.fromEntries(s.Country.Ports)),
        // ];

        // console.log(this.distinationPorstList);
      });

    this.compareItems$ = this.store.select((store) => store.compare);
    this.validationform = this.formBuilder.group({
      CountryId: ['', [Validators.required]],
      Sku: ['', []],
    });

    // Data Get Function
    this._fetchData();
    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }
  }

  splitImages(item) {
    let images = [];
    if (item.Images) {
      images = item.Images.split(',').map(
        (i) => this.admin_base_url + '/Pictures/VehicleImages/' + i
      );
      return images;
    }
    return [
      this.admin_base_url + '/Content/Images/Products/no-image-found.jpg',
    ];
  }

  toggleModal(model1: any, model2: any) {
    this.rout = this.router.url;

    if (this.tokenStorage.getToken()) {
      this.modalService.open(model1, { size: 'lg', centered: true });
      this.populateForm();
    } else this.modalService.open(model2, { size: 'lg', centered: true });

    document.querySelector('.modal-content')?.classList.add('border-light');
  }

  // Data Fetch
  private _fetchData() {
    this.loading = true;
    // this.SelectedVehicleSKU = localStorage.getItem('SelectedVehicleSKU');

    this._catalogService.getCatalogDetails(this.paramSku).subscribe((data) => {
      this.selectedVehicle = data;
      this.isDataAvailable = true;
      this.breadCrumbItems = [
        { label: 'Home', link: '' },
        { label: 'Catalog', link: '/catalog/search/list' },
        { label: `${this.selectedVehicle.Title}`, active: true },
      ];

      this.http
        .post(
          this.rootURL +
            `/Search?page=${1}&pageSize=${3}${
              '&maxPrice=' + this.selectedVehicle.Price
            }`,
          {}
        )
        .subscribe(
          (x) => {
            this.latestCarData = x;
          },
          (e) => {
            this.loading = false;
          }
        );

      this.http
        .get(this.rootURL + `/GetPortsList?page=${1}&pageSize=${100}}`)
        .subscribe(
          (x) => {
            this.portsList = x;
          },
          (e) => {
            this.loading = false;
          }
        );

      this.metaTagService.addTags([
        {
          name: 'keywords',
          content: this.selectedVehicle.Keywords,
        },
        { name: 'robots', content: 'index, follow' },

        { name: 'description', content: 'yuasa ta' },
        { name: 'tags', content: this.selectedVehicle.Extras },
        { name: 'author', content: this.selectedVehicle.ModifiedBy },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'date',
          content: this.selectedVehicle.CreatedOn,
          scheme: 'YYYY-MM-DD',
        },
        { charset: 'UTF-8' },
      ]);

      this.titleService.setTitle(
        this.selectedVehicle.Title + ' | UniTokyo'
      );

      this.loading = false;
    });

    this.apartmentsData = apartmentsData;
  }

  // submitQuote() {
  //   this.quoteSubmitLoading = true;
  //   this.validationform.controls['Sku'].setValue(this.selectedVehicle.Sku);

  //   this.quoteService.submitQuote(this.validationform.value).subscribe(
  //     (d) => {
  //       this.toastService.show(`${d}`, {
  //         classname: 'bg-success text-light',
  //         delay: 5000,
  //       });
  //       this.quoteSubmitLoading = false;
  //       this.modalService.dismissAll();
  //     },
  //     (e) => {
  //       this.toastService.show(`${e.message}`, {
  //         classname: 'bg-danger text-light',
  //         delay: 5000,
  //       });
  //       this.quoteSubmitLoading = false;
  //       this.modalService.dismissAll();
  //     }
  //   );
  // }

  calculateFrieght() {
    this.frieghtParams.CountryId = this.selectedVehicle.ShowRoom.CountryId;
    this.frieghtParams.M3 = this.selectedVehicle.M3;
    this.http
      .post(
        this.rootURL + `/CalculateFreight?page=${1}&pageSize=${100}}`,
        this.frieghtParams
      )
      .subscribe((x) => {
        this.calculatedFrieght = x;
        console.log('Calculate Freight:', this.calculateFrieght);
      });
  }

  config = {
    initialSlide: 0,
    slidesPerView: 1,
    pagination: true,
    navigation: true,
  };

  LatestCar = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 25,
    pagination: true,
    navigation: false,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };

  get form() {
    return this.makeOfferForm.controls;
  }

  populateForm() {
    //console.log(this.VehicleObject.Price);
    let user = JSON.parse(localStorage.getItem('user_profile')) ?? {};
    // this.makeOfferForm.controls['OfferPrice'].setValue(
    //   this.selectedVehicle.Price
    // );
    //  this.makeOfferForm.controls['CountryId'].setValue(user.CountryId);
    this.makeOfferForm.controls['Sku'].setValue(this.selectedVehicle.Sku);
  }

  submitQuote() {
    if (this.isLoggedIn) {
      if (this.makeOfferForm.status === 'VALID') {
        this.quoteSubmitLoading = true;

        this.quoteService.submitQuote(this.makeOfferForm.value).subscribe(
          (d) => {
            this.toastService.show(`${d}`, {
              classname: 'bg-success text-light',
              delay: 5000,
            });
            this.quoteSubmitLoading = false;
            this.modalService.dismissAll();
          },
          (e) => {
            this.toastService.show(`${e.message}`, {
              classname: 'bg-danger text-light',
              delay: 5000,
            });
            this.quoteSubmitLoading = false;
            this.modalService.dismissAll();
          }
        );
      }
    } else {
      this.router.navigate(['/signin']);
    }
  }

  onBuyClicked(item) {
    localStorage.setItem('VehicleForCheckOut', JSON.stringify(item));
    this.router.navigate(['/checkout']);
  }

  onRequestInformationClicked(item) {
    this.router.navigate(['/inquiry'], {
      queryParams: { sku: item.VehicleSku },
    });
  }

  onCompareCheckChange(item) {
    if (this.CompareCatalogService.itemInCompareCatalog(item)) {
      item.VehicleSku == item.VehicleSku;
      return;
    } else {
      this.CompareCatalogService.addToCompareCatalog(item); //add items in cart
      this.items = [...this.CompareCatalogService.getCompareCatalog()];
      //  $('#demo-switcher').addClass('show');
    }
  }

  onCartCheckChange(item) {
    if (this.CartCatalogService.itemInCartCatalog(item)) {
      item.VehicleSku == item.VehicleSku;
      return;
    } else {
      this.CartCatalogService.addToCartCatalog(item); //add items in cart
      this.items = [...this.CartCatalogService.getCartCatalog()];
    }
  }
}
