import { supportModel } from './support.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../auth/token-storage.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SupportService {
  rootURL = environment.rootURL;

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService
  ) {}

  getSupportList(filter: any) {
    return this.http.get(
      this.rootURL +
        `/GetUserTicketsList?page=${filter.page}&pageSize=${filter.pageSize}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenStorage.getToken()}`,
        }),
      }
    );
  }

  getUserTicketById(id: number) {
    return this.http.get(this.rootURL + `/GetUserTicket?ticketId=${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.tokenStorage.getToken()}`,
      }),
    });
  }

  createTicket(requestbody: string) {
    return this.http.post(this.rootURL + `/CreateTicket`, requestbody, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.tokenStorage.getToken()}`,
      }),
    });
  }

  sendMessage(tickedId: any, message: any) {
    return this.http.post(
      this.rootURL + `/SendMessage?TicketId=${tickedId}&MessageBody=${message}`,
      {},
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenStorage.getToken()}`,
        }),
      }
    );
  }

  MarkResolved(tickedId: any) {
    return this.http.post(this.rootURL + `/MarkResolved?TicketId=${tickedId}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.tokenStorage.getToken()}`,
      }),
    });
  }

  GiveFeedBack(tickedId: any, feedback: any) {
    return this.http.post(
      this.rootURL + `/GiveFeedback?TicketId=${tickedId}&Feedback=${feedback}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenStorage.getToken()}`,
        }),
      }
    );
  }

  GetSupportDepartments() {
    return this.http.get(this.rootURL + '/GetSupportDepartments');
  }
}
