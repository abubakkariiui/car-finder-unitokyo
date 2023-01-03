import { Component, OnInit } from '@angular/core';
import { manuFacturers } from 'src/app/data';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state.model';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatalogService } from 'src/app/services/catalog/catalog.service';

import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/toast/toast-service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {
  rootURL = environment.rootURL;

  code: any = '';

  message: any = '';

  errorResult: any = '';

  constructor(
    private http: HttpClient,
    private toastService: ToastService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['e'])
        this.http
          .post(
            this.rootURL + `/ConfirmAccount?code=${params['e'].substring(5)}`,
            {}
          )
          .subscribe(
            (d) => {
              this.message = 'Your account has been activated. Please login.';
            },
            (err) => {
              this.errorResult = 'Network Issue Occured. Please try again';
            }
          );
      else {
        this.errorResult = 'Confirmation code does not exist.';
      }
    });
  }
}
