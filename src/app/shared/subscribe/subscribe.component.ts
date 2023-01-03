import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/toast/toast-service';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent implements OnInit {
  @Input() theme: 'dark';

  @Input() type = 'sub';

  rootURL = environment.rootURL;

  passTextType!: boolean;
  fieldTextType!: boolean;

  validationform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;

  resultMessage: any = '';

  constructor(
    private modalService: NgbModal,
    private http: HttpClient,
    private formBuilder: UntypedFormBuilder,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.validationform = this.formBuilder.group({
      email: ['', [Validators.email]],
    });
  }
  validSubmit(model: any) {
    if (this.validationform.status === 'VALID') {
      this.http
        .post(
          this.type == 'unsub'
            ? this.rootURL + '/UnsubscribeNewsletter'
            : this.rootURL + '/SubscribeNewsletter',
          {
            Email: this.validationform.value.email,
          },
          { observe: 'response' }
        )
        .subscribe(
          (response) => {
            this.resultMessage = response;
            this.toastService.show(`${this.resultMessage.body}`, {
              classname: 'bg-success text-light',
              delay: 5000,
            });
          },
          (error) => {
            this.resultMessage = error;
            this.toastService.show(`${this.resultMessage.error.Message}`, {
              classname: 'bg-danger text-light',
              delay: 5000,
            });
          }
        );

      this.submit = true;
    } else {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }

  toggleModal(model: any) {
    this.modalService.open(model, { size: 'lg', centered: true });
    document.querySelector('.modal-content')?.classList.add('border-light');
  }

  get form() {
    return this.validationform.controls;
  }
}
