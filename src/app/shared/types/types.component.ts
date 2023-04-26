import { Component, OnInit, Input } from '@angular/core';

import { manuFacturers } from 'src/app/data';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
})
export class TypesComponent implements OnInit {
  @Input() small!: boolean;
  countryCode: string;
  manuFacturers!: any;

  constructor() {}

  ngOnInit(): void {
    this.countryCode = localStorage.getItem('countryCode');
    this.manuFacturers = manuFacturers;
    this._fetchData();
  }
  // Chat Data Fetch
  private _fetchData() {}

  private navigateRoute(data: any) {
    console.log(data.title.toLowerCase());
  }
}
