import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { EventService } from '../../core/services/event.service';
import { Router, NavigationEnd } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CartCatalogService } from 'src/app/services/cartCatalog.service';

import { MENU } from './menu';
import { MenuItem } from './menu.model';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';

import { environment } from 'src/environments/environment';
import { ToastService } from 'src/app/toast/toast-service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

/**
 * Header Component
 */
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;

  mode: string | undefined;
  loginPassfield!: boolean;
  signupPassfield!: boolean;
  signupCPassfield!: boolean;
  menuItems: MenuItem[] = [];
  //  Validation form
  validationform!: UntypedFormGroup;
  signUpform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;
  @ViewChild('sideMenu') sideMenu!: ElementRef;

  cartItems$ = [];

  constructor(
    private tokenStorage: TokenStorageService,
    private toastService: ToastService,
    private router: Router,
    private modalService: NgbModal,
    private eventService: EventService,
    private formBuilder: UntypedFormBuilder,
    private CartCatalogService: CartCatalogService
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activateMenu();
      }
    });
  }

  ngOnInit(): void {
    window.addEventListener('storage', () => {
      // When local storage changes, dump the list to
      // the console.
    });

    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    // }
    this.isLoggedIn = this.tokenStorage.isAuthenticated();

    this.CartCatalogService.loadCartCatalog();
    this.cartItems$ = this.CartCatalogService.getCartCatalog();

    /**
     * Bootstrap validation form data
     */
    this.validationform = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    /**
     * Bootstrap validation form data
     */
    this.signUpform = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    // Menu Items
    this.menuItems = MENU;
  }

  showToast() {
    this.toastService.show(`An error occured`, {
      classname: 'bg-warning text-light',
      delay: 10000,
    });
  }

  loggout() {
    this.tokenStorage.signOut();
  }

  /**
   * Open scroll modal
   * @param toggleDataModal scroll modal data
   */
  toggleModal(staticDataModal: any) {
    this.modalService.open(staticDataModal, { size: 'lg', centered: true });
    document.querySelector('.modal-content')?.classList.add('border-light');
  }

  secondModal(toggleSecondModal: any) {
    this.modalService.open(toggleSecondModal, { size: 'lg', centered: true });
    document.querySelector('.modal-content')?.classList.add('border-light');
  }

  /**
   * Password Hide/Show
   */
  toggleLoginPassField() {
    this.loginPassfield = !this.loginPassfield;
  }

  /**
   * Password Hide/Show
   */
  toggleSignUpPassField() {
    this.signupPassfield = !this.signupPassfield;
  }

  /**
   * Password Hide/Show
   */
  toggleSignUpCPassField() {
    this.signupCPassfield = !this.signupCPassfield;
  }

  /**
   * On menu click
   */
  onMenuClick(event: any) {
    const nextEl = event.target.nextElementSibling;
    if (nextEl) {
      const parentEl = event.target.parentNode;
      if (parentEl) {
        parentEl.classList.remove('show');
      }
      nextEl.classList.toggle('show');
    }
    return false;
  }

  ngAfterViewInit() {
    this.activateMenu();
  }

  /**
   * Activates the menu
   */
  private activateMenu() {
    const resetParent = (el: any) => {
      const parent = el.parentElement;
      if (parent) {
        parent.classList.remove('active');
        const parent2 = parent.parentElement;
        this._removeAllClass('mm-active');
        this._removeAllClass('mm-show');
        if (parent2) {
          parent2.classList.remove('active');
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.remove('active');
            const parent4 = parent3.parentElement;
            if (parent4) {
              parent4.classList.remove('active');
              const parent5 = parent4.parentElement;
              if (parent5) {
                parent5.classList.remove('active');
                const menuelement = document.getElementById(
                  'topnav-menu-content'
                );
                if (menuelement !== null)
                  if (menuelement.classList.contains('show'))
                    document
                      .getElementById('topnav-menu-content')!
                      .classList.remove('show');
              }
            }
          }
        }
      }
    };

    // activate menu item based on location
    const links: any = document.getElementsByClassName('side-nav-link-ref');
    let matchingMenuItem = null;

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < links.length; i++) {
      // reset menu
      resetParent(links[i]);
    }
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < links.length; i++) {
      // tslint:disable-next-line: no-string-literal
      if (location.pathname === links[i]['pathname']) {
        matchingMenuItem = links[i];
        break;
      }
    }

    if (matchingMenuItem) {
      const parent = matchingMenuItem.parentElement;
      if (parent) {
        parent.classList.add('active');
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add('active');
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add('active');
            const parent4 = parent3.parentElement;
            if (parent4) {
              parent4.classList.add('active');
              const parent5 = parent4.parentElement;
              if (parent5) {
                parent5.classList.add('active');
              }
            }
          }
        }
      }
    }
  }

  /**
   * remove active and mm-active class
   */
  _removeAllClass(className: any) {
    const els = document.getElementsByClassName(className);
    while (els[0]) {
      els[0].classList.remove(className);
    }
  }

  /**
   * Topbar Light-Dark Mode Change
   */
  changeMode(mode: string) {
    this.mode = mode;
    this.eventService.broadcast('changeMode', mode);

    switch (mode) {
      case 'light':
        document.body.setAttribute('data-layout-mode', 'light');
        document.body.setAttribute('data-sidebar', 'light');
        break;
      case 'dark':
        document.body.setAttribute('data-layout-mode', 'dark');
        document.body.setAttribute('data-sidebar', 'dark');
        break;
      default:
        document.body.setAttribute('data-layout-mode', 'light');
        break;
    }
  }

  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }

  /**
   * On mobile toggle button clicked
   */
  toggleMobileMenu() {
    document.getElementById('navbarNav')?.classList.toggle('show');
  }

  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    const navbar = document.querySelector('.navbar');
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      navbar?.classList.add('navbar-stuck');
      document.querySelector('.btn-scroll-top')?.classList.add('show');
    } else {
      navbar?.classList.remove('navbar-stuck');
      document.querySelector('.btn-scroll-top')?.classList.remove('show');
    }
  }

  /**
   * Bootsrap validation form submit method
   */
  validSubmit() {
    this.submit = true;
  }

  /**
   * Returns form
   */
  get form() {
    return this.validationform.controls;
  }

  /**
   * Bootstrap tooltip form validation submit method
   */
  formSubmit() {
    this.formsubmit = true;
  }

  /**
   * returns tooltip validation form
   */
  get formData() {
    return this.signUpform.controls;
  }

  /**
   * Demos Onclick
   */
  demosDroupDownClick() {
    document.querySelector('.demos')?.classList.toggle('show');
  }
}
