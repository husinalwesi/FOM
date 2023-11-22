import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahesHeroSectionCarouselComponent } from './fahes-hero-section-carousel.component';

describe('FahesHeroSectionCarouselComponent', () => {
  let component: FahesHeroSectionCarouselComponent;
  let fixture: ComponentFixture<FahesHeroSectionCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FahesHeroSectionCarouselComponent]
    });
    fixture = TestBed.createComponent(FahesHeroSectionCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
