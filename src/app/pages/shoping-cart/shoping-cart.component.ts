import { Component, OnInit } from '@angular/core';
import { carsData } from 'src/app/data';
import { List } from 'src/app/pages/catalog/list/list.model';

import { CartCatalogService } from 'src/app/services/cartCatalog.service';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss'],
})
export class ShopingCartComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  carsData!: List[];
  isListDataAvailable: boolean = false;
  cartCatalogList = [];
  isCartEmpty: boolean = true;

  constructor(public CartCatalogService: CartCatalogService) {
    this.isListDataAvailable = false;
  }

  config = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true,
    loop: true,
  };

  ngOnInit(): void {
    this.CartCatalogService.loadCartCatalog();
    this.cartCatalogList = this.CartCatalogService.getCartCatalog();
    this.carsData = carsData;

  }

  _fetchData() { }

  get total() {
    return this.cartCatalogList.reduce(
      (previousValue, currentValue) => previousValue + currentValue.Price,
      0
    );
  }

  deleteAllItems() {
    this.CartCatalogService.clearCartCatalog();
    this.cartCatalogList = this.CartCatalogService.getCartCatalog();
  }

  deleteSingleItem(VehicleSku: string) {
    this.CartCatalogService.removeItem(VehicleSku);
    this.CartCatalogService.loadCartCatalog();
    this.cartCatalogList = this.CartCatalogService.getCartCatalog();
    if(localStorage.getItem('CartCatalog').length >= 2){
      this.isCartEmpty = true;
    }
  }

  clearCart(){
    localStorage.removeItem('CartCatalog');
    this.CartCatalogService.loadCartCatalog();
    this.cartCatalogList = this.CartCatalogService.getCartCatalog();
    this.isCartEmpty = true;
  }
}
