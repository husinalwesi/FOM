import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedCarouselDetailsComponent } from './related-carousel-details.component';

describe('RelatedCarouselDetailsComponent', () => {
  let component: RelatedCarouselDetailsComponent;
  let fixture: ComponentFixture<RelatedCarouselDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatedCarouselDetailsComponent]
    });
    fixture = TestBed.createComponent(RelatedCarouselDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
