import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { PagesModule } from './pages/pages.module';
import { AccountModule } from './pages/account/account.module';
import { StoreModule } from '@ngrx/store';
import { ShoppingReducer } from './store/reducers/shopping.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompareReducer } from './store/reducers/compare.reducer';
import { catalogReducer } from './store/reducers/catalog.reducer';
import { latestCatalogReducer } from './store/reducers/latest-catalog.reducer';
import { blogReducer } from './store/reducers/blog.reducer';
import { latestBlogReducer } from './store/reducers/latest-blog.reducer';
import { HttpClientModule } from '@angular/common/http';
import { CatalogService } from './services';
import { brandReducer } from './store/reducers/brand.reducer';
import { ShowroomReducer } from './store/reducers/showroom.reducer ';
import { ToastsContainer } from 'src/app/toast/toast-container.component';

import { BnNgIdleService } from 'bn-ng-idle';

import { FacebookLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { SocialComponent } from './social-login/social-login.component';
@NgModule({
  declarations: [AppComponent, ToastsContainer, SocialComponent],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      shopping: ShoppingReducer,
      compare: CompareReducer,
      catalog: catalogReducer,
      latestCatalog: latestCatalogReducer,
      blogs: blogReducer,
      latestBlogs: latestBlogReducer,
      brands: brandReducer,
      showrooms: ShowroomReducer,
    }),
    AppRoutingModule,
    PagesModule,
    AccountModule,
    HttpClientModule,
    ScrollToModule.forRoot(),
    SocialLoginModule,
    ShareButtonsModule.withConfig({
      debug: true,
    }),
    ShareIconsModule,
  ],
  providers: [
    CatalogService,
    BnNgIdleService,

    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true, //keeps the user signed in
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '766244996952-rjnuigs104l7mguvdoq62hpf6s0kri75.apps.googleusercontent.com'
            ),
          },  {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('519000160271519')
          }
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
  exports: [ToastsContainer],
})
export class AppModule {}
