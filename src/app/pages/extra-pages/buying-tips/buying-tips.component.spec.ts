import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingTipsComponent } from './buying-tips.component';

describe('BuyingTipsComponent', () => {
  let component: BuyingTipsComponent;
  let fixture: ComponentFixture<BuyingTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyingTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
