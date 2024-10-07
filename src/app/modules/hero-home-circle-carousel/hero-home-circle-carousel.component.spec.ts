import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHomeCircleCarouselComponent } from './hero-home-circle-carousel.component';

describe('HeroHomeCircleCarouselComponent', () => {
  let component: HeroHomeCircleCarouselComponent;
  let fixture: ComponentFixture<HeroHomeCircleCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroHomeCircleCarouselComponent]
    });
    fixture = TestBed.createComponent(HeroHomeCircleCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
