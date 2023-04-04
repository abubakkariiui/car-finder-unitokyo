import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inquiriesModel } from './inquiries.model';

import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class InquiriesService {
  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService
  ) {}

  rootURL = environment.rootURL;

  getInquiriesList(filters: any): Observable<inquiriesModel[]> {
    return this.http.get<inquiriesModel[]>(
      this.rootURL +
        `/GetUserInquiries?page=${filters.page}&pageSize=${filters.pageSize}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenStorage.getToken()}`,
        }),
      }
    );
  }

  getInquiryDetails(id: any): Observable<inquiriesModel[]> {
    return this.http.get<inquiriesModel[]>(
      this.rootURL + `/GetUserInquiryDetails?id=${id}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenStorage.getToken()}`,
        }),
      }
    );
  }

  addInquiry(params: any): Observable<inquiriesModel[]> {
    return this.http.post<inquiriesModel[]>(
      this.rootURL + `/AddUserInquiry`,
      params
    );
  }
}
