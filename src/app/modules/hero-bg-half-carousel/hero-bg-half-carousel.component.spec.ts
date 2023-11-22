import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBgHalfCarouselComponent } from './hero-bg-half-carousel.component';

describe('HeroBgHalfCarouselComponent', () => {
  let component: HeroBgHalfCarouselComponent;
  let fixture: ComponentFixture<HeroBgHalfCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroBgHalfCarouselComponent]
    });
    fixture = TestBed.createComponent(HeroBgHalfCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
