import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoComponent } from './info/info.component';
import { SecurityComponent } from './security/security.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MyInquiriesComponent } from './my-inquiries/my-inquiries.component';

import { MyQuotesComponent } from './my-quotes/my-quotes.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { SupportComponent } from './support/support.component';
import { PromotionsComponent } from './promotions/promotions.component';

const routes: Routes = [
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'security',
    component: SecurityComponent,
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
  },
  {
    path: 'my-inquiries',
    component: MyInquiriesComponent,
  },

  {
    path: 'my-quotes',
    component: MyQuotesComponent,
  },

  {
    path: 'my-orders',
    component: MyOrdersComponent,
  },
  {
    path: 'support',
    component: SupportComponent,
  },

  {
    path: 'promotions',
    component: PromotionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
