import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomotionsListComponent } from './pomotions-list.component';

describe('PomotionsListComponent', () => {
  let component: PomotionsListComponent;
  let fixture: ComponentFixture<PomotionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PomotionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PomotionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
