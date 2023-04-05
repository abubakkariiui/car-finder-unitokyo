import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catalogModel } from './catalog.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor(private http: HttpClient) {}

  rootURL = environment.rootURL;

  getCatalogList(filters: any): Observable<catalogModel[]> {
    return this.http.post<catalogModel[]>(
      this.rootURL +
        `/list?page=${filters.page}&pageSize=${filters.pageSize}&countryCode=${filters.countryCode}`,
      {}
    );
  }

  getLatestCatalog(): Observable<catalogModel[]> {
    return this.http.post<catalogModel[]>(
      this.rootURL + `/list?page=1&pageSize=5`,
      {}
    );
  }

  getCatalogDetails(id: string): Observable<catalogModel[]> {
    return this.http.post<catalogModel[]>(
      this.rootURL + `/Details?id=${id}`,
      {}
    );
  }

  searchCatalog(filters: any): Observable<catalogModel[]> {
    return this.http.post<catalogModel[]>(
      this.rootURL +
        `/Details?model=${filters.model}&page=${filters.page}&pageSize=${filters.pageSize}&field=${filters.field}&dir=${filters.dir}&As=${filters.as}`,
      {}
    );
  }

  chasisCheck(no: any, httpreferer: any, lang: any) {
    return this.http.get(
      `https://www.drom.ru/frameno/common.php?firm=9&no=${no}&httpreferer=${this.rootURL}&lang=${lang}`
    );
  }

  search(requestbody: string) {
    return this.http.post(this.rootURL + `/Search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestbody,
    });
  }
}
