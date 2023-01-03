import { Component, OnInit, Input } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  productList: Product[] = [];
  @Input() brandsData: any;

  breadCrumbItems!: Array<{}>;

  admin_base_url: string;

  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.admin_base_url = environment.admin_base_url; //;

    this.productList = this.productService.getProducts();
  }

  /**
   * Swiper setting
   */
  CTA = {
    breakpoints: {
      375: { slidesPerView: 2, spaceBetween: 2 },
      640: {
        slidesPerView: 4,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
    initialSlide: 0,
    navigation: true,
    loop: true,
  };
}
