import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailPricesComponent } from './retail-prices.component';

describe('RetailPricesComponent', () => {
  let component: RetailPricesComponent;
  let fixture: ComponentFixture<RetailPricesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetailPricesComponent]
    });
    fixture = TestBed.createComponent(RetailPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
