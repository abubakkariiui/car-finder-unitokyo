import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app-state.model';

import { List } from 'src/app/pages/catalog/list/list.model';
import { carsData } from '../../data';
import { CarModel } from 'src/app/store/models/car.model';
import {
  AddItemAction,
  DeleteItemAction,
} from 'src/app/store/actions/compare.actions';

import { Router } from '@angular/router';
import { ToastService } from 'src/app/toast/toast-service';
import { LatestCatalogService } from 'src/app/services/catalog/latest-catalog.service';

@Component({
  selector: 'app-latest-vehicles',
  templateUrl: './latest-vehicles.component.html',
  styleUrls: ['./latest-vehicles.component.scss'],
})
export class LatestVehiclesComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private router: Router,
    public toastService: ToastService,
    private _latestCatalogService: LatestCatalogService
  ) {}

  catalog: any;

  latestCatalog: any;

  vehiclesData!: Array<{}>;

  compareItems$: Observable<Array<CarModel>>;

  carsData!: List[];

  ngOnInit(): void {
    this._fetchData();
  }

  private _fetchData() {
    this._latestCatalogService.getLatestCatalog().subscribe((data) => {
      this.latestCatalog = data;
    });

    this.carsData = carsData;

    this.compareItems$ = this.store.select((store) => store.compare);

    this.latestCatalog = this.store.select((store) => store.latestCatalog);
  }

  config = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 25,
    pagination: true,
    navigation: false,
    loop: true,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
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

  onWhishListChange() {
    // this.toastService.show('Added to wishList', {
    //   classname: 'bg-success text-light',
    //   delay: 5000,
    // });
    // this._latestCatalogService.getLatestCatalog().subscribe(
    //   (data) => {
    //     this.latestCatalog = data;
    //     this.toastService.show('Added to wishList', {
    //       classname: 'bg-success text-light',
    //       delay: 5000,
    //     });
    //   },
    //   (err) => {
    //     this.toastService.show('Please login', {
    //       classname: 'bg-warning text-light',
    //       delay: 5000,
    //     });
    //   }
    // );
  }

  addItem(item) {
    this.store.dispatch(
      new AddItemAction(Object.assign({}, item, { details: { compare: true } }))
    );
  }

  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }

  onItemClicked(item: any) {
    localStorage.setItem('SelectedVehicleSKU', item.VehicleSku);
    this.router.navigate(['/catalog/search/single']);
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
