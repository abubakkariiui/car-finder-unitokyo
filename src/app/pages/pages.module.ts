import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  CommonModule,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbCarouselModule,
  NgbAccordionModule,
  NgbTooltipModule,
  NgbCollapseModule,
  NgbNavModule,
  NgbRatingModule,
} from '@ng-bootstrap/ng-bootstrap';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

// Google Map
import { AgmCoreModule } from '@agm/core';
// Ngx Sliders
import { NgxSliderModule } from '@angular-slider/ngx-slider';

// Youtube Player
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { BlogGridComponent } from './blogs/blog-grid/blog-grid.component';
import { SingleBlogComponent } from './blogs/single-blog/single-blog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HelpCenterComponent } from './help-center/help-center.component';

import { PagesRoutingModule } from './pages-routing.module';

import { SharedModule } from '../shared/shared.module';
import { AboutUsComponent } from './extra-pages/about-us/about-us.component';
import { CorporateProfileComponent } from './extra-pages/corporate-profile/corporate-profile.component';
import { TermsAndConditionsComponent } from './extra-pages/terms-and-conditions/terms-and-conditions.component';
import { ShippingTermsComponent } from './extra-pages/shipping-terms/shipping-terms.component';
import { BuyingTipsComponent } from './extra-pages/buying-tips/buying-tips.component';
import { DealerTricksComponent } from './extra-pages/dealer-tricks/dealer-tricks.component';
import { PrivacyPolicyComponent } from './extra-pages/privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './extra-pages/contact-us/contact-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ChasisCheckComponent } from './chasis-check/chasis-check.component';
import { CareersComponent } from './careers/careers.component';
import { SupportComponent } from './support/support.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';

import { PromotionComponent } from './promotion/promotion.component';
import { SearchComponent } from './search/search.component';
import { InquiryComponent } from './inquiry/inquiry.component';

import { CheckOutComponent } from './check-out/check-out.component';

import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { SigninpageComponent } from './signinpage/signinpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { AdvanceOrdersComponent } from './advance-orders/advance-orders.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { SubmitQuoteComponent } from './submit-quote/submit-quote.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { UnsubnewsletterComponent } from './unsubnewsletter/unsubnewsletter.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};

@NgModule({
  declarations: [
    AboutUsComponent,
    CorporateProfileComponent,
    TermsAndConditionsComponent,
    ShippingTermsComponent,
    BuyingTipsComponent,
    DealerTricksComponent,
    PrivacyPolicyComponent,
    ContactUsComponent,
    TestimonialsComponent,
    ChasisCheckComponent,
    CareersComponent,
    SupportComponent,
    ShopingCartComponent,
    BlogGridComponent,
    SingleBlogComponent,
    ContactsComponent,
    HelpCenterComponent,
    PromotionComponent,
    SearchComponent,
    InquiryComponent,
    CheckOutComponent,
    UnsubscribeComponent,
    SigninpageComponent,
    SignuppageComponent,
    AdvanceOrdersComponent,
    TrackOrderComponent,
    SubmitQuoteComponent,
    PasswordRecoveryComponent,
    ConfirmComponent,
    UnsubnewsletterComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCarouselModule,
    NgbAccordionModule,
    NgbTooltipModule,
    NgbCollapseModule,
    NgbNavModule,
    NgbRatingModule,
    SwiperModule,
    NgxSliderModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE',
    }),
    NgxYoutubePlayerModule,
    NgxCaptchaModule,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
    // { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
})
export class PagesModule {}
