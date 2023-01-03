import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShowRoomModel } from './shorooms.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ShowroomsService {
  constructor(private http: HttpClient) {}

  rootURL = environment.rootURL;

  getShowrooms(): Observable<ShowRoomModel[]> {
    return this.http.get<ShowRoomModel[]>(
      this.rootURL + `/GetShowroomsList`,
      {}
    );
  }
}
