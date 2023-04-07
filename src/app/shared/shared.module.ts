import {
  NgbDropdownModule,
  NgbAccordionModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import {
  CommonModule,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimplebarAngularModule } from 'simplebar-angular';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { BrandsComponent } from './brands/brands/brands.component';
import { TypesComponent } from './types/types.component';
import { FeaturesComponent } from './features/features.component';
import { SearchformComponent } from './searchform/searchform.component';
import { TopoffersComponent } from './topoffers/topoffers.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { FilterSearchbarComponent } from './filter-searchbar/filter-searchbar.component';
import { BannersliderComponent } from './bannerslider/bannerslider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountAsidebarComponent } from './account-asidebar/account-asidebar.component';
import { LatestVehiclesComponent } from './latest-vehicles/latest-vehicles.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PomotionsListComponent } from './pomotions-list/pomotions-list.component';
import { SupportComponent } from './support-list/support-list.component';
import { VehicleInformationComponent } from './vehicle-information/vehicle-information.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { HtmlToPlaintextPipe } from './htmlToPlainText.pipe';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    BrandsComponent,
    TypesComponent,
    FeaturesComponent,
    SearchformComponent,
    TopoffersComponent,
    RightSideBarComponent,
    FilterSearchbarComponent,
    BannersliderComponent,
    AccountAsidebarComponent,
    LatestVehiclesComponent,
    VehicleDetailsComponent,
    SubscribeComponent,
    ProductsListComponent,
    SigninComponent,
    SignupComponent,
    PomotionsListComponent,
    SupportComponent,
    VehicleInformationComponent,
    PreloaderComponent,
    HtmlToPlaintextPipe,
  ],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbDropdownModule,
    ScrollToModule,
    SwiperModule,
    SimplebarAngularModule,
    NgxSliderModule,
    NgbAccordionModule,
    NgxCaptchaModule,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
    // { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  exports: [
    SearchformComponent,
    FeaturesComponent,
    TypesComponent,
    BrandsComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    FilterSearchbarComponent,
    BannersliderComponent,
    TopoffersComponent,
    AccountAsidebarComponent,
    LatestVehiclesComponent,
    VehicleDetailsComponent,
    SubscribeComponent,
    ProductsListComponent,
    SigninComponent,
    SignupComponent,
    PomotionsListComponent,
    SupportComponent,
    VehicleInformationComponent,
    PreloaderComponent,
  ],
})
export class SharedModule {}
