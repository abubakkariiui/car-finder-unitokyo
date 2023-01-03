import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CareerService {
  constructor(private http: HttpClient) { }

  rootURL = environment.rootURL;

  getAllJobs(page: any, pageSize: any) {

    return this.http.get(
      this.rootURL + `/GetCareers?${page}=1&pageSize=${pageSize}`
    );
  }

  getJobDetails(slug: any) {
    return this.http.get(this.rootURL + `/GetJobDetails?slug=${slug}`);
  }

  applyJob(requestBody: any) {

    return this.http.post(this.rootURL + `/PostJobDetails`, requestBody);
  }

}
