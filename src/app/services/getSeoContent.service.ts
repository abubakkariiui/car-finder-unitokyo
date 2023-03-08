import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetSeoContent {
  constructor(private http: HttpClient) {}
  rootURL = 'https://betaapi.unitokyo.com/GetSeoContent';
  getSeoContent(type: any) {
    return this.http.get(this.rootURL + `?type=${type}`);
  }
}
