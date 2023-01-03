import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { userModel } from './user.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService
  ) {}

  rootURL = environment.rootURL;

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.tokenStorage.getToken()}`,
  });

  getUserProfile(): Observable<userModel[]> {
    return this.http.get<userModel[]>(this.rootURL + `/GetUserProfile`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.tokenStorage.getToken()}`,
      }),
    });
  }

  updateUserProfile(params): Observable<userModel[]> {
    return this.http.post<userModel[]>(
      this.rootURL + `/UpdateUserProfile`,
      params,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenStorage.getToken()}`,
        }),
      }
    );
  }
}
