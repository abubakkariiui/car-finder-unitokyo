import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-account-asidebar',
  templateUrl: './account-asidebar.component.html',
  styleUrls: ['./account-asidebar.component.scss'],
})
export class AccountAsidebarComponent implements OnInit {
  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}
  @Input() componentType!: string;

  ngOnInit(): void {}
  /**
   * On mobile toggle button clicked
   **/

  SideBarMenu() {
    document.getElementById('account-nav')?.classList.toggle('show');
  }
  loggout() {
    this.tokenStorage.signOut();
    // window.location.reload();
    this.router.navigate(['/']);
  }
}
