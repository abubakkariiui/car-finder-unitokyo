import { Component, OnInit } from '@angular/core';

import { notification } from './notifications.model';
import { notificationData } from './data';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})

/**
 * Notifications Component
 */
export class NotificationsComponent implements OnInit {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  notificationData!: notification[];
  masterSelected!: boolean;
  checkedList: any;

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Home', link: '#' },
      { label: 'Account', link: '#' },
      { label: 'Notifications', active: true },
    ];

    // Chat Data Get Function
    this._fetchData();
    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }
  }

  // Chat Data Fetch
  private _fetchData() {
    this.notificationData = notificationData;
  }

  /**
   * On mobile toggle button clicked
   */
  SideBarMenu() {
    document.getElementById('account-nav')?.classList.toggle('show');
  }

  // The master checkbox will check/ uncheck all items
  checkUncheckAll() {
    for (var i = 0; i < this.notificationData.length; i++) {
      this.notificationData[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }

  // Get List of Checked Items
  getCheckedItemList() {
    this.checkedList = [];
    for (var i = 0; i < this.notificationData.length; i++) {
      if (this.notificationData[i].isSelected)
        this.checkedList.push(this.notificationData[i]);
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }
}
