import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChasisCheckComponent } from './chasis-check.component';

describe('ChasisCheckComponent', () => {
  let component: ChasisCheckComponent;
  let fixture: ComponentFixture<ChasisCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChasisCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChasisCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
