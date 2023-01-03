import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Range Slider
import { Options } from '@angular-slider/ngx-slider';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.scss'],
})
export class SearchformComponent implements OnInit {
  @Input() small!: boolean;

  rootURL = environment.rootURL;

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  @Input() brandsData: any;

  @Input() manuFacturers: any;

  @Input() yearsList: any;

  modelsList: any;

  setBrand(brand: any) {
    this.searchform.ManufacturerId = brand.Id || 0;
    const brandDom = document.querySelector('.brand') as HTMLElement;
    brandDom.innerText = brand.Title || '-- select --';
    if (brand.Id)
      this.http
        .post(
          this.rootURL + `/GetModelByManufacturer?manufacturerId=${brand.Id}`,
          {}
        )
        .subscribe((t) => {
          this.modelsList = t;
        });

    this.setModel({});
  }
  setYear(year: any) {
    this.searchform.MinYear = year;
    const yy = document.querySelector('.year') as HTMLElement;
    yy.innerText = year || '-- select --';
  }
  setTitle(title: any) {
    this.searchform.Keywords = title;
  }
  setModel(model: any) {
    this.searchform.ModelId = model.Id || 0;
    const modelDom = document.querySelector('.model') as HTMLElement;
    modelDom.innerText = model.Title || '-- select --';
  }

  searchform = {
    Keywords: '',
    ManufacturerId: '',
    ModelId: '',
    MinYear: 1960,
    MaxYear: 2023,

    minPrice: 0,
    maxPrice: 100000,
  };

  defaultSearchform = {
    Keywords: '',
    ManufacturerId: '',
    ModelId: '',
    MinYear: 1960,
    MaxYear: 2023,

    minPrice: 0,
    maxPrice: 100000,
  };

  onSubmit() {
    let params = Object.entries(this.searchform).reduce(
      (a, [k, v]) => (v ? ((a[k] = v), a) : a),
      {}
    );
    this._router.navigate(['/catalog/search/list'], { queryParams: params });
  }

  clear() {
    this.searchform = this.defaultSearchform;
    document.querySelector('.brand').innerHTML = 'Brand';
    document.querySelector('.model').innerHTML = 'Model';
    document.querySelector('.year').innerHTML = 'Year';
    this.searchform.minPrice = 0;
    this.searchform.maxPrice = 100000;
    this.searchform.Keywords = '';
    this.modelsList = [];
  }

  navigateRoute(route) {
    this._router.navigate(['/catalog/search/list'], {});
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

  ngOnInit(): void {
    //  brand Select data
    document
      .getElementById('brand-content')
      ?.addEventListener('click', function (e) {
        const input = e.target as HTMLElement;
        const brand = document.querySelector('.brand') as HTMLElement;
        brand.innerText = input.innerText;
      });

    //  year Select data
    document
      .getElementById('year-content')
      ?.addEventListener('click', function (e) {
        const input = e.target as HTMLElement;
        const year = document.querySelector('.year') as HTMLElement;
        year.innerText = input.innerText;
      });

    //  Model Select data
    document
      .getElementById('model-content')
      ?.addEventListener('click', function (e) {
        const input = e.target as HTMLElement;
        const model = document.querySelector('.model') as HTMLElement;
        model.innerText = input.innerText;
      });

    // // Model Select data
    // document
    //   .getElementById('model-content')
    //   ?.addEventListener('click', function (e) {
    //     const input = e.target as HTMLElement;
    //     const model = document.querySelector('.model') as HTMLElement;
    //     model.innerText = input.innerText;
    //   });

    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }
  }
}
