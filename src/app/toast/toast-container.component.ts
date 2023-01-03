import { Component, TemplateRef } from '@angular/core';

import { ToastService } from './toast-service';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-toasts',
  template: `
    <ngb-toast
      *ngFor="let toast of toastService.toasts"
      [class]="toast.classname"
      [autohide]="true"
      [delay]="toast.delay || 5000"
      (hidden)="toastService.remove(toast)"
    >
      <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
        <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
      </ng-template>

      <ng-template #text>
        <div class=" toost d-flex justify-content-between align-items-center">
          <span> {{ toast.textOrTpl }}</span>
          <button
            (click)="close(toast)"
            data-bs-dismiss="toost"
            type="button"
            class="btn-close justify-content-end "
            aria-label="Close"
          ></button>
        </div>
      </ng-template>
    </ngb-toast>
  `,
  host: {
    class: 'toast-container position-fixed top-0 end-0 p-3',
    style: 'z-index: 1200',
  },
})
export class ToastsContainer {
  constructor(public toastService: ToastService) {}

  isTemplate(toast) {
    return toast.textOrTpl instanceof TemplateRef;
  }

  close(toast) {
    this.toastService.remove(toast);
  }
}
