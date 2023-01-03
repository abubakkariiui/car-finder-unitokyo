import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { InquiriesService } from 'src/app/services/inquiries/inquiries.service';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-my-inquiries',
  templateUrl: './my-inquiries.component.html',
  styleUrls: ['./my-inquiries.component.scss'],
})
export class MyInquiriesComponent implements OnInit {
  errorResult: any = {};

  inquiriesList: any = [];
  selectedInquiry: any = {};
  loading: boolean = false;
  totalItems: any;

  showPagination: boolean = false;

  filters = {
    page: 1,
    pageSize: 1,
  };

  collectionSize = 0;

  constructor(
    private modalService: NgbModal,
    private inquiriesService: InquiriesService
  ) {}

  ngOnInit() {
    this._fetchData();
  }
  getInquiryDetails(item, model) {
    this.loading = true;
    this.selectedInquiry = {};
    this.inquiriesService.getInquiryDetails(item.Id).subscribe(
      (d) => {
        this.selectedInquiry = d;
        this.loading = false;
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
    this.inquiriesService.getInquiriesList(this.filters).subscribe(
      (data) => {
        this.inquiriesList = data;
        this.collectionSize = data['TotalItems'];
        this.filters.pageSize = data['ItemsPerPage'];
        this.totalItems = data['TotalItems'];
        this.showPagination = this.totalItems > this.inquiriesList.Items.length;
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
}
