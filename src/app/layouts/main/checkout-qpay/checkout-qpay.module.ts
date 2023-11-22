import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutQpayRoutingModule } from './checkout-qpay-routing.module';
import { CheckoutQpayComponent } from './checkout-qpay.component';
import { PaymentFormTwoModule } from 'src/app/modules/payment-form-two/payment-form-two.module';


@NgModule({
  declarations: [
    CheckoutQpayComponent
  ],
  imports: [
    CommonModule,
    CheckoutQpayRoutingModule,
    PaymentFormTwoModule
  ]
})
export class CheckoutQpayModule { }
