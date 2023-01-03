import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CatalogService } from 'src/app/services';

import { OrderService } from 'src/app/services/orders/order.service';
import { ToastService } from 'src/app/toast/toast-service';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss'],
})
export class MyOrdersComponent implements OnInit {
  ordersList: any = [];
  errorResult: any = {};

  selectedOrder: any = {};
  totalItems: any;
  loading: boolean = false;
  vehicleDetails: any = {};
  showPagination: boolean = false;

  filters = {
    page: 1,
    pageSize: 10,
  };

  pagination: { page: number; pageSize: number } = {
    page: 1,
    pageSize: 2,
  };

  collectionSize: 0;

  constructor(
    private modalService: NgbModal,
    private orderService: OrderService,
    private toastService: ToastService,
    private catalogService: CatalogService
  ) {}

  ngOnInit() {
    this.getUserOrders();
  }

  getUserOrders() {
    this.orderService.getOrders(this.filters).subscribe(
      (data) => {
        this.ordersList = data;
        this.collectionSize = data['TotalItems'];
        this.filters.pageSize = data['ItemsPerPage'];
        this.totalItems = data['TotalItems'];

        this.showPagination = this.totalItems > this.ordersList.Items.length;
      },
      (err) => {
        this.errorResult = err;
      }
    );
  }

  cancelOrder(item: any) {
    let order = {
      Id: item.Id,
      Comment: 'Cancel Order',
      VehicleSku: item.Vehicle.Sku,
    };
    this.orderService.cancelOrder(order).subscribe((res) => {
      let resultMessage = res;
      this.toastService.show(`${resultMessage}`, {
        classname: 'bg-success text-light',
        delay: 5000,
      });
      this.getUserOrders();
    });
  }

  getOrderDetails(item, model) {
    this.loading = true;
    this.selectedOrder = {};
    this.orderService.getOrderDetails(item.Id).subscribe(
      (d) => {
        this.selectedOrder = d;
        this.loading = false;
      },
      (e) => {}
    );

    this.toggleModal(model);
  }
  showInfo(item, model) {
    if (!item.Vehicle.VehicleSku) return;
    this.selectedOrder = item;

    this.modalService.open(model, { size: 'xl', centered: true });
    document.querySelector('.modal-content')?.classList.add('border-light');
  }
  getVehicleDetails(item) {
    this.catalogService.getCatalogDetails(item.VehicleSku).subscribe(
      (d) => {
        this.vehicleDetails = d;
      },
      (e) => {}
    );
  }
  toggleModal(staticDataModal: any) {
    this.modalService.open(staticDataModal, { size: 'lg', centered: true });
    document.querySelector('.modal-content')?.classList.add('border-light');
  }
}
