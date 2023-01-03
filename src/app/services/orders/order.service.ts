import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { orderModel } from './order.model';

import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService
  ) {}

  rootURL = environment.rootURL;

  getOrders(filters: any): Observable<orderModel[]> {
    return this.http.get<orderModel[]>(
      this.rootURL +
        `/GetUserOrders?page=${filters.page}&pageSize=${filters.pageSize}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenStorage.getToken()}`,
        }),
      }
    );
  }

  createOrder(quoteId: any): Observable<orderModel[]> {
    return this.http.post<orderModel[]>(
      this.rootURL + `/PlaceOrder?quoteId=${quoteId}`,
      {},
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenStorage.getToken()}`,
        }),
      }
    );
  }

  createAdvanceOrder(params: any): Observable<orderModel[]> {
    return this.http.post<orderModel[]>(
      this.rootURL + `/PlaceAdvanceOrder?wished=${params.wished}`,
      params,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenStorage.getToken()}`,
        }),
      }
    );
  }

  AdvanceOrder(params: any, wished: any): Observable<orderModel[]> {
    return this.http.post<orderModel[]>(
      this.rootURL + `/PlaceAdvanceOrder?wished=${wished}`,
      params,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenStorage.getToken()}`,
        }),
      }
    );
  }

  getOrderDetails(id: any): Observable<orderModel[]> {
    return this.http.get<orderModel[]>(
      this.rootURL + `/GetOrderDetails?orderId=${id}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenStorage.getToken()}`,
        }),
      }
    );
  }

  cancelOrder(requestBody: any) {
    return this.http.post(this.rootURL + '/OrderCancel', requestBody, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.tokenStorage.getToken()}`,
      }),
    });
  }

  trackOrder(code: any) {
    return this.http.get(this.rootURL + `/TrackOrder?OrderCode=${code}`);
  }
}
