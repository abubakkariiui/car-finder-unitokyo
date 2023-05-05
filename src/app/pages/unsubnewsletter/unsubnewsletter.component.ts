import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unsubnewsletter',
  templateUrl: './unsubnewsletter.component.html',
  styleUrls: ['./unsubnewsletter.component.scss'],
})
export class UnsubnewsletterComponent implements OnInit {
  successMessage: any;
  errorMessage: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((queryParams) => {
      const email = queryParams.get('e');
      if (email) {
        this.unsubscribeFromNewsletter(email);
      }
    });
  }

  unsubscribeFromNewsletter(email: string): void {
    const apiUrl = 'https://betaapi.unitokyo.com/UnsubscribeNewsletter';
    const body = { Email: email };

    this.http.post(apiUrl, body).subscribe(
      (res) => {
        this.successMessage = res;
        this.errorMessage = null;
      },
      (err) => {
        this.errorMessage = err.error;
        this.successMessage = null;
        console.error('Error while unsubscribing:', err);
      }
    );
  }
}
