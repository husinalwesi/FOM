import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPromotionsComponent } from './filter-promotions.component';

describe('FilterPromotionsComponent', () => {
  let component: FilterPromotionsComponent;
  let fixture: ComponentFixture<FilterPromotionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterPromotionsComponent]
    });
    fixture = TestBed.createComponent(FilterPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
