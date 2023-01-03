import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'http://amdcncri.fortiddns.com:60123/';
const googleSignInAPI = 'AIzaSyDFECtsyINLecHNft3yiTfBYSx-h14HAGw';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService
  ) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  password_recovery(params: any): Observable<any> {
    return this.http.post(AUTH_API + 'PasswordRecovery', params, httpOptions);
  }

  change_password(params: any): Observable<any> {
    return this.http.post(AUTH_API + 'ChangePassword', params, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.tokenStorage.getToken()}`,
      }),
    });
  }

  register(
    FirstName: string,
    LastName: string,
    Email: string,
    Gender: string,
    DateOfBirth: string,
    Company: string,
    IsCompanyAccount: string,
    Password: string,
    ConfirmPassword: string,
    CountryId: string,
    City: string,
    Phone: string,
    PostalAddress: string,
    PostalCode: string,
    SubscribeNewsletters: string
  ): Observable<any> {
    return this.http.post(
      AUTH_API + 'register',
      {
        FirstName,
        LastName,
        Email,
        Gender,
        DateOfBirth,
        Company,
        IsCompanyAccount,
        Password,
        ConfirmPassword,
        CountryId,
        City,
        Phone,
        PostalAddress,
        PostalCode,
        SubscribeNewsletters,
      },
      httpOptions
    );
  }

  googleSignin(Idtoken: any): Observable<any> {
    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${googleSignInAPI}`,
      {
        postBody: `id_token=${Idtoken}&providerId=google.com`,
        requestUri: 'http://localhost:4200',
        returnIdpCredential: true,
        returnSecureToken: true,
      }
    );
  }
}
