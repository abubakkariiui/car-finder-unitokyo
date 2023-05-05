import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubnewsletterComponent } from './unsubnewsletter.component';

describe('UnsubnewsletterComponent', () => {
  let component: UnsubnewsletterComponent;
  let fixture: ComponentFixture<UnsubnewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsubnewsletterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsubnewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
