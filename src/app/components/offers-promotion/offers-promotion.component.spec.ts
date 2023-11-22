import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersPromotionComponent } from './offers-promotion.component';

describe('OffersPromotionComponent', () => {
  let component: OffersPromotionComponent;
  let fixture: ComponentFixture<OffersPromotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffersPromotionComponent]
    });
    fixture = TestBed.createComponent(OffersPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
