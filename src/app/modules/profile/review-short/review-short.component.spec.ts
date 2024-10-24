import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewShortComponent } from './review-short.component';

describe('ReviewShortComponent', () => {
  let component: ReviewShortComponent;
  let fixture: ComponentFixture<ReviewShortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewShortComponent]
    });
    fixture = TestBed.createComponent(ReviewShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
