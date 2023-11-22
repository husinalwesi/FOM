import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutQpayComponent } from './checkout-qpay.component';

describe('CheckoutQpayComponent', () => {
  let component: CheckoutQpayComponent;
  let fixture: ComponentFixture<CheckoutQpayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutQpayComponent]
    });
    fixture = TestBed.createComponent(CheckoutQpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
