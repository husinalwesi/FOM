import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePaymentRequestComponent } from './mobile-payment-request.component';

describe('MobilePaymentRequestComponent', () => {
  let component: MobilePaymentRequestComponent;
  let fixture: ComponentFixture<MobilePaymentRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobilePaymentRequestComponent]
    });
    fixture = TestBed.createComponent(MobilePaymentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
