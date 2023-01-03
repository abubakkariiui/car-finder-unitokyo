import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { Home1Component } from './dashboard/home1/home1.component';
import { AboutUsComponent } from './extra-pages/about-us/about-us.component';
import { BuyingTipsComponent } from './extra-pages/buying-tips/buying-tips.component';
import { ContactUsComponent } from './extra-pages/contact-us/contact-us.component';
import { CorporateProfileComponent } from './extra-pages/corporate-profile/corporate-profile.component';
import { DealerTricksComponent } from './extra-pages/dealer-tricks/dealer-tricks.component';
import { PrivacyPolicyComponent } from './extra-pages/privacy-policy/privacy-policy.component';
import { ShippingTermsComponent } from './extra-pages/shipping-terms/shipping-terms.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { TermsAndConditionsComponent } from './extra-pages/terms-and-conditions/terms-and-conditions.component';

import { CareersComponent } from './careers/careers.component';
import { ChasisCheckComponent } from './chasis-check/chasis-check.component';
import { SupportComponent } from './support/support.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

import { BlogGridComponent } from './blogs/blog-grid/blog-grid.component';
import { SingleBlogComponent } from './blogs/single-blog/single-blog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { PromotionComponent } from './promotion/promotion.component';
import { SearchComponent } from './search/search.component';
import { AdvanceOrdersComponent } from './advance-orders/advance-orders.component';
import { TrackOrderComponent } from './track-order/track-order.component';

import { CheckOutComponent } from './check-out/check-out.component';

import { SigninpageComponent } from './signinpage/signinpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';

import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { SubmitQuoteComponent } from './submit-quote/submit-quote.component';
import { AuthGuard } from '../services/guard/auth.guard';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
//import { AuthGuard } from '../_helpers/auth.guard';
//import { TokenStorageService } from '../services/auth/token-storage.service';
import { ConfirmComponent } from './confirm/confirm.component';

const routes: Routes = [
  {
    path: '',
    component: Home1Component,
  },

  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },

  {
    path: 'catalog/search',
    loadChildren: () =>
      import('./catalog/catalog.module').then((m) => m.CatalogModule),
  },

  { path: 'about-us', component: AboutUsComponent },
  { path: 'buying-tips', component: BuyingTipsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'corporate-profile', component: CorporateProfileComponent },
  { path: 'dealer-tricks', component: DealerTricksComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'shipping-terms', component: ShippingTermsComponent },
  { path: 'terms-conditions', component: TermsAndConditionsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'submit-quote', component: SubmitQuoteComponent },
  { path: 'chasis-check', component: ChasisCheckComponent },
  { path: 'support', component: SupportComponent },
  { path: 'testimonials', component: TestimonialsComponent },

  { path: 'shipping-cart', component: ShopingCartComponent },

  { path: 'blog-grid', component: BlogGridComponent },
  { path: 'single-blog', component: SingleBlogComponent },

  { path: 'contacts', component: ContactsComponent },
  { path: 'help-center', component: HelpCenterComponent },

  { path: 'inquiry', component: InquiryComponent },
  { path: 'promotion', component: PromotionComponent },
  { path: 'search', component: SearchComponent },
  { path: 'advance-order', component: AdvanceOrdersComponent },
  { path: 'track-order', component: TrackOrderComponent },

  { path: 'signin', component: SigninpageComponent },
  { path: 'signup', component: SignuppageComponent },
  { path: 'checkout', component: CheckOutComponent },

  { path: 'un-subscribe', component: UnsubscribeComponent },
  { path: 'password-recovery', component: PasswordRecoveryComponent },
  { path: 'confirm', component: ConfirmComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  //providers: [TokenStorageService, AuthGuard],
})
export class PagesRoutingModule {}
