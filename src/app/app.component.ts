import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './store/app-state.model';

import { StoreCatalog } from 'src/app/store/actions/catalog.actions';
import { CatalogService } from 'src/app/services/catalog/catalog.service';

import { StoreLatestBlogs } from './store/actions/blog.actions';
import { BlogService } from './services/blogs/blog.service';

import { StoreBrands } from './store/actions/brands.actions';
import { BrandsService } from './services/brands.service';

import { StoreShowrooms } from './store/actions/showrooms.actions';
import { ShowroomsService } from './services/shorooms.service';
import { TokenStorageService } from './services/auth/token-storage.service';

import { environment } from 'src/environments/environment';
import { BnNgIdleService } from 'bn-ng-idle'; // import it to your component
import { UserService } from './services/auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'yuasa trading';
  constructor(
    private bnIdle: BnNgIdleService,
    private store: Store<AppState>,
    private _catalogService: CatalogService,
    private _blogService: BlogService,
    private _brandsService: BrandsService,
    private _showroomsService: ShowroomsService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private ref: ChangeDetectorRef,
    private userService: UserService
  ) {}

  ngAfterContentChecked() {
    this.ref.detectChanges();
  }

  ngOnInit(): void {
    // this.bnIdle.startWatching(5).subscribe((isTimedOut: boolean) => {
    //   console.log('session expired');
    //   console.log(this.bnIdle);
    // });
    this.bnIdle.startWatching(3600).subscribe((isTimedOut: boolean) => {
      //1800 Sec = 30 Min which is expiry time for a tocken. After 30 Min Session will be expired and
      // user will be logout

      this.tokenStorage.signOut();
    });
    if (this.tokenStorage.isAuthenticated)
      this.userService.getUserProfile().subscribe(
        (d) => {
          localStorage.setItem('user_profile', JSON.stringify(d));
        },
        (e) => {
          if (e.status === 401) this.tokenStorage.signOut();
        }
      );

    // check if token in expired
    // if (this.tokenStorage.tokenExpired() == true) {
    //   this.tokenStorage.signOut();
    //   this.router.navigate(['/']);
    // }

    this._blogService.getLatestBlogList().subscribe((b) => {
      this.store.dispatch(new StoreLatestBlogs(b));
    });

    this._brandsService.getBrands().subscribe((b) => {
      this.store.dispatch(new StoreBrands(b));
    });

    this._showroomsService.getShowrooms().subscribe((s) => {
      this.store.dispatch(new StoreShowrooms(s));
    });

    this._catalogService
      .getCatalogList({
        page: 1,
        pageSize: 10,
        countryCode: 'ug',
      })
      .subscribe((data) => {
        this.store.dispatch(new StoreCatalog(data));
      });
  }

  onActivate(event) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
