import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { quoteModel } from './quote.model';

import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService
  ) {}

  rootURL = environment.rootURL;

  getQuotes(filters: any): Observable<quoteModel[]> {
    return this.http.get<quoteModel[]>(
      this.rootURL +
        `/GetUserQuotes?page=${filters.page}&pageSize=${filters.pageSize}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenStorage.getToken()}`,
        }),
      }
    );
  }

  submitQuote(params: any): Observable<quoteModel[]> {
    return this.http.post<quoteModel[]>(this.rootURL + `/SubmitQuote`, params, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.tokenStorage.getToken()}`,
      }),
    });
  }

  getQuoteDetails(id: any): Observable<quoteModel[]> {
    return this.http.get<quoteModel[]>(
      this.rootURL + `/GetQuoteDetails?quoteId=${id}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenStorage.getToken()}`,
        }),
      }
    );
  }

  cancelQuote(id: any): Observable<quoteModel[]> {
    return this.http.post<quoteModel[]>(
      this.rootURL + `/cancelQuote?id=${id}`,
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
