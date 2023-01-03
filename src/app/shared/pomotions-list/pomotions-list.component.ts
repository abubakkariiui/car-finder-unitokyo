import { Component, OnInit } from '@angular/core';
import { PromotionService } from 'src/app/services/promotions/promotion.service';

@Component({
  selector: 'app-pomotions-list',
  templateUrl: './pomotions-list.component.html',
  styleUrls: ['./pomotions-list.component.scss'],
})
export class PomotionsListComponent implements OnInit {
  promotionsList: any = [];
  errorResult: any = {};
  showPagination: boolean = false;

  filters = {
    page: 1,
    pageSize: 10,
  };

  collectionSize = 0;

  constructor(private promotionService: PromotionService) {}

  ngOnInit() {
    this._fetchData();
  }
  _fetchData() {
    this.promotionService.getPromotions(this.filters).subscribe(
      (data) => {
        this.promotionsList = data;
        this.collectionSize = data['TotalItems'];
        this.filters.pageSize = data['ItemsPerPage'];
        this.showPagination = this.collectionSize > this.promotionsList.length;
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
