import { Component, OnInit, ViewChild } from '@angular/core';

import { AppState } from 'src/app/store/app-state.model';

import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';

import { List } from 'src/app/pages/catalog/list/list.model';
import { carsData, manuFacturers, yearsList } from 'src/app/data';

import { Store } from '@ngrx/store';
import { CarModel } from 'src/app/store/models/car.model';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-index',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss'],
})

/**
 * Index Component
 */
export class Home1Component implements OnInit {
  latestBlogs: any; //Observable<Array<blogModel>>;

  carsData!: List[];
  manuFacturers!: any;

  yearsList!: any;
  slidersData: any;
  showRoomsList: any;
  brandsData: any;

  loading: boolean = false;

  isDataAvailable: boolean = false;
  isSliderAvailable: boolean = false;

  rootURL = environment.rootURL;
  admin_base_url = environment.admin_base_url; //;
  topOffersData: any = {
    Items: [
      {
        Year: 0,
        Title: 0,
        PriceType: 0,
        Price: 0,
        ShowRoom: 0,
        VehicleSku: 0,
      },
    ],
  };

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  constructor(private store: Store<AppState>, private http: HttpClient) {}

  ngOnInit(): void {
    this.brandsData = { Items: [] };
    this.isDataAvailable = false;

    this.isSliderAvailable = false;
    this._fetchData();
  }

  // Chat Data Fetch
  private _fetchData() {
    this.loading = true;
    this.latestBlogs = this.store.select((store) => store.latestBlogs);

    this.showRoomsList = this.store.select((store) => store.showrooms);

    this.brandsData = this.store.select((store) => store.brands);

    this.carsData = carsData;

    this.manuFacturers = manuFacturers;

    this.yearsList = yearsList;

    this.http.get(this.rootURL + `/GetSlidersList`).subscribe((s) => {
      this.slidersData = s;
      this.isSliderAvailable = true;
      this.loading = false;
    });

    this.isDataAvailable = true;
  }

  images = [
    'assets/img/car-finder/catalog/7/1.jpg',
    'assets/img/car-finder/catalog/8/1.jpg',
    'assets/img/car-finder/catalog/6/1.jpg',
    'assets/img/car-finder/catalog/5/1.jpg',
    'assets/img/car-finder/catalog/4/1.jpg',
    'assets/img/car-finder/catalog/3/1.jpg',
    'assets/img/car-finder/catalog/2/1.jpg',
  ];

  /**
   * News Swiper setting
   */
  news = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 25,
    pagination: true,
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
}
