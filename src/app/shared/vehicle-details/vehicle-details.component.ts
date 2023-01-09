import { UserService } from './../../services/auth/user.service';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import * as $ from 'jquery';

import { AppState } from 'src/app/store/app-state.model';

import { Store } from '@ngrx/store';
import { CompareCatalogService } from 'src/app/services/compareCatalog.service';
import { CartCatalogService } from 'src/app/services/cartCatalog.service';
import { DeleteItemAction } from 'src/app/store/actions/compare.actions';
import { carsData, countries } from 'src/app/data';
import { List } from 'src/app/pages/catalog/list/list.model';
import { Router } from '@angular/router';
import { WishListService } from 'src/app/services/wishlist/wishlist.service';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/toast/toast-service';
import { HttpClient } from '@angular/common/http';
import { QuoteService } from 'src/app/services/quotes/quote.service';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'VehicleDetails',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss'],
})
export class VehicleDetailsComponent implements OnInit {
  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  @Input() VehicleObject!: any;
  @Input() Type!: any;
  @Input() showSlider!: any;

  @Input() id!: any;
  @Output() whishListChange = new EventEmitter<string>();

  rout: string = '/'; // used for refresh purpose after login

  carsData!: List[];
  compareItems$: any;
  makeOfferForm: UntypedFormGroup;

  isLoggedIn: boolean = false;
  countryCode: any;
  countryName: any;
  userDate: any = [];
  quoteSubmitLoading: boolean = false;
  countriesList: any = [];
  items = [];

  admin_base_url = environment.admin_base_url;

  constructor(
    private toastService: ToastService,
    private tokenStorage: TokenStorageService,
    private store: Store<AppState>,
    private router: Router,
    public CompareCatalogService: CompareCatalogService,
    public CartCatalogService: CartCatalogService,
    private wishListService: WishListService,
    private modalService: NgbModal,
    private formBuilder: UntypedFormBuilder,
    private http: HttpClient,
    private quoteService: QuoteService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.router.onSameUrlNavigation = 'reload';
    // this.getUserIp();
  }

  splitImages(item) {
    let images = [];
    if (item?.Images) {
      images = item?.Images.split(',').map(
        (i) => `${this.admin_base_url + '/Pictures/VehicleImages/' + i}`
      );
      return images;
    }
    return [
      `${this.admin_base_url + '/Content/Images/Products/no-image-found.jpg'}`,
    ];
  }
  getSingleImageSrc() {
    let images = [];
    if (this.VehicleObject.Images) {
      images = this.VehicleObject.Images.split(',').map(
        (i) => `${this.admin_base_url + '/Pictures/VehicleImages/' + i}`
      );

      return images[0];
    }
    return [
      `${this.admin_base_url + '/Content/Images/Products/no-image-found.jpg'}`,
    ];
  }
  ngOnInit(): void {
    // console.log(this.VehicleObject.Images);
    this.carsData = carsData;
    this.countriesList = countries;

    // this.getLocation();

    if (this.tokenStorage.getToken()) this.isLoggedIn = true;
    else this.isLoggedIn = false;

    this.makeOfferForm = this.formBuilder.group({
      OfferPrice: ['', [Validators.required]],
      CountryId: ['', [Validators.required]],
      Sku: [''],
      DiscountAmount: 0,
      IsDiscountPercent: true,
      PlainId: '',
    });

    // this.getCountry();
    // this.getIPAddress();
  }

  // getCountry(){
  //   this.wishListService.getCountryInfoByIp().subscribe((res)=> {
  //     console.log("IP Info:", res)
  //   })
  // }

  // TODO - API Location and Country Name remaning

  // getLocation(){
  //   this.wishListService.getCountryByIp().subscribe((res)=> {
  //     console.log(res);
  //     this.userDate = res;
  //     this.countryCode = this.userDate.country_code;
  //     this.countryName = this.userDate.country;
  //     console.log(this.countryName)
  //     console.log(this.countryCode);
  //   })
  // }

  validSubmit() {
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
      } else {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
    } else {
      this.router.navigate(['/signin']);
    }
  }
  get form() {
    return this.makeOfferForm.controls;
  }

  config = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true,
  };

  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }

  onItemClicked(item: any) {
    localStorage.setItem('SelectedVehicleSKU', item.VehicleSku);
    this.router.navigate(['/catalog/search/single'], {
      queryParams: { sku: item.VehicleSku },
    });
  }

  onRequestInformationClicked(item) {
    // localStorage.setItem('VehicleForInquiry', JSON.stringify(item));
    this.router.navigate(['/inquiry'], {
      queryParams: { sku: item.VehicleSku },
    });
  }

  onBuyClicked(item) {
    this.router.navigate(['/checkout'], {
      queryParams: { sku: item.VehicleSku },
    });
  }

  onMakeOfferClicked(item) {
    this.router.navigate(['/signin']);
  }

  toggleModal(model1: any, model2: any) {
    this.rout = this.router.url;

    if (this.tokenStorage.getToken()) {
      this.modalService.open(model1, { size: 'lg', centered: true });
      this.populateForm();
    } else this.modalService.open(model2, { size: 'lg', centered: true });

    document.querySelector('.modal-content')?.classList.add('border-light');
  }
  populateForm() {
    //console.log(this.VehicleObject.Price);
    let user = JSON.parse(localStorage.getItem('user_profile')) ?? {};
    this.makeOfferForm.controls['CountryId'].setValue(user.CountryId);
    this.makeOfferForm.controls['Sku'].setValue(this.VehicleObject.Sku);
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

  AddToWishList(id: any) {
    this.wishListService.addWishList(id).subscribe((data) => {
      // console.log(data);

      this.whishListChange.emit();

      this.toastService.show('Added to wishList', {
        classname: 'bg-success text-light',
        delay: 5000,
      });
    });
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
