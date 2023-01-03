import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { countries } from 'src/app/data';
import { CatalogService } from 'src/app/services/catalog/catalog.service';
import { QuoteService } from 'src/app/services/quotes/quote.service';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-submit-quote',
  templateUrl: './submit-quote.component.html',
  styleUrls: ['./submit-quote.component.scss'],
})
export class SubmitQuoteComponent implements OnInit {
  countriesList: any = [];

  constructor(
    private quoteService: QuoteService,
    private catalogService: CatalogService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  VehicleObject: any = {};
  ngOnInit(): void {
    this.countriesList = countries;

    this._fetchData();
  }
  _fetchData() {
    var queryparams: any = { VehicleSku: 0 };
    this.route.queryParams.subscribe((params) => {
      for (var [k, v] of Object.entries(params)) {
        v = v.toLocaleLowerCase() === 'true' ? true : false;
      }
      queryparams = params;
    });

    this.catalogService.getCatalogDetails(queryparams.VehicleSku).subscribe(
      (d) => {
        this.VehicleObject = d;
      },
      (e) => {}
    );
  }
  submitQuote() {
    let params = {};
    this.quoteService.submitQuote(params).subscribe(
      (d) => {},
      (e) => {}
    );
  }
}
