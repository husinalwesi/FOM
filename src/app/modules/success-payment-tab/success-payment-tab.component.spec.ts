import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessPaymentTabComponent } from './success-payment-tab.component';

describe('SuccessPaymentTabComponent', () => {
  let component: SuccessPaymentTabComponent;
  let fixture: ComponentFixture<SuccessPaymentTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessPaymentTabComponent]
    });
    fixture = TestBed.createComponent(SuccessPaymentTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
