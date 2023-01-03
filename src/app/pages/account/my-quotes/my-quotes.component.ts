import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from 'src/app/services/orders/order.service';

import { QuoteService } from 'src/app/services/quotes/quote.service';
import { ToastService } from 'src/app/toast/toast-service';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-my-quotes',
  templateUrl: './my-quotes.component.html',
  styleUrls: ['./my-quotes.component.scss'],
})
export class MyQuotesComponent implements OnInit {
  quotesList: any = [];
  errorResult: any = {};
  isLoading: boolean = false;
  totalItems: any;

  selectedAction: any = '';

  filters = {
    page: 1,
    pageSize: 10,
  };

  selectedQuote: any = {};

  collectionSize = 0;
  loading: boolean = false;
  showPagination: boolean = false;

  constructor(
    private modalService: NgbModal,
    private quoteService: QuoteService,
    private orderService: OrderService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this._fetchData();
  }

  confirmModel(name, content, item) {
    this.selectedAction = name;
    this.selectedQuote = item;
    this.modalService.open(content, { size: 'lg', centered: true });
    document.querySelector('.modal-content')?.classList.add('border-light');
  }

  getPrice(i, name) {
    if (name === 'web') {
      return i.Type == 0 ? i.Price : ' - ';
    } else if (name === 'quoted') {
      if (i.Status > 0) {
        return `${i.Price}   ${
          i.DiscountAmount > 0
            ? '<br />' + i.IsDiscountPercent
              ? i.DiscountAmount + '%'
              : '$' + i.DiscountAmount
            : ''
        } `;
      } else return ' - ';
    } else if (name === 'down') {
      return `${i.DownPayment} %`;
    } else return ' - ';
  }

  getQuoteDetails(item, model) {
    this.loading = true;
    this.selectedQuote = {};
    this.quoteService.getQuoteDetails(item.Id).subscribe(
      (d) => {
        this.selectedQuote = d;
        this.loading = false;
        console.log('Quote Details:', this.selectedQuote);
      },
      (e) => {}
    );

    this.toggleModal(model);
  }
  toggleModal(staticDataModal: any) {
    this.modalService.open(staticDataModal, { size: 'lg', centered: true });
    document.querySelector('.modal-content')?.classList.add('border-light');
  }
  _fetchData() {
    this.quoteService.getQuotes(this.filters).subscribe(
      (data) => {
        this.quotesList = data;
        this.collectionSize = data['TotalItems'];
        this.filters.pageSize = data['ItemsPerPage'];
        this.totalItems = data['TotalItems'];
        this.showPagination = this.totalItems > this.quotesList.Items.length;

        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      },
      (err) => {
        this.errorResult = err;
      }
    );
  }
  showInfo(item, model) {
    if (!item.VehicleSku) return;
    this.selectedQuote = item;

    this.modalService.open(model, { size: 'xl', centered: true });
    document.querySelector('.modal-content')?.classList.add('border-light');
  }
  OK() {
    if (this.selectedAction === 'order') {
      this.placeOrder();
    } else if (this.selectedAction === 'cancel') {
      this.cancelOrder();
    } else alert('noting done');
  }
  placeOrder() {
    this.isLoading = true;
    this.orderService.createOrder(this.selectedQuote.Id).subscribe(
      (data) => {
        this.isLoading = false;
        this._fetchData();
        this.toastService.show(`Order placed successfully`, {
          classname: 'bg-success text-light',
          delay: 5000,
        });
      },
      (err) => {
        this.isLoading = false;
        this.errorResult = err;
        this.toastService.show(`An error occured`, {
          classname: 'bg-warning text-light',
          delay: 5000,
        });
      }
    );
  }
  cancelOrder() {
    this.quoteService.cancelQuote(this.selectedQuote.Id).subscribe(
      (data) => {
        this.toastService.show(`Order cancelled successfully`, {
          classname: 'bg-success text-light',
          delay: 5000,
        });
        this._fetchData();
      },
      (err) => {
        this.errorResult = err;
        this.toastService.show(`An error occured`, {
          classname: 'bg-warning text-light',
          delay: 5000,
        });
      }
    );
  }
}
