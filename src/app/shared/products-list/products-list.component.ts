import { Component, Input, OnInit } from '@angular/core';

import { Options } from '@angular-slider/ngx-slider';

import { Store } from '@ngrx/store';
import { CarModel } from 'src/app/store/models/car.model';

import { Observable } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';

import {
  AddItemAction,
  DeleteItemAction,
} from 'src/app/store/actions/compare.actions';

import { AppState } from 'src/app/store/app-state.model';
import { HttpClient } from '@angular/common/http';
import { carsData } from 'src/app/data';
import { List } from 'src/app/pages/catalog/list/list.model';
import { WishListService } from 'src/app/services/wishlist/wishlist.service';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  // bread crumb items
  breadCrumbItems!: Array<{}>;

  carsData!: List[];
  vehiclesData!: Array<{}>;

  @Input() type!: any;
  @Input() showTitle!: any;
  @Input() showAdvanceSearch: any = false;
  @Input() showBreadcrumb: any = true;
  @Input() showMiniSearch: any = false;

  isListDataAvailable: boolean = false;

  catalogList: any;
  subsVar: any;
  compareItems$: Observable<Array<CarModel>>;

  pagination: { page: number; pageSize: number; collectionSize: number } = {
    page: 1,
    pageSize: 10,
    collectionSize: 0,
  };

  orderBy: string = 'desc';

  queryParams: {
    ManufacturerId?: string;
    ModelId?: string;
    ModelCode?: string;
    Keywords?: string;
    Year?: string;
    MinYear?: string;
    MaxYear?: string;
    Type?: string;
    SubType?: string;
    Transmission?: string;
    DriveTrain?: string;
    Steering?: string;
    FuelType?: string;
    Color?: string;
    EnginSize?: string;
    MinMileage?: string;
    MaxMileage?: string;

    AirConditioning?: boolean;
    PowerSteering?: boolean;
    PowerWindows?: boolean;
    PowerMirror?: boolean;
    CentralLocking?: boolean;
    Stereo?: boolean;
    AlloyWheel?: boolean;
    RearSpoiler?: boolean;
    Airbag?: boolean;
    DualAirbags?: boolean;
    SunRoof?: boolean;
    BodyKit?: boolean;
    LeatherSeats?: boolean;
    KeylessEntry?: boolean;
    HeightControl?: boolean;
    HIDLights?: boolean;
    AntilockBreakingSystem?: boolean;
    AntiTheftSystem?: boolean;
    Long?: boolean;
    HighRoof?: boolean;
    HighDeck?: boolean;

    ShowRoomId?: string;
    countryCode?: string;
    CountryCode?: string;
  };

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private wishListService: WishListService
  ) {
    this.isListDataAvailable = false;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.queryParams = { ...params };
      if (Object.keys(this.queryParams).length > 0) {
        localStorage.setItem(
          'countryCode',
          this.queryParams?.CountryCode || this.queryParams?.countryCode
        );
      }
    });

    this.compareItems$ = this.store.select((store) => store.compare);
    this.breadCrumbItems = [
      { label: 'Home', link: '' },
      {
        label: this.type == 'grid' ? 'Catalog Grid' : 'Catalog List',
        active: true,
      },
    ];

    // Data Get Function
    this.subsVar = this._fetchData(this.queryParams);

    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }
  }
  ngOnDestroy() {
    if (this.subsVar) {
      this.subsVar.unsubscribe();
    }
  }

  rootURL = environment.rootURL;

  onWhishListChange() {
    // this.wishListService.getWishList({ page: 1, pageSize: 50 }).subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (err) => {}
    // );
  }

  changeOrder() {
    this.subsVar = this._fetchData(this.queryParams);
  }

  onItemClicked(item: any) {
    localStorage.setItem('SelectedVehicleSKU', item.VehicleSku);
    this.router.navigate(['/catalog/search/single']);
  }
  // saveFilters(v) {
  //   this.isListDataAvailable = false;
  //   this.queryParams = { ...this.queryParams, ...v };
  //   //this._fetchData();
  // }
  navigateRoute(route) {
    this.router.navigate([route], { queryParams: this.queryParams });
  }

  // Data Fetch
  _fetchData(v) {
    this.isListDataAvailable = false;
    this.queryParams = { ...this.queryParams, ...v };

    this.http
      .post(
        this.rootURL +
          `/Search?dir=${this.orderBy}&page=${this.pagination.page}&pageSize=${
            this.pagination.pageSize
          }${
            this.queryParams.countryCode
              ? '&countryCode=' + this.queryParams.countryCode
              : ''
          }`,
        v
        // Object.fromEntries(
        //   Object.entries(this.queryParams).filter(([_, v]) => v != '' || v)
        // )
      )
      .subscribe(
        (x) => {
          this.catalogList = x;
          this.pagination.collectionSize = x['TotalItems'];
          this.pagination.pageSize = x['ItemsPerPage'];
          this.isListDataAvailable = true;
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        },
        (error) => {
          console.log(error);
        }
      );

    this.carsData = carsData;
  }

  // Range Slider
  value: number = 25000;
  highValue: number = 65000;
  options: Options = {
    floor: 0,
    ceil: 100000,
    translate: (value: number): string => {
      return '$' + value;
    },
  };

  /**
   * Swiper setting
   */
  config = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true,
    loop: true,
  };

  /**
   * Filter button clicked
   */
  FilterSidebar() {
    document.getElementById('filters-sidebar')?.classList.toggle('show');
    document.querySelector('.vertical-overlay')?.classList.toggle('show');
  }

  /**
   * SidebarHide modal
   * @param content modal content
   */
  SidebarHide() {
    document.getElementById('filters-sidebar')?.classList.remove('show');
    document.querySelector('.vertical-overlay')?.classList.remove('show');
  }

  addItem(item) {
    this.store.dispatch(
      new AddItemAction(Object.assign({}, item, { details: { compare: true } }))
    );
  }

  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }

  onCompareCheckChange(item) {
    let objectsLength = 0;
    this.compareItems$.forEach((c) => {
      objectsLength = c.length;
    });

    if (objectsLength == 4) {
      item.compare = false;
      return;
    }

    this.addItem(item);
  }
}
