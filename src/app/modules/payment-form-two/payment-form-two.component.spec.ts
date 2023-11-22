import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFormTwoComponent } from './payment-form-two.component';

describe('PaymentFormTwoComponent', () => {
  let component: PaymentFormTwoComponent;
  let fixture: ComponentFixture<PaymentFormTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentFormTwoComponent]
    });
    fixture = TestBed.createComponent(PaymentFormTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
