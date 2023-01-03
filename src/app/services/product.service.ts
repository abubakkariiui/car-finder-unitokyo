import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(
      1,
      'product 1 ',
      'this is the description of product one ',
      1000
    ),
    new Product(
      2,
      'product 2 ',
      'this is the description of product two ',
      2000
    ),
    new Product(
      3,
      'product 3 ',
      'this is the description of product three ',
      3000
    ),
    new Product(
      4,
      'product 4 ',
      'this is the description of product four ',
      4000
    ),
    new Product(
      5,
      'product 5 ',
      'this is the description of product five ',
      5000
    ),
  ];

  constructor() {}

  getProducts(): Product[] {
    //TODO : populate from api  and return observable
    return this.products;
  }
}
