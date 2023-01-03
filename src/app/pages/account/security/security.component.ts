import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastService } from 'src/app/toast/toast-service';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss'],
})

/**
 * Security Component
 */
export class SecurityComponent implements OnInit {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  fieldTextType!: boolean;
  fieldNewTextType!: boolean;
  confirmfieldTextType!: boolean;

  //  Validation form
  validationform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;

  resultMessage: any = '';

  isLoading: boolean = false;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Home', link: '' },
      { label: 'Account', link: '/account/info' },
      { label: 'Password & Security', active: true },
    ];

    /**
     * Bootstrap validation form data
     */

    this.validationform = this.formBuilder.group({
      OldPassword: ['', [Validators.required]],
      NewPassword: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}'
          ),
        ]),
      ],
      ConfirmPassword: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}'
          ),
        ]),
      ],
    });

    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }
  }

  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  /**
   * Password Hide/Show
   */
  toggleNewFieldTextType() {
    this.fieldNewTextType = !this.fieldNewTextType;
  }

  /**
   * Password Hide/Show
   */
  toggleConfirmFieldTextType() {
    this.confirmfieldTextType = !this.confirmfieldTextType;
  }

  /**
   * On mobile toggle button clicked
   */
  SideBarMenu() {
    document.getElementById('account-nav')?.classList.toggle('show');
  }

  /**
   * Bootsrap validation form submit method
   */

  validSubmit() {
    if (this.validationform.status === 'VALID') {
      this.isLoading = true;

      this.authService.change_password(this.validationform.value).subscribe(
        (data) => {
          this.isLoading = false;
          console.log(data);
          this.toastService.show(`${data}`, {
            classname: 'bg-success text-light',
            delay: 5000,
          });
          this.validationform.reset();
        },
        (err) => {
          this.resultMessage = err;
          this.toastService.show(`${err.error.Message}`, {
            classname: 'bg-primary text-light',
          });
          this.isLoading = false;
        }
      );
    } else {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
    this.submit = true;
  }

  /**
   * Returns form
   */
  get form() {
    return this.validationform.controls;
  }
}
