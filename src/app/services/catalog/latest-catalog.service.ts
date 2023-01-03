import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { latestCatalogModel } from './latest-catalog.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class LatestCatalogService {
  constructor(private http: HttpClient) {}

  rootURL = environment.rootURL;

  getLatestCatalog(): Observable<latestCatalogModel[]> {
    return this.http.post<latestCatalogModel[]>(
      this.rootURL + `/list?page=1&pageSize=5`,
      {}
    );
  }
}
