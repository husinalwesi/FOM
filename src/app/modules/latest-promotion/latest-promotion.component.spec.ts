import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPromotionComponent } from './latest-promotion.component';

describe('LatestPromotionComponent', () => {
  let component: LatestPromotionComponent;
  let fixture: ComponentFixture<LatestPromotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestPromotionComponent]
    });
    fixture = TestBed.createComponent(LatestPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
