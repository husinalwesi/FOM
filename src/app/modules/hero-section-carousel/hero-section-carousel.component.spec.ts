import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionCarouselComponent } from './hero-section-carousel.component';

describe('HeroSectionCarouselComponent', () => {
  let component: HeroSectionCarouselComponent;
  let fixture: ComponentFixture<HeroSectionCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroSectionCarouselComponent]
    });
    fixture = TestBed.createComponent(HeroSectionCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
