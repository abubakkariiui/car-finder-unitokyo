import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss'],
})
export class TermsAndConditionsComponent implements OnInit {
  htmlValue: string;
  constructor(
    private http: HttpClient,
    private metaTagService: Meta,
    private titleService: Title
  ) {}
  rootURL = environment.rootURL;

  resultData: any = {};
  loading: boolean = false;
  isDataAvailable: boolean;

  ngOnInit(): void {
    this.isDataAvailable = false;
    this.loading = true;
    this.http
      .get(this.rootURL + `/GetTopicContents?slug=terms-conditions`)
      .subscribe((t) => {
        this.resultData = t;

        this.htmlValue = this.resultData.Body;
        this.metaTagService.addTags([
          { name: 'robots', content: 'index, follow' },
          { name: 'description', content: this.resultData.Description },
          { name: 'tags', content: this.resultData.Tags },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { charset: 'UTF-8' },
        ]);

        this.titleService.setTitle(this.resultData.PageTitle);
        this.isDataAvailable = true;
        this.loading = false;
      });
  }
}
