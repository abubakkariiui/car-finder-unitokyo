import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { wishListModel } from './wishlist.model';

import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class WishListService {
  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService
  ) {}

  rootURL = environment.rootURL;

  getWishList(filters: any): Observable<wishListModel[]> {
    return this.http.get<wishListModel[]>(
      this.rootURL +
        `/GetUserWishlist?page=${filters.page}&pageSize=${filters.pageSize}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenStorage.getToken()}`,
        }),
      }
    );
  }

  getCountryInfoByIp() {
    return this.http.options(
      `https://api.ip2location.io/?key=81d46046841a66ed06af88ff58c19d68`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenStorage.getToken()}`,
        }),
      }
    );
  }

  getCountryByIp() {
    return this.http.get(
      'https://ipgeolocation.abstractapi.com/v1/?api_key=615e216b685b4350bca6452ed0e555ad'
    );
  }

  addWishList(vsku: any): Observable<wishListModel[]> {
    return this.http.post<wishListModel[]>(
      this.rootURL + `/AddToWishlist?id=${vsku}`,

      {},
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenStorage.getToken()}`,
        }),
      }
    );
  }
  WishlistToAdvanceQuote(id: any): Observable<wishListModel[]> {
    return this.http.post<wishListModel[]>(
      this.rootURL + `/WishlistToAdvanceQuote?id=${id}`,
      {},
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenStorage.getToken()}`,
        }),
      }
    );
  }
  removeFromWishList(id: any): Observable<wishListModel[]> {
    return this.http.post<wishListModel[]>(
      this.rootURL + `/RemoveFromWishlist?id=${id}`,

      {},
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenStorage.getToken()}`,
        }),
      }
    );
  }
}
