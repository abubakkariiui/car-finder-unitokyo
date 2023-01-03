import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { searchedCarsData } from 'src/app/data';
import { AppState } from 'src/app/store/app-state.model';
import { List } from './search.model';

import { manuFacturers, yearsList } from 'src/app/data';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchedCarsData!: List[];
  page: number = 1;
  pageSize = 4;
  collectionSize = searchedCarsData.length;

  brandsData: any = [];
  manuFacturers: any = [];
  yearsList: any = [];

  constructor(private store: Store<AppState>) {
    this.refreshCountries();
  }

  refreshCountries() {}

  ngOnInit(): void {
    this.manuFacturers = manuFacturers;

    this.yearsList = yearsList;

    this.brandsData = this.store.select((store) => store.brands);
    this.searchedCarsData = searchedCarsData;
  }

  /**
   * Filter button clicked
   */
  FilterSidebar() {
    document.getElementById('blog-sidebar')?.classList.toggle('show');
    document.querySelector('.vertical-overlay')?.classList.toggle('show');
  }
}
