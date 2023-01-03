import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NgbAccordionModule,
  NgbDropdownModule,
  NgbNavModule,
  NgbRatingModule,
  NgbCollapseModule,
  NgbTooltipModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';

// Drop Zone
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

// Swiper Slider
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

// Component
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { InfoComponent } from './info/info.component';
import { SecurityComponent } from './security/security.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { NotificationsComponent } from './notifications/notifications.component';

import { MyInquiriesComponent } from './my-inquiries/my-inquiries.component';
import { MyQuotesComponent } from './my-quotes/my-quotes.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { SupportComponent } from './support/support.component';
import { PromotionsComponent } from './promotions/promotions.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*',
};

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};

@NgModule({
  declarations: [
    InfoComponent,
    SecurityComponent,
    WishlistComponent,
    NotificationsComponent,
    MyInquiriesComponent,
    MyQuotesComponent,
    MyOrdersComponent,
    SupportComponent,
    PromotionsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAccordionModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbRatingModule,
    NgbCollapseModule,
    NgbTooltipModule,
    NgbPaginationModule,
    SharedModule,
    AccountRoutingModule,
    DropzoneModule,
    SwiperModule,
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG,
    },
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
})
export class AccountModule {}
