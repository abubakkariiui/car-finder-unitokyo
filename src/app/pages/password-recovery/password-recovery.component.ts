import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastService } from 'src/app/toast/toast-service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss'],
})
export class PasswordRecoveryComponent implements OnInit {
  constructor(
    private formBuilder: UntypedFormBuilder,
    public toastService: ToastService,
    private authService: AuthService
  ) {}

  validationform!: UntypedFormGroup;
  isLoading: boolean = false;
  submit!: boolean;
  formsubmit!: boolean;

  ngOnInit(): void {
    this.validationform = this.formBuilder.group({
      Email: ['', [Validators.email]],
    });
  }
  validSubmit() {
    if (this.validationform.status === 'VALID') {
      this.isLoading = true;

      let params = { ...this.validationform.value };

      this.authService.password_recovery(params).subscribe(
        (data) => {
          this.isLoading = false;
          this.toastService.show(`${data}`, {
            classname: 'bg-success text-light',
            delay: 5000,
          });

          this.validationform.clearValidators();
        },
        (err) => {
          this.toastService.show('Please login to submit inquiry', {
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

  get form() {
    return this.validationform.controls;
  }
}
