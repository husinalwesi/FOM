import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QpaymentConfirmRoutingModule } from './qpayment-confirm-routing.module';
import { QpaymentConfirmComponent } from './qpayment-confirm.component';
import { PaymentModule } from 'src/app/modules/payment/payment.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { CheckboxModule } from 'src/app/modules/checkbox/checkbox.module';
import { LoaderTwoModule } from 'src/app/modules/loader-two/loader-two.module';
import { RadioBtnBlueModule } from 'src/app/modules/radio-btn-blue/radio-btn-blue.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';


@NgModule({
  declarations: [
    QpaymentConfirmComponent
  ],
  imports: [
    CommonModule,
    QpaymentConfirmRoutingModule,
    PaymentModule,
    CheckboxModule,
    SvgModule,
    RadioBtnBlueModule,
    TranslationModule,
    BtnOneModule,
    LoaderTwoModule
  ]
})
export class QpaymentConfirmModule { }
