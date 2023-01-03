import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TestimonialService } from 'src/app/services/testimonials/testimonial.service';
import { ToastService } from 'src/app/toast/toast-service';

import { environment } from 'src/environments/environment';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {

  page: number = 1;
  pageSize: number = 10;
  allTestimonials: any = [];
  currentRate: any = 0;
  selectedRating: any;

  //  Validation form
  testimonialForm!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;
  isLoading: any = false;
  isLogin: boolean = false;

  resultMessage: any;

  constructor(
    private testimonialService: TestimonialService,
    private toastService: ToastService,
    private formBuilder: UntypedFormBuilder,
    private tokenStorage: TokenStorageService,

  ) { }


  ngOnInit(): void {
    this.Testimonials();

    this.testimonialForm = this.formBuilder.group({
      TestimonialText: ['', [Validators.required]],
      ImageFile: ['', [Validators.required]],
      Rating: ['', [Validators.required]],
    });

    // check if user is login then display Testimonail form 
    if (this.tokenStorage.isAuthenticated()) {
      this.isLogin = true;
    }

  }

  Testimonials() {
    this.testimonialService.getAllTestimonials(this.page, this.pageSize).subscribe((res) => {
      this.allTestimonials = res;
      console.log("All Testi:", this.allTestimonials.Items);
    })
  }

  getRating() {
    this.selectedRating = this.currentRate;
  }

  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.testimonialForm.get('ImageFile').setValue({
          ContentLength: file.size,
          ContentType: file.type,
          FileName: file.name,
          // value: reader.result.split(',')[1]
        });
      };
    }
  }

  submitTestionial() {
    this.testimonialForm.value.Rating = this.selectedRating;
    if (this.testimonialForm.status === 'VALID') {
      this.isLoading = true;
      this.testimonialService.saveTestimonail(this.testimonialForm.value).subscribe((res) => {
        this.resultMessage = res;
        this.toastService.show(`${this.resultMessage}`, {
          classname: 'bg-success text-light',
          delay: 5000,
        });
        this.isLoading = false;
        this.testimonialForm.reset();
      })
    } else {
    }
    this.submit = true;
  }

  get form() {
    return this.testimonialForm.controls;
  }

}
