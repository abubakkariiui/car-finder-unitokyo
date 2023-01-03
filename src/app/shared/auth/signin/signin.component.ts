// import { SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import jwt_decode from "jwt-decode";
import { Component, Input, Output, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/auth/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { environment } from 'src/environments/environment';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthService,
} from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})

/**
 * Signin Component
 */
export class SigninComponent implements OnInit {
  @Input() isDialog: boolean;

  @Output() routeChange = new EventEmitter<string>();

  @Output() newItemEvent = new EventEmitter<string>();

  @Input() showBackButton: boolean;

  @Input() route: string;

  fieldTextType!: boolean;
  //  Validation form
  validationform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  resultMessage: any = '';

  // user: SocialUser;
  //socialUser!: SocialUser;

  isLoggedin?: boolean;

  loading: boolean = false;

  rootURL = environment.rootURL;

  constructor(
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private http: HttpClient,
    private userService: UserService,
    private modalService: NgbModal,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    if (this.tokenStorage.isAuthenticated()) {
      this.router.navigate(['/']);
    }

    this.validationform = this.formBuilder.group({
      email: ['', [Validators.email]],
      password: ['', [Validators.required]],
      captcha: ['', [Validators.required]],
    });
  }
//https://developers.google.com/identity/gsi/web/reference/js-reference
  googleLoginOptions = {
    scope: 'profile email',
  }; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.socialAuthService
      .signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((user) => {
        window.sessionStorage.setItem('auth-token', user.authToken);
        localStorage.setItem('fb_login_user', JSON.stringify(user));
        this.router.navigate(['/']);
      });
  }
  @ViewChild('gbutton') gbutton: ElementRef = new ElementRef({});
//https://piraces.dev/posts/how-to-use-google-one-tap/
 // @ts-ignore
 ngAfterViewInit() {
  const clientId =
    '766244996952-rjnuigs104l7mguvdoq62hpf6s0kri75.apps.googleusercontent.com';
    const loginUri = 'http://amdcncri.fortiddns.com:60123/SocialLogin';
  // @ts-ignore
  window.google.accounts.id.initialize({
    client_id: clientId,
    itp_support: true,
    login_uri :loginUri,
    callback: this.handleCallback.bind(this),
  });
  // @ts-ignore
  window.google.accounts.id.renderButton(this.gbutton.nativeElement, {
    type: 'standard',
    theme: 'outline',
    size: 'large',
    width: 273,
    shape: 'rectangular',
    logo_alignment: 'center'

  });
  // @ts-ignore
  google.accounts.id.prompt();
}

// @ts-ignore
handleCallback(response: google.accounts.id.CredentialResponse) {
  const responsePayload = jwt_decode(response.credential);
  console.log(responsePayload);
  // window.sessionStorage.setItem('google-token', responsePayloadjti);
  localStorage.setItem('google_login_user', JSON.stringify(responsePayload));
  this.closeModels()
  // this.router.navigate(['/']);
}

  toggleComponent() {
    this.router.navigate(['/signup']);
    this.routeChange.emit('/signup');
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  doubleClick() {
    this.validationform.controls['email'].setValue(
      'usmanakbarkhan@hotmail.com'
    );
    this.validationform.controls['password'].setValue('3335044767');
    this.validSubmit();
  }
  closeModels() {
    this.modalService.dismissAll('click Cross');
  }
  validSubmit() {
    if (this.validationform.status === 'VALID') {
      this.loading = true;
      this.authService
        .login(
          this.validationform.value.email,
          this.validationform.value.password
        )
        .subscribe(
          (data) => {
            this.tokenStorage.saveToken(data.Token);
            this.tokenStorage.saveUser(data);

            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;

            this.userService.getUserProfile().subscribe(
              (d) => {
                localStorage.setItem('user_profile', JSON.stringify(d));
              },
              (e) => {}
            );
            this.loading = false;
            // window.location.reload();
            if (this.route) {
              //this.router.navigate([this.route]);

              window.location.reload();
            } else this.router.navigate(['/']);
            this.modalService.dismissAll('click Cross');
          },
          (err) => {
            this.loading = false;
            this.resultMessage = err;
            this.isLoginFailed = true;
          }
        );

      this.submit = true;
    } else {
    }
  }

  get form() {
    return this.validationform.controls;
  }
}
