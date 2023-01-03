import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from '../auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  rootURL = environment.rootURL;

  constructor(private http: HttpClient,
    private tokenStorage: TokenStorageService) { }


  getAllTestimonials(page: number, pageSize: number) {
    return this.http.get(this.rootURL + `/GetTestimonialsList?page=${page}&pageSize=${pageSize}`);
  }

  saveTestimonail(requestBody: any) {
    return this.http.post(this.rootURL + `/SaveTestimonial`, requestBody,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenStorage.getToken()}`,
        }),
      });
  }
}
