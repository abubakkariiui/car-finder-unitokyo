import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';

import { AppState } from 'src/app/store/app-state.model';

import { Store } from '@ngrx/store';
import { CompareCatalogService } from 'src/app/services/compareCatalog.service';
import { CartCatalogService } from 'src/app/services/cartCatalog.service';
import { DeleteItemAction } from 'src/app/store/actions/compare.actions';
import { carsData } from 'src/app/data';
import { List } from 'src/app/pages/catalog/list/list.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastService } from 'src/app/toast/toast-service';

import { environment } from 'src/environments/environment';
import { GetCurrentUserLocation } from 'src/app/services/catalog/getCurrentUser.service';
@Component({
  selector: 'app-topoffers',
  templateUrl: './topoffers.component.html',
  styleUrls: ['./topoffers.component.scss'],
})
export class TopoffersComponent implements OnInit {
  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  // get ip address for current country code
  
  ipaddress:string = '';
  userCountryCode:any;
  
  
  topOffersData!: any;

  carsData!: List[];
  compareItems$: any;
  items = [];
  showToast: boolean = false;

  isTopOfferAvailable: boolean = false;

  rootURL = environment.rootURL;
  admin_base_url = environment.admin_base_url; //;

  constructor(
    public toastService: ToastService,
    private http: HttpClient,
    private store: Store<AppState>,
    private router: Router,
    public CompareCatalogService: CompareCatalogService,
    public CartCatalogService: CartCatalogService,
    public userLocation: GetCurrentUserLocation
  ) {}

  ngOnInit(): void {
    this.carsData = carsData;
    this.topOffersData = { Items: [] };
    
    // get current user location
    
    this.userLocation.getIpAddress().subscribe(res => {
      this.userLocation.getGEOLocation(this.ipaddress).subscribe(res => {
        this.userCountryCode = res['country_code2'];
        this._fetchData();
      })
    })
  }

  config = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true,
  };

  onWhishListChange() {
    // this.http.post(this.rootURL + `/TopOffersList`, {}).subscribe(
    //   (data) => {
    //     this.topOffersData = data;
    //     this.toastService.show('Added to wishList', {
    //       classname: 'bg-success text-light',
    //       delay: 5000,
    //     });
    //     this.isTopOfferAvailable = true;
    //   },
    //   (err) => {
    //     this.toastService.show('Please login', {
    //       classname: 'bg-warning text-light',
    //       delay: 5000,
    //     });
    //   }
    // );
  }

  _fetchData() {
    this.http.post(this.rootURL + `/TopOffersList?countryCode=${this.userCountryCode}`, {}).subscribe((t) => {
      this.topOffersData = t;
      if(this.topOffersData.Items.length){
        this.isTopOfferAvailable = true;
      }else{
        this.isTopOfferAvailable = false;
      }
    });
  }

  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }

  onItemClicked(item: any) {
    localStorage.setItem('SelectedVehicleSKU', item.VehicleSku);
    this.router.navigate(['/catalog/search/single']);
  }

  onRequestInformationClicked(item) {
    this.router.navigate(['/inquiry'], {
      queryParams: { sku: item.VehicleSku },
    });
  }
  onBuyClicked(item) {
    localStorage.setItem('VehicleForCheckOut', JSON.stringify(item));
    this.router.navigate(['/checkout']);
  }
  onMakeOfferClicked(item) {
    this.router.navigate(['/signin']);
  }
  onCompareCheckChange(item) {
    if (this.CompareCatalogService.itemInCompareCatalog(item)) {
      item.VehicleSku == item.VehicleSku;
      return;
    } else {
      this.CompareCatalogService.addToCompareCatalog(item); //add items in cart
      this.items = [...this.CompareCatalogService.getCompareCatalog()];
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
