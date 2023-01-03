import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { CompareCatalogService } from 'src/app/services/compareCatalog.service';
import { QuoteService } from 'src/app/services/quotes/quote.service';
import { ToastService } from 'src/app/toast/toast-service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})

/**
 * Footer Component
 */
export class FooterComponent implements OnInit {
  compareItems$: any = [];
  totalitems: number;
  admin_base_url = environment.admin_base_url;
  showSidebar: boolean = false;

  constructor(
    public compareCatalogService: CompareCatalogService,
    private toastService: ToastService,
    private quoteService: QuoteService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.compareCatalogService.loadCompareCatalog();

    this.compareItems$ = this.compareCatalogService.getCompareCatalog();

    this.compareCatalogService.compareItemsChange.subscribe(() => {
      this.toggleSidebar();
    });
  }
  getQuote(sku, cid) {
    if (!cid) cid = 114;
    this.quoteService
      .submitQuote({
        Sku: sku,
        CountryId: cid,
        DiscountAmount: 0,
        IsDiscountPercent: true,
        PlainId: '',
        OfferPrice: 0,
      })
      .subscribe(
        (d) => {
          this.toastService.show(`${d}`, {
            classname: 'bg-success text-light',
            delay: 5000,
          });
        },
        (e) => {
          this.toastService.show(`Please Login First`, {
            classname: 'bg-danger text-light',
            delay: 5000,
          });
        }
      );
  }
  navigateRoute() {
    if (this.tokenStorageService.getToken()) {
      this.router.navigate(['/account/support']);
    } else this.router.navigate(['/signin']);
  }
  getImageSrc(item) {
    let images = [];
    if (item.Images) {
      images = item.Images.split(',').map(
        (i) => `${this.admin_base_url + '/Pictures/VehicleImages/' + i}`
      );
      if (images.length > 0) return images[0];
      else return images[0];
    }
    return [
      `${this.admin_base_url + '/Content/Images/Products/no-image-found.jpg'}`,
    ];
  }
  get src() {
    return this.compareItems$.length > 0
      ? 'assets/img/comparelist-bg.gif'
      : 'assets/img/comparelist-bg.png';
  }

  deleteAllItems() {
    this.compareCatalogService.clearCompareCatalog();

    this.compareItems$ = this.compareCatalogService.getCompareCatalog();
  }

  deleteSingleItem(VehicleSku: string) {
    this.compareCatalogService.removeItem(VehicleSku);
  }

  toggleSidebar() {
    if (!this.showSidebar) {
      document.getElementById('demo-switcher')?.classList.add('show');
      document.querySelector('.vertical-overlay')?.classList.add('show');
    } else {
      document.getElementById('demo-switcher')?.classList.remove('show');
      document.querySelector('.vertical-overlay')?.classList.remove('show');
    }

    this.showSidebar = !this.showSidebar;
  }
}
