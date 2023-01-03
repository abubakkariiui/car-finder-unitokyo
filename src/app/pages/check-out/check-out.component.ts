import { Component, OnInit } from '@angular/core';
import { carsData } from 'src/app/data';
import { List } from 'src/app/pages/catalog/list/list.model';

import { CartCatalogService } from 'src/app/services/cartCatalog.service';

import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { CatalogService } from 'src/app/services/catalog/catalog.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {
  checkoutForm: UntypedFormGroup;

  paramSku: any = '';

  breadCrumbItems!: Array<{}>;
  carsData!: List[];
  isListDataAvailable: boolean = false;
  cartCatalogList = [];
  isCartEmpty: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    public CartCatalogService: CartCatalogService,
    private _catalogService: CatalogService
  ) {
    this.isListDataAvailable = false;
  }

  config = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true,
    loop: true,
  };

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.paramSku = params['sku'];
    });

    if (this.paramSku) {
      this._catalogService
        .getCatalogDetails(this.paramSku)
        .subscribe((data) => {
          this.cartCatalogList.push(data);
        });
    } else {
      this.CartCatalogService.loadCartCatalog();
      this.cartCatalogList = this.CartCatalogService.getCartCatalog();
    }

    this.checkoutForm = this.formBuilder.group({
      AccountHolderName: ['', [Validators.required]],
      AccountNumber: ['', [Validators.required]],
      cvv: ['', [Validators.required]],
      expireDate: ['', [Validators.required]],
    });

    this.carsData = carsData;
  }

  _fetchData() {}

  get total() {
    return this.cartCatalogList.reduce(
      (previousValue, currentValue) => previousValue + currentValue.Price,
      0
    );
  }
  checkout() {
    console.log(this.checkoutForm.value);
  }

  clearCart() {
    localStorage.removeItem('CartCatalog');
    this.CartCatalogService.loadCartCatalog();
    this.cartCatalogList = this.CartCatalogService.getCartCatalog();
    this.isCartEmpty = true;
  }
}
