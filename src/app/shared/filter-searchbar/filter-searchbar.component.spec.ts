import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSearchbarComponent } from './filter-searchbar.component';

describe('FilterSearchbarComponent', () => {
  let component: FilterSearchbarComponent;
  let fixture: ComponentFixture<FilterSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSearchbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
