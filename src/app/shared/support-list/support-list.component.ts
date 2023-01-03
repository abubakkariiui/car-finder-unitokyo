import { SupportService } from 'src/app/services/support/support.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/toast/toast-service';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';

@Component({
  selector: 'app-support-list',
  templateUrl: './support-list.component.html',
  styleUrls: ['./support-list.component.scss'],
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
  messagesLoading: boolean = false;

  filters = {
    page: 1,
    pageSize: 10,
  };
  collectionSize = 0;

  showPagination: boolean = false;

  writeMessageForm!: UntypedFormGroup;

  selectedTicket: any = {};

  loggedInUser: any = {};

  constructor(
    private modalService: NgbModal,
    private formBuilder: UntypedFormBuilder,
    private supporService: SupportService,
    private toastService: ToastService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.loggedInUser = this.tokenStorage.getUserProfile();

    this.getAllSupports();
    this.validationform = this.formBuilder.group({
      DepartmentId: [''],
      MessageBody: [''],
    });
    this.writeMessageForm = this.formBuilder.group({
      TicketId: [''],
      MessageBody: [''],
    });
  }
  get isTicketSelected() {
    return Object.entries(this.selectedTicket).length > 0 ? true : false;
  }
  onTicketSelected(item) {
    this.messagesLoading = true;
    this.selectedTicket = {};
    this.supporService.getUserTicketById(item.Id).subscribe((x) => {
      this.selectedTicket = x;
      this.messagesLoading = false;
    });
    // this.selectedTicket = item;
  }

  sendMessage() {
    if (this.writeMessageForm.valid) {
      this.isLoading = true;

      this.supporService
        .sendMessage(
          this.selectedTicket.Id,
          this.writeMessageForm.value.MessageBody
        )
        .subscribe((res) => {
          this.modalService.dismissAll('click Cross'); // close the popup after submitting form
          this.onTicketSelected(this.selectedTicket);
          this.isLoading = false;
          this.toastService.show(`Message sent successfully`, {
            classname: 'bg-success text-light',
            delay: 5000,
          });
          // document.querySelector('#departments').innerHTML = 'Select Department';
          this.writeMessageForm.reset();
        });
    } else {
      console.log('Not Valid Form');
    }
  }

  getAllSupports() {
    this.supporService.getSupportList(this.filters).subscribe((res) => {
      this.data = res;
      this.supportlist = this.data.Items;

      this.showPagination = this.data.TotalItems > this.supportlist.length;

      if (this.supportlist > 0) {
        this.onTicketSelected(this.supportlist[0]);
      }
      this.collectionSize = res['TotalItems'];
      this.filters.pageSize = res['ItemsPerPage'];
    });
  }
  writeMessage(model) {
    this.modalService.open(model, { size: 'lg', centered: true });

    document.querySelector('.modal-content')?.classList.add('border-light');
  }

  validSubmit() {
    if (this.validationform.valid) {
      this.isLoading = true;
      this.supporService
        .createTicket(this.validationform.value)
        .subscribe((res) => {
          this.modalService.dismissAll('click Cross'); // close the popup after submitting form
          this.getAllSupports();
          this.isLoading = false;
          this.toastService.show(`Ticket created successfully`, {
            classname: 'bg-success text-light',
            delay: 5000,
          });
          // document.querySelector('#departments').innerHTML = 'Select Department';
          this.validationform.reset();
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
