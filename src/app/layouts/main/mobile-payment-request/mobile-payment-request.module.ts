import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobilePaymentRequestRoutingModule } from './mobile-payment-request-routing.module';
import { MobilePaymentRequestComponent } from './mobile-payment-request.component';
import { CyberSourceFormModule } from 'src/app/modules/cyber-source-form/cyber-source-form.module';


@NgModule({
  declarations: [
    MobilePaymentRequestComponent
  ],
  imports: [
    CommonModule,
    MobilePaymentRequestRoutingModule,
    CyberSourceFormModule
  ]
})
export class MobilePaymentRequestModule { }
