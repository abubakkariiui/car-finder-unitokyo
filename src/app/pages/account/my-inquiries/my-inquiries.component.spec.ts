import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInquiriesComponent } from './my-inquiries.component';

describe('MyInquiriesComponent', () => {
  let component: MyInquiriesComponent;
  let fixture: ComponentFixture<MyInquiriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInquiriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
