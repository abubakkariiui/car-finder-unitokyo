import { Component, OnInit } from '@angular/core';
import { manuFacturers } from 'src/app/data';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state.model';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CatalogService } from 'src/app/services/catalog/catalog.service';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-chasis-check',
  templateUrl: './chasis-check.component.html',
  styleUrls: ['./chasis-check.component.scss'],
})
export class ChasisCheckComponent implements OnInit {
  validationform!: UntypedFormGroup;
  brandsData: any;
  manuFacturers!: any;
  modelsList!: any;
  rootURL = environment.rootURL;
  isLoading: boolean;
  loading: boolean = false;

  htmlValue: {};
  carsData: any;

  constructor(
    private catalogService: CatalogService,
    private store: Store<AppState>,
    private http: HttpClient,
    private formBuilder: UntypedFormBuilder
  ) {}

  private _fetchData() {
    this.manuFacturers = manuFacturers;
    this.brandsData = this.store.select((store) => store.brands);
  }

  onChangeBrand(e) {
    this.http
      .post(this.rootURL + `/GetModelByManufacturer?manufacturerId=${e}`, {})
      .subscribe((t) => {
        this.modelsList = t;
      });
  }

  ngOnInit(): void {
    this.validationform = this.formBuilder.group({
      // ManufacturerId: [''],
      Chesis: ['', Validators.required],
    });
  }

  get form() {
    return this.validationform.controls;
  }

  validSubmit() {
    if (this.validationform.status === 'VALID') {
      this.catalogService.chesisCheck(this.validationform.value).subscribe((res) => {
        this.carsData = res;
        this.isLoading = true;
        if (this.carsData.length > 0) {
          this.loading = true;
        } else {
          this.loading = false;
        }
      }, (error) => {
        console.error(error);
        this.isLoading = false;
        this.loading = false;
      });
    }
  }
  
}
