import { SupportService } from 'src/app/services/support/support.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/toast/toast-service';
import { HttpClient } from '@angular/common/http';
import { WishListService } from 'src/app/services/wishlist/wishlist.service';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {
  htmlValue: string;
  data: any = [];
  supportlist: any = [];
  createTicketForm!: UntypedFormGroup;
  isLoggedIn: boolean = false;
  messages: any = [];
  validationform!: UntypedFormGroup;

  isLoading: boolean = false;

  constructor(
    private modalService: NgbModal,
    private formBuilder: UntypedFormBuilder,
    private supporService: SupportService,
    private toastService: ToastService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    // this.getAllSupports();
    this.validationform = this.formBuilder.group({
      DepartmentId: [''],
      MessageBody: [''],
    });
  }

  // getAllSupports() {
  //   this.supporService.getSupportList().subscribe((res) => {
  //     this.data = res;
  //     this.supportlist = this.data.Items;
  //     console.log('All Tickets:', this.supportlist);
  //   });
  // }

  validSubmit() {
    if (this.validationform.valid) {
      this.isLoading = true;
      this.supporService
        .createTicket(this.validationform.value)
        .subscribe((res) => {
          this.toastService.show(`Ticket created successfully`, {
            classname: 'bg-success text-light',
            delay: 5000,
          });
          this.validationform.reset();
          // this.getAllSupports();
          this.isLoading = false;
          this.modalService.dismissAll('click Cross'); // close the popup after submitting form
        });
    } else {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      console.log('Not Valid Form');
    }
  }

  toggleModal(model1: any, model2: any) {
    if (this.tokenStorage.getToken()) {
      this.modalService.open(model1, { size: 'lg', centered: true });
    } else this.modalService.open(model2, { size: 'lg', centered: true });

    document.querySelector('.modal-content')?.classList.add('border-light');
  }
}
