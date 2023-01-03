import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAsidebarComponent } from './account-asidebar.component';

describe('AccountAsidebarComponent', () => {
  let component: AccountAsidebarComponent;
  let fixture: ComponentFixture<AccountAsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountAsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountAsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
