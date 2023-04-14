import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Meta } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CareerService } from 'src/app/services/careers/career.service';
import { ToastService } from 'src/app/toast/toast-service';
import { countries } from 'src/app/data';

import { environment } from 'src/environments/environment';
import { GetSeoContent } from 'src/app/services/getSeoContent.service';
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
  disableButton: boolean = false;
  countryList: any = [];
  preview: string;
  jobID: any;
  test: any;
  constructor(
    private careerService: CareerService,
    private modalService: NgbModal,
    private toastService: ToastService,
    private formBuilder: UntypedFormBuilder,
    private seoContent: GetSeoContent,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.getSeoContent();

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
      FileExtension: ['', Validators.required],
      FileData: ['', Validators.required],
      RecaptchaValid: true,
    });
  }
  getSeoContent() {
    this.seoContent.getSeoContent('careers').subscribe((res) => {
      if (res['CustomCode'] === null) {
        this.seoContent.getSeoContent('global').subscribe((res) => {
          // console.log(res);
        });
      }
    });
  }

  onFileChange(event) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const base64String = reader.result.toString().split(',')[1];
      this.validationform.patchValue({
        FileData: base64String,
        // FileExtension: file.type,
      });
    };
  }

  onSubmit() {    
    this.validationform.value.JobId = this.jobID;
    if (this.validationform.status === 'VALID') {
      this.isLoading = true;
      this.disableButton = true
      this.careerService.applyJob(this.validationform.value).subscribe(
        (res) => {
          this.isLoading = false;
          this.disableButton = false;
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
