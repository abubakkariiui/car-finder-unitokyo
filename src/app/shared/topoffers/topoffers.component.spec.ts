import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoffersComponent } from './topoffers.component';

describe('TopoffersComponent', () => {
  let component: TopoffersComponent;
  let fixture: ComponentFixture<TopoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopoffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
