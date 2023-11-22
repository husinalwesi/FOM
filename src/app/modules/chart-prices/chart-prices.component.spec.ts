import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPricesComponent } from './chart-prices.component';

describe('ChartPricesComponent', () => {
  let component: ChartPricesComponent;
  let fixture: ComponentFixture<ChartPricesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartPricesComponent]
    });
    fixture = TestBed.createComponent(ChartPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
