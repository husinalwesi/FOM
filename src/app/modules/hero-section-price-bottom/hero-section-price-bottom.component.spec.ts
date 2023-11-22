import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionPriceBottomComponent } from './hero-section-price-bottom.component';

describe('HeroSectionPriceBottomComponent', () => {
  let component: HeroSectionPriceBottomComponent;
  let fixture: ComponentFixture<HeroSectionPriceBottomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroSectionPriceBottomComponent]
    });
    fixture = TestBed.createComponent(HeroSectionPriceBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
