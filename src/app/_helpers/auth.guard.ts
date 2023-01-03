import { Injectable } from '@angular/core';

import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

import { TokenStorageService } from '../services/auth/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (
      next.routeConfig.path === 'signin' ||
      next.routeConfig.path === 'signup'
    ) {
      this.router.navigate(['/']);
    }

    let isLoggedIn = this.tokenStorageService.isAuthenticated();
    if (isLoggedIn) {
      return true;
    } else {
      return false; // this.router.navigate(['/']);
    }
  }
}
