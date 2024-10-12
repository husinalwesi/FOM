import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInnerCarouselComponent } from './hero-inner-carousel.component';

describe('HeroInnerCarouselComponent', () => {
  let component: HeroInnerCarouselComponent;
  let fixture: ComponentFixture<HeroInnerCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroInnerCarouselComponent]
    });
    fixture = TestBed.createComponent(HeroInnerCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
