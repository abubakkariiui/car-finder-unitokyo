import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from 'src/app/services/orders/order.service';
import { ToastService } from 'src/app/toast/toast-service';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.scss'],
})
export class TrackOrderComponent implements OnInit {
  trackOrder!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;
  isLoading: boolean = false;
  orderDetails: any = [];
  resultMessage: any;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private ref: ChangeDetectorRef,
    public toastService: ToastService,
    private modalService: NgbModal,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.trackOrder = this.formBuilder.group({
      orderCode: ['', Validators.required],
    });
  }

  validSubmit() {
    if (this.trackOrder.status === 'VALID') {
      this.resultMessage = '';
      this.orderDetails = [];

      this.isLoading = true;
      let orderNo = this.trackOrder.value.orderCode;

      this.orderService.trackOrder(orderNo).subscribe(
        (res) => {
          // console.log(res);
          this.orderDetails = res;
          // console.log(this.orderDetails);
        },
        (err) => {
          this.resultMessage = err.error.Message;

          this.isLoading = false;
        }
      );
    }
    this.submit = true;
  }

  get form() {
    return this.trackOrder.controls;
  }
}
