import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerTricksComponent } from './dealer-tricks.component';

describe('DealerTricksComponent', () => {
  let component: DealerTricksComponent;
  let fixture: ComponentFixture<DealerTricksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerTricksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerTricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
