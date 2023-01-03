import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogService } from 'src/app/services/blogs/blog.service';
import { StoreBlogs } from 'src/app/store/actions/blog.actions';
import { AppState } from 'src/app/store/app-state.model';
import * as $ from 'jquery';
import { blogs } from './blog-grid.model';
import { blogsData } from './data';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.scss'],
})

/**
 * BlogGrid Component
 */
export class BlogGridComponent implements OnInit {
  month: any;
  page: number = 1;
  pageSize: number = 10;
  blogDate: any;
  // bread crumb items
  breadCrumbItems!: Array<{}>;

  selectedMonth: any;

  admin_base_url: any = environment.admin_base_url; //;

  blogsData: any = [];
  blogsData1: any = [];
  blogsData2: any = [];
  blogsData3: any = [];

  blogsCategories: any = [];
  categories: any = [];

  monthSelector: any = 'null';
  catSelector: any = 'null';

  loading: boolean = false;

  filters: any = {
    q: '',
    page: 1,
    pageSize: 10,
    PostId: '',
    CommentBody: '',
    Title: '',
    id: '',
    rate: '',
  };

  constructor(
    private _blogService: BlogService,
    private store: Store<AppState>
  ) {
    this.month = 'Jan';
  }

  ngOnInit(): void {
    this.loading = true;
    this.categoryList();

    this._blogService.getBlogList().subscribe((b) => {
      this.blogsData = b;
      this.blogsData?.Items.forEach((b, idx) => {
        if (idx == 0) this.blogsData1.push(b);
        if (idx > 0 && idx <= 2) this.blogsData2.push(b);
        if (idx > 2) this.blogsData3.push(b);
      });

      this.loading = false;
    });

    this._blogService.getBlogCategory().subscribe((b) => {
      this.blogsCategories = b;
    });

    this.breadCrumbItems = [
      { label: 'Home', link: '' },
      { label: 'News & reviews', active: true },
    ];

    // Data Get Function
    this._fetchData();
    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }
  }

  blogsByCategoryId(e: any) {
    if (e === 'null') return;
    var id = parseInt(e.target.value);
    this._blogService.blogByCategoryId(id).subscribe((res) => {
      this.blogsData = res;
      this.blogsData1 = [];
      this.blogsData2 = [];
      this.blogsData3 = [];

      this.blogsData?.Items.forEach((b, idx) => {
        if (idx == 0) {
          this.blogsData1.push(b);
        } else {
          this.blogsData1 = [];
        }
        if (idx > 0 && idx <= 2) this.blogsData2.push(b);
        if (idx > 2) this.blogsData3.push(b);
      });
      this.blogDate = this.blogsData.Items.CreatedOn;
    });
  }

  blogsByMonth(e: any) {
    if (e === 'null') return;
    var month = e.target.value;
    this._blogService.blogByMonth(month).subscribe((res) => {
      this.blogsData = res;
      this.blogsData1 = [];
      this.blogsData2 = [];
      this.blogsData3 = [];

      this.blogsData?.Items.forEach((b, idx) => {
        if (idx == 0) {
          this.blogsData1.push(b);
        } else {
          this.blogsData1 = [];
        }
        if (idx > 0 && idx <= 2) this.blogsData2.push(b);
        if (idx > 2) this.blogsData3.push(b);
      });
      this.blogDate = this.blogsData.Items.CreatedOn;
    });
  }

  categoryList() {
    this._blogService.categoryList().subscribe((res) => {
      this.categories = res;
    });
  }

  // Data Fetch
  private _fetchData() {
    this.blogsData = blogsData;
  }

  sliceShortDescription(str) {
    return str; // str.split(' ').slice(0, 20);
  }

  clearForm() {
    this.getBlogAgain();
    this.filters.q = '';
    this.monthSelector = 'null';
    this.catSelector = 'null';
    // document.querySelector('.month').innerHTML = '-- select --';
    // document.querySelector('.category').innerHTML = '-- select --';
  }

  BlogSearching() {
    this._blogService.searchBlog(this.filters).subscribe((res) => {
      this.blogsData = res;
      this.blogsData1 = [];
      this.blogsData2 = [];
      this.blogsData3 = [];

      this.blogsData?.Items.forEach((b, idx) => {
        if (idx == 0) {
          this.blogsData1.push(b);
        } else {
          this.blogsData1 = [];
        }
        if (idx > 0 && idx <= 2) this.blogsData2.push(b);
        if (idx > 2) this.blogsData3.push(b);
      });
      this.blogDate = this.blogsData.Items.CreatedOn;
      if (this.filters.q == '') {
        this.getBlogAgain();
      }
    });
  }

  getBlogAgain() {
    this._blogService.getBlogList().subscribe((b) => {
      this.blogsData = b;
      this.blogsData1 = [];
      this.blogsData2 = [];
      this.blogsData3 = [];

      this.blogsData?.Items.forEach((b, idx) => {
        if (idx == 0) {
          this.blogsData1.push(b);
        } else {
          this.blogsData1 = [];
        }
        if (idx > 0 && idx <= 2) this.blogsData2.push(b);
        if (idx > 2) this.blogsData3.push(b);
      });
      this.blogDate = this.blogsData.Items.CreatedOn;
    });
  }

  config = {
    initialSlide: 0,
    slidesPerView: 1,
    pagination: true,
    navigation: true,
  };
}
