import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { brandModel } from './brands.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  constructor(private http: HttpClient) {}

  rootURL = environment.rootURL;

  getBrands(): Observable<brandModel[]> {
    return this.http.get<brandModel[]>(
      this.rootURL + `/GetBrandsList?page=1&pageSize=5`,
      {}
    );
  }
}
