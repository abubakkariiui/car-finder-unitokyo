import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})

/**
 * Grid Component
 */
export class GridComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }
  }
}
