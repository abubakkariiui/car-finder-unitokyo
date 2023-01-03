import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { countries } from 'src/app/data';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/services/auth/user.service';
import { ToastService } from 'src/app/toast/toast-service';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
/**
 * Signup Component
 */
export class SignupComponent implements OnInit {
  @Output() routeChange = new EventEmitter<string>();

  @Input() isDialog: boolean;

  @Input() showBackButton: boolean;

  model: NgbDateStruct;
  passTextType!: boolean;
  fieldTextType!: boolean;
  //  Validation form
  validationform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;

  isLoading = false;

  countriesList: any = [];

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  resultMessage = '';

  constructor(
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private tokenStorage: TokenStorageService,
    private authService: AuthService,
    private userService: UserService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.countriesList = countries;
    this.validationform = this.formBuilder.group({
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      Email: ['', [Validators.email]],
      Gender: ['', [Validators.required]],
      DateOfBirth: ['', [Validators.required]],
      Company: ['', []],
      IsCompanyAccount: ['', []],
      Password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^(?=.*)(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}'
          ),
        ]),
      ],
      ConfirmPassword: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^(?=.*)(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}'
          ),
        ]),
      ],
      CountryId: ['', [Validators.required]],
      City: ['', [Validators.required]],
      Phone: ['', []],
      PostalAddress: ['', []],
      PostalCode: ['', []],
      SubscribeNewsletters: ['', []],
      AgreeTerms: ['', [Validators.required]],
      captcha: ['', [Validators.required]],
    });
  }

  toggleComponent(route: any) {
    this.routeChange.emit(route);
  }
  handleSuccess(data:any){
    
  }

  /**
   * Password Hide/Show
   */
  togglePassFieldTextType() {
    this.passTextType = !this.passTextType;
  }

  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  /**
   * Bootsrap validation form submit method
   */
  validSubmit(formDirective) {
    if (this.validationform.status === 'VALID') {
      this.isLoading = true;
      this.authService
        .register(
          this.validationform.value.FirstName,
          this.validationform.value.LastName,
          this.validationform.value.Email,
          this.validationform.value.Gender,
          this.validationform.value.DateOfBirth,
          this.validationform.value.Company,
          this.validationform.value.IsCompanyAccount,
          this.validationform.value.Password,
          this.validationform.value.ConfirmPassword,
          this.validationform.value.CountryId,
          this.validationform.value.City,
          this.validationform.value.Phone,
          this.validationform.value.PostalAddress,
          this.validationform.value.PostalCode,
          this.validationform.value.SubscribeNewsletters
        )
        .subscribe(
          (data) => {
            // this.tokenStorage.saveToken(data.Token);
            // this.tokenStorage.saveUser(data);
            this.resultMessage = data;
            this.isLoginFailed = false;

            this.toastService.show(
              `Registration success, Please wait for admin to approve your account.`,
              {
                classname: 'bg-success text-light',
                delay: 6000,
              }
            );

            // this.roles = this.tokenStorage.getUser().roles;
            // this.userService.getUserProfile().subscribe(
            //   (d) => {
            //     localStorage.removeItem('user_profile');
            //     localStorage.setItem('user_profile', JSON.stringify(d));
            //   },
            //   (e) => {}
            // );
            // this.router.navigate(['/']);
            this.validationform.reset();
            formDirective.resetForm();
            this.isLoading = false;
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          },
          (err) => {
            this.resultMessage = err;
            this.isLoginFailed = true;
            this.isLoading = false;
            this.toastService.show(`${err.error.Message}`, {
              classname: 'bg-warning text-light',
              delay: 6000,
            });
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
