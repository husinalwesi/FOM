import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHomeCarouselComponent } from './hero-home-carousel.component';

describe('HeroHomeCarouselComponent', () => {
  let component: HeroHomeCarouselComponent;
  let fixture: ComponentFixture<HeroHomeCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroHomeCarouselComponent]
    });
    fixture = TestBed.createComponent(HeroHomeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
