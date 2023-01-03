import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartCatalogService {
  constructor() {}

  cartCatalog = [];

  addToCartCatalog(addedItem) {
    this.cartCatalog.push(addedItem);
    this.saveCartCatalog();
  }

  getCartCatalog() {
    return this.cartCatalog;
  }

  loadCartCatalog(): void {
    this.cartCatalog = JSON.parse(localStorage.getItem('CartCatalog')) ?? [];
  }

  saveCartCatalog(): void {
    localStorage.setItem('CartCatalog', JSON.stringify(this.cartCatalog));
  }

  clearCartCatalog() {
    this.cartCatalog = [];

    localStorage.removeItem('CartCatalog');
  }

  removeItem(VehicleSku) {
    const index = this.cartCatalog.findIndex(
      (o) => o.VehicleSku === VehicleSku
    );

    if (index > -1) {
      this.cartCatalog.splice(index, 1);
      this.saveCartCatalog();
    }
  }

  itemInCartCatalog(item): boolean {
    return (
      this.cartCatalog.findIndex((o) => o.VehicleSku === item.VehicleSku) > -1
    );
  }
}
