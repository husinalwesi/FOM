import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPromotionsComponent } from './latest-promotions.component';

describe('LatestPromotionsComponent', () => {
  let component: LatestPromotionsComponent;
  let fixture: ComponentFixture<LatestPromotionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestPromotionsComponent]
    });
    fixture = TestBed.createComponent(LatestPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
