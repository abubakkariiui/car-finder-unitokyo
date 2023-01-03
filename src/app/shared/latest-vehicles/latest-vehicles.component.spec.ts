import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestVehiclesComponent } from './latest-vehicles.component';

describe('LatestVehiclesComponent', () => {
  let component: LatestVehiclesComponent;
  let fixture: ComponentFixture<LatestVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestVehiclesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
