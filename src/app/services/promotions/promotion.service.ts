import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { promotionModel } from './promotion.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor(private http: HttpClient) {}

  rootURL = environment.rootURL;

  getPromotions(filters: any): Observable<promotionModel[]> {
    return this.http.get<promotionModel[]>(
      this.rootURL +
        `/GetPromotionsList?page=${filters.page}&pageSize=${filters.pageSize}`
    );
  }

  getPromotionDetails(id: any): Observable<promotionModel[]> {
    return this.http.get<promotionModel[]>(
      this.rootURL + `/GetPromotionsList?id=${id}`
    );
  }
}
