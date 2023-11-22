import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QpaymentConfirmComponent } from './qpayment-confirm.component';

describe('QpaymentConfirmComponent', () => {
  let component: QpaymentConfirmComponent;
  let fixture: ComponentFixture<QpaymentConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QpaymentConfirmComponent]
    });
    fixture = TestBed.createComponent(QpaymentConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
