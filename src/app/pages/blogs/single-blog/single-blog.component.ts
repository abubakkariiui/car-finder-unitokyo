import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { news } from './single-blog.model';
import { BlogService } from 'src/app/services/blogs/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state.model';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';

import { environment } from 'src/environments/environment';
import { ToastService } from 'src/app/toast/toast-service';
@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss'],
})

/**
 * SingleBlog Component
 */
export class SingleBlogComponent implements OnInit {
  admin_base_url: string;

  currentRate: any = 0;
  selectedRating: any;
  userExpired = this.tokenStorage.getUser().ExpirationTime;
  TOKEN = this.tokenStorage.getToken();
  latestBlogs: any = [];

  isLoggedIn: boolean = false;

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  validationform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;

  selectedBlogId: any;
  blogId: any;

  selectedBlog: any = {};
  isDataAvailable: boolean;

  allComments: any = [];
  comments: any = [];
  totalComments: number;
  showComments: boolean;
  blogCategory: any;

  queryParams: {
    blog_id?: string;
  };

  id = 'MHw6PI_6ygs';
  private player: any;
  private ytEvent: any;

  constructor(
    private store: Store<AppState>,
    private formBuilder: UntypedFormBuilder,
    private modalService: NgbModal,
    private blogService: BlogService,
    private route: ActivatedRoute,
    private tokenStorage: TokenStorageService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.tokenStorage.isAuthenticated();

    this.isDataAvailable = false;
    this.admin_base_url = environment.admin_base_url; //;
    this.validationform = this.formBuilder.group({
      PostId: this.blogId,
      // name: ['', [Validators.required]],
      Title: ['', [Validators.required]],
      CommentBody: ['', [Validators.required]],
    });

    // Data Get Function
    this._fetchData();
    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }
    // get all comments
    this.getCommentsByBlogId();
  }

  blogclicked(b) {
    this.router.navigate([], {
      queryParams: { blog_id: b.Id, title: b.Title },
    });
    this._fetchData();
    this.getCommentsByBlogId();
  }
  // Data Fetch
  private _fetchData() {
    this.route.queryParams.subscribe((params) => {
      this.queryParams = params;
    });

    this.blogService
      .getCatalogDetails(this.queryParams.blog_id)
      .subscribe((data) => {
        this.selectedBlog = data;
        this.blogId = this.selectedBlog.Id;
        this.isDataAvailable = true;

        this.breadCrumbItems = [
          { label: 'Home', link: '' },
          { label: 'News & reviews', link: '/blog-grid' },
          { label: `${this.selectedBlog.Title}`, active: true },
        ];
      });

    this.latestBlogs = this.store.select((store) => store.latestBlogs);
  }

  config = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true,
    loop: true,
  };

  validSubmit() {
    this.validationform.value.PostId = this.blogId;
    this.blogService
      .submitCommentBlog(this.validationform.value)
      .subscribe((res) => {
        this.toastService.show(`Comment Submitted Successfully`, {
          classname: 'bg-success text-light',
          delay: 5000,
        });
      });
    this.submit = true;
  }

  getRating() {
    this.selectedRating = this.currentRate;
    this.blogService.addRatingBlog(this.blogId, this.selectedRating).subscribe(
      (res) => {
        this.toastService.show(`Rating Submitted Successfully`, {
          classname: 'bg-success text-light',
          delay: 5000,
        });
      },
      (err) => {
        this.toastService.show(`${err.error.Message}`, {
          classname: 'bg-warning text-light',
          delay: 5000,
        });
      }
    );
  }

  getCommentsByBlogId() {
    this.blogService.getComments(this.queryParams.blog_id).subscribe((data) => {
      this.allComments = data;
      this.totalComments = this.allComments.TotalItems;
      if (this.totalComments >= 1) {
        this.comments = this.allComments.Items;
        this.showComments = true;
      } else {
        this.showComments = false;
      }
    });
  }

  calculateDiff(dateSent) {
    let currentDate = new Date();
    dateSent = new Date(dateSent);
    return Math.floor(
      (Date.UTC(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
      ) -
        Date.UTC(
          dateSent.getFullYear(),
          dateSent.getMonth(),
          dateSent.getDate()
        )) /
        (1000 * 60 * 60 * 24)
    );
  }

  get form() {
    return this.validationform.controls;
  }

  inView(ele: any) {
    ele.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }

  FilterSidebar() {
    document.getElementById('blog-sidebar')?.classList.toggle('show');
    document.querySelector('.vertical-overlay')?.classList.toggle('show');
  }

  SidebarHide() {
    document.getElementById('blog-sidebar')?.classList.remove('show');
    document.querySelector('.vertical-overlay')?.classList.remove('show');
  }

  openModal(content: any) {
    this.modalService.open(content, {
      size: 'lg',
      windowClass: 'modal-holder',
    });
    document.querySelector('.modal-content')?.classList.add('video-model');
  }

  onStateChange(event: any) {
    this.ytEvent = event.data;
  }
  savePlayer(player: any) {
    this.player = player;
  }
  playVideo() {
    this.player.playVideo();
  }
  pauseVideo() {
    this.player.pauseVideo();
  }
}
