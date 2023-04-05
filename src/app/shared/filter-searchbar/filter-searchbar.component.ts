import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import {
  manuFacturers,
  yearsList,
  enginCapacities,
  transmissions,
  fuelTypes,
  colors,
} from 'src/app/data';

import { environment } from 'src/environments/environment';
import { BrandsService } from 'src/app/services/brands.service';
@Component({
  selector: 'app-filter-searchbar',
  templateUrl: './filter-searchbar.component.html',
  styleUrls: ['./filter-searchbar.component.scss'],
})
export class FilterSearchbarComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  @Input() filtersProp: any;

  settingParamsLoading: boolean = false;

  manuFacturers!: any;
  yearsList!: any;
  slidersData: any;
  showRoomsList: any;
  brandsData: any;
  modelsList!: any;
  enginCapacities: any;
  transmissionsList: any;
  fuelTypesList: any;
  colorsList: any;

  defaultFilters = {
    Type: '',
    SubType: '',
    ManufacturerId: '',
    ModelId: '',
    MinYear: 1960,
    MaxYear: 2023,
    MinMileage: 0,
    MaxMileage: 300000,

    Transmission: '',
    FuelType: '',
    Color: '',
    Drivertrain: '',
    StockLocation: '',
    EngineSize: '',

    Keywords: '',

    AirConditioning: false,
    PowerSteering: false,
    PowerWindows: false,
    PowerMirror: false,
    CentralLocking: false,
    Stereo: false,
    AlloyWheel: false,
    RearSpoiler: false,
    Airbag: false,
    DualAirbags: false,
    SunRoof: false,
    BodyKit: false,
    LeatherSeats: false,
    KeylessEntry: false,
    HeightControl: false,
    HIDLights: false,
    AntiTheftSystem: false,
    Long: false,
    HighRoof: false,
    HighDeck: false,
    AntilockBreakingSystem: false,
  };

  filters = {
    Type: '',
    SubType: '',
    ManufacturerId: '',
    ModelId: '',
    MinYear: 1960,
    MaxYear: 2023,
    MinMileage: 0,
    MaxMileage: 100000000,

    Transmission: '',
    FuelType: '',
    Color: '',
    Drivertrain: '',
    StockLocation: '',
    EngineSize: '',

    Keywords: '',

    AirConditioning: false,
    PowerSteering: false,
    PowerWindows: false,
    PowerMirror: false,
    CentralLocking: false,
    Stereo: false,
    AlloyWheel: false,
    RearSpoiler: false,
    Airbag: false,
    DualAirbags: false,
    SunRoof: false,
    BodyKit: false,
    LeatherSeats: false,
    KeylessEntry: false,
    HeightControl: false,
    HIDLights: false,
    AntiTheftSystem: false,
    Long: false,
    HighRoof: false,
    HighDeck: false,
    AntilockBreakingSystem: false,
  };
  rootURL = environment.rootURL;

  YearOptions = {
    floor: 1960,
    ceil: 2023,
  };

  MileageOptions = {
    floor: 0,
    ceil: 100000000,
    translate: (value: number): string => {
      return value + ' Km';
    },
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
    private http: HttpClient,
    private _brandsService: BrandsService
  ) {}

  ngOnInit(): void {
    this._brandsService.getBrands().subscribe((b) => {
      this.brandsData = b;
    });

    this.showRoomsList = this.store.select((store) => store.showrooms);

    this.enginCapacities = enginCapacities;
    this.manuFacturers = manuFacturers;
    this.yearsList = yearsList;
    this.transmissionsList = transmissions;
    this.fuelTypesList = fuelTypes;
    this.colorsList = colors;

    this.enginCapacities = enginCapacities;

    if (Object.entries(this.filtersProp).length > 0) {
      if (this.filtersProp.ManufacturerId) {
        this.http
          .post(
            this.rootURL +
              `/GetModelByManufacturer?manufacturerId=${this.filtersProp.ManufacturerId}`,
            {}
          )
          .subscribe((t) => {
            this.modelsList = t;
          });
      }
    }
    this.filters = { ...this.filters, ...this.filtersProp };

    // again assign the default true and false values to filters

    // this.filters.AirConditioning = JSON.parse(this.filtersProp.AirConditioning);
    // this.filters.PowerSteering = JSON.parse(this.filtersProp.PowerSteering);
    // this.filters.PowerWindows = JSON.parse(this.filtersProp.PowerWindows);
    // this.filters.PowerMirror = JSON.parse(this.filtersProp.PowerMirror);
    // this.filters.CentralLocking = JSON.parse(this.filtersProp.CentralLocking);
    // this.filters.Stereo = JSON.parse(this.filtersProp.Stereo);
    // this.filters.AlloyWheel = JSON.parse(this.filtersProp.AlloyWheel);
    // this.filters.RearSpoiler = JSON.parse(this.filtersProp.RearSpoiler);
    // this.filters.Airbag = JSON.parse(this.filtersProp.Airbag);
    // this.filters.DualAirbags = JSON.parse(this.filtersProp.DualAirbags);
    // this.filters.SunRoof = JSON.parse(this.filtersProp.SunRoof);
    // this.filters.BodyKit = JSON.parse(this.filtersProp.BodyKit);
    // this.filters.LeatherSeats = JSON.parse(this.filtersProp.LeatherSeats);
    // this.filters.KeylessEntry = JSON.parse(this.filtersProp.KeylessEntry);
    // this.filters.HeightControl = JSON.parse(this.filtersProp.HeightControl);
    // this.filters.HIDLights = JSON.parse(this.filtersProp.HIDLights);
    // this.filters.AntiTheftSystem = JSON.parse(this.filtersProp.AntiTheftSystem);
    // this.filters.Long = JSON.parse(this.filtersProp.Long);
    // this.filters.HighRoof = JSON.parse(this.filtersProp.HighRoof);
    // this.filters.HighDeck = JSON.parse(this.filtersProp.HighDeck);
    // this.filters.AntilockBreakingSystem = JSON.parse(
    //   this.filtersProp.AntilockBreakingSystem
    // );

    // this.brandsData = this.store.select((store) => store.brands);

    // for (var [key, value] of Object.entries(this.filters)) {
    //   for (var [key2, value2] of Object.entries(this.filtersProp)) {
    //     console.log(typeof value);
    //   }
    // }
  }

  onChangeBrand(e) {
    this.http
      .post(this.rootURL + `/GetModelByManufacturer?manufacturerId=${e}`, {})
      .subscribe((t) => {
        this.modelsList = t;
      });
  }

  emitFilter(sf: any) {
    // this.setUrlParams(sf);

    let x: any = {};
    Object.entries(this.filters).forEach(([key, value]) => {
      if (value === true || (value != 'false' && value != ''))
        x[`${key}`] = value;
    });

    // let x = Object.keys(this.filters).filter((k , v) => {
    //   if (
    //     this.filters[k] === true ||
    //     (this.filters[k] && this.filters[k].Length > 0)
    //   ) {
    //     return k;
    //   }
    // });

    this.newItemEvent.emit(x);
  }

  clearFilters(sf: any) {
    // this.settingParamsLoading = true;
    // this.setUrlParams(this.defaultFilters);
    this.filters = this.defaultFilters;
    this.newItemEvent.emit();
    this.router.navigateByUrl('/catalog/search/list');
    // this.settingParamsLoading = false;
  }

  setUrlParams(sf: any) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: sf,
      queryParamsHandling: 'merge',
    });
  }

  /**
   * Filter button clicked
   */
  FilterSidebar() {
    document.getElementById('filters-sidebar')?.classList.toggle('show');
    document.querySelector('.vertical-overlay')?.classList.toggle('show');
  }

  // Range Slider

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
   * SidebarHide modal
   * @param content modal content
   */
  SidebarHide() {
    document.getElementById('filters-sidebar')?.classList.remove('show');
    document.querySelector('.vertical-overlay')?.classList.remove('show');
  }
}
