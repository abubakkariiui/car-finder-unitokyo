import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/services/auth/user.service';
import { ToastService } from 'src/app/toast/toast-service';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})

/**
 * Info Component
 */
export class InfoComponent implements OnInit {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  public firstColleaps = true;

  isLoading: any = false;

  //  Validation form
  validationform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private userService: UserService,
    private toastService: ToastService
  ) {}

  userProfile: any = {};

  ngOnInit(): void {
    this.validationform = this.formBuilder.group({
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      Email: ['', [Validators.email]],
      Company: ['', []],
      City: ['', [Validators.required]],
      Phone: ['', []],
      PostalAddress: ['', []],
      PostalCode: ['', []],
      // Password: [
      //   '',
      //   Validators.compose([
      //     Validators.required,
      //     Validators.pattern(
      //       '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}'
      //     ),
      //   ]),
      // ],
      // ConfirmPassword: [
      //   '',
      //   Validators.compose([
      //     Validators.required,
      //     Validators.pattern(
      //       '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}'
      //     ),
      //   ]),
      // ],
    });

    this.userService.getUserProfile().subscribe(
      (data) => {
        this.validationform.patchValue(data);
      },
      (err) => {
        console.log(err);
      }
    );

    this.breadCrumbItems = [
      { label: 'Home', link: '' },
      { label: 'Account', link: 'account/info' },
      { label: 'Personal Info', active: true },
    ];

    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }
    this.populateFromLocal();
  }
  validSubmit() {
    if (this.validationform.status === 'VALID') {
      this.isLoading = true;
      this.userService.updateUserProfile(this.validationform.value).subscribe(
        (data) => {
          this.isLoading = false;
          this.toastService.show(`Profile Updated successfully`, {
            classname: 'bg-success text-light',
            delay: 5000,
          });
        },
        (err) => {
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

  get form() {
    return this.validationform.controls;
  }

  SideBarMenu() {
    document.getElementById('account-nav')?.classList.toggle('show');
  }

  public populateFromLocal() {
    let user = JSON.parse(localStorage.getItem('fb_login_user')) ?? {};

    this.validationform.controls['FirstName'].setValue(user.firstName || '');
    this.validationform.controls['LastName'].setValue(user.lastName || 0);
    this.validationform.controls['Email'].setValue(user.email || '');
  }
}
