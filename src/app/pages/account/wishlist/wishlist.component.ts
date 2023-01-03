import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from 'src/app/services/orders/order.service';

import { WishListService } from 'src/app/services/wishlist/wishlist.service';
import { ToastService } from 'src/app/toast/toast-service';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})

/**
 * Wishlist Component
 */
export class WishlistComponent implements OnInit {
  breadCrumbItems!: Array<{}>;

  wishList: any = [];
  errorResult: any = {};
  whislistCar: any;
  orderData: any;
  totalItems: any;
  showPagination: boolean = false;
  filters = {
    page: 1,
    pageSize: 10,
  };

  collectionSize = 0;

  selectedQuote: any = {};
  selectedAction: any = '';

  constructor(
    private wishListService: WishListService,
    private orderService: OrderService,
    private router: Router,
    private toastService: ToastService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Home', link: '' },
      { label: 'Account', link: '/account/info' },
      { label: 'Wishlist', active: true },
    ];

    // Chat Data Get Function
    this._fetchData();

    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }

    // get the object from localstorage and display
    // this.whislistCar = JSON.parse(localStorage.getItem("VehicleForInquiry"));
    // console.log("Data from localstorage", this.whislistCar)
  }

  // Chat Data Fetch
  _fetchData() {
    this.wishListService.getWishList(this.filters).subscribe(
      (data) => {
        this.wishList = data;
        this.collectionSize = data['TotalItems'];
        this.filters.pageSize = data['ItemsPerPage'];
        this.totalItems = data['TotalItems'];
        this.showPagination = this.totalItems > this.wishList.Items.length;
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
        // console.log(this.wishList.Items)
      },
      (err) => {
        this.errorResult = err;
      }
    );
  }

  placeAdvanceOrder(id: any) {
    var singleCar = this.wishList.Items.find((item) => item.$id === id);
    let filter = {
      YearFrom: singleCar.YearFrom,
      YearTo: singleCar.YearTo,
      Color: singleCar.Color,
      Transmission: singleCar.Transmission,
      FuelType: singleCar.FuelType,
      EnginCapacity: singleCar.EnginCapacity,
      DriveTrain: singleCar.DriveTrain,
      ManufacturerId: singleCar.ManufacturerId,
      ModelId: singleCar.ModelId,
      CountryId: singleCar.Country.Id,
      CustomerId: singleCar.CustomerId,
      Remarks: singleCar.Remarks,
    };
    this.orderService.AdvanceOrder(filter, true).subscribe((res) => {
      console.log('Order Placed', res);
    });
  }

  confirmModel(name, content, item) {
    this.selectedAction = name;
    this.selectedQuote = item;
    this.modalService.open(content, { size: 'lg', centered: true });
    document.querySelector('.modal-content')?.classList.add('border-light');
  }

  removeFromWishList(item) {
    this.wishListService.removeFromWishList(item.Id).subscribe(
      (data) => {
        this.toastService.show(`Removed from wishlish Successfully`, {
          classname: 'bg-success text-light',
          delay: 5000,
        });
        this._fetchData();
      },
      (err) => {
        this.errorResult = err;
        this.toastService.show(`Something went wrong try again`, {
          classname: 'bg-danger text-light',
          delay: 5000,
        });
      }
    );
  }

  placeOrder(item) {
    this.wishListService.WishlistToAdvanceQuote(item.Id).subscribe(
      (data) => {
        this.toastService.show(`Order Successfully Placed`, {
          classname: 'bg-success text-light',
          delay: 5000,
        });
        this._fetchData();
      },
      (err) => {
        this.errorResult = err;
        this.toastService.show(`Something went wrong please try again`, {
          classname: 'bg-danger text-light',
          delay: 5000,
        });
      }
    );
  }

  showInfo(item, model) {
    // if (!item.VehicleSku) return;
    this.selectedQuote = item;
    this.modalService.open(model, { size: 'xl', centered: true });
    document.querySelector('.modal-content')?.classList.add('border-light');
  }

  OK() {
    if (this.selectedAction === 'order') {
      this.placeOrder(this.selectedQuote);
    } else if (this.selectedAction === 'delete') {
      this.removeFromWishList(this.selectedQuote);
    } else alert('noting done');
  }

  SideBarMenu() {
    document.getElementById('account-nav')?.classList.toggle('show');
  }

  config = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true,
    loop: true,
  };
}
