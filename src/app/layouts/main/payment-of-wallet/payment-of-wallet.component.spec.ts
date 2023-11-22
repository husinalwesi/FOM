import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentOfWalletComponent } from './payment-of-wallet.component';

describe('PaymentOfWalletComponent', () => {
  let component: PaymentOfWalletComponent;
  let fixture: ComponentFixture<PaymentOfWalletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentOfWalletComponent]
    });
    fixture = TestBed.createComponent(PaymentOfWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
