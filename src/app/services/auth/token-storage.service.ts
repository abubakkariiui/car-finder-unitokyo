import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const USER_PROFILE = 'user_profile';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  date = new Date().toString();

  isLoggedIn: any = false;

  constructor(private router: Router) {}

  signOut(): void {
    // window.localStorage.clear();
    window.localStorage.setItem('user_profile', '');
    window.localStorage.removeItem('auth-user');
    window.localStorage.removeItem('auth-token');
    window.localStorage.removeItem('Token-Created');
    this.isLoggedIn = false;

    // window.location.reload();
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
    window.localStorage.setItem('Token-Created', this.date);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  public socialToken() {
    return window.localStorage.getItem('auth-token');
  }

  public getTokenGeneratedTime(): string | null {
    return window.localStorage.getItem('Token-Created');
  }

  public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public getUserProfile(): any {
    const user = window.localStorage.getItem(USER_PROFILE);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isAuthenticated(): any {
    if (this.getToken()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }

  public tokenExpired() {
    var sd = this.getTokenGeneratedTime();
    var startDate = new Date(sd);
    var endDate = new Date();
    var diff = endDate.getTime() - startDate.getTime();
    var diffMins = Math.round(((diff % 86400000) % 3600000) / 60000); // minutes
    // console.log(diffMins + "Min");
    return diffMins >= 30;
  }
}
