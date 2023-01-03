import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CareerService } from 'src/app/services/careers/career.service';
import { ToastService } from 'src/app/toast/toast-service';
import { countries } from 'src/app/data';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
})
export class CareersComponent implements OnInit {
  page: any = 1;
  pageSize: any = 10;
  loading: boolean = false;
  selectedJob: any = {};
  jobsList: any = [];

  validationform: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;
  // formBuilder: any;
  isLoading: boolean = false;
  isApply: boolean = false;

  countryList: any = [];
  preview: string;
  jobID: any;

  constructor(
    private careerService: CareerService,
    private modalService: NgbModal,
    private toastService: ToastService,
    private formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.countryList = countries;
    this.getJobs();

    this.validationform = this.formBuilder.group({
      JobId: this.jobID,
      Name: ['', Validators.required],
      Email: ['', Validators.required],
      Phone: [''],
      Citizen: ['', Validators.required],
      CountryId: ['', Validators.required],
      CoverLetter: [''],
      ResumeFile: ['', Validators.required],
      RecaptchaValid: true,
    });
  }

  onFileChange(event) {
    // const file = (event.target as HTMLInputElement).files[0];
    // this.validationform.patchValue({
    //   ResumeFile: file
    // });
    // this.validationform.get('ResumeFile').updateValueAndValidity()
    // // File Preview
    // const reader = new FileReader();
    // reader.onload = () => {
    //   this.preview = reader.result as string;
    // }
    // reader.readAsDataURL(file)
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.validationform.get('ResumeFile').setValue({
          ContentLength: file.size,
          ContentType: file.type,
          FileName: file.name,
          // value: reader.result.split(',')[1]
        });
      };
    }
  }

  onSubmit() {
    this.validationform.value.JobId = this.jobID;
    if (this.validationform.status === 'VALID') {
      this.isLoading = true;
      this.careerService.applyJob(this.validationform.value).subscribe(
        (res) => {
          this.isLoading = false;
          this.toastService.show(`Applied successfully`, {
            classname: 'bg-success text-light',
            delay: 5000,
          });
          this.modalService.dismissAll('click Cross');
        },
        (e) => {
          this.isLoading = false;
          this.toastService.show(`${e.message}`, {
            classname: 'bg-danger text-light',
            delay: 5000,
          });
        }
      );
    }
    this.submit = true;
  }

  get form() {
    return this.validationform.controls;
  }

  getJobs() {
    this.loading = true;
    this.careerService.getAllJobs(this.page, this.pageSize).subscribe((res) => {
      this.jobsList = res;
      this.loading = false;
    });
  }

  getJobDetails(item, model) {
    this.selectedJob = {};
    this.jobID = item;
    this.careerService.getJobDetails(item).subscribe(
      (d) => {
        this.selectedJob = d;
      },
      (e) => {}
    );
    this.toggleModal(model);
  }

  toggleModal(staticDataModal: any) {
    console.log(staticDataModal);
    this.modalService.open(staticDataModal, { size: 'lg', centered: true });
    document.querySelector('.modal-content')?.classList.add('border-light');
  }
}
