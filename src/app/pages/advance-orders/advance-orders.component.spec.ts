import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceOrdersComponent } from './advance-orders.component';

describe('AdvanceOrdersComponent', () => {
  let component: AdvanceOrdersComponent;
  let fixture: ComponentFixture<AdvanceOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
