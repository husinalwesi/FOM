import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentConfirmRoutingModule } from './payment-confirm-routing.module';
import { PaymentConfirmComponent } from './payment-confirm.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { CheckboxModule } from 'src/app/modules/checkbox/checkbox.module';
import { PaymentModule } from 'src/app/modules/payment/payment.module';
import { RadioBtnBlueModule } from 'src/app/modules/radio-btn-blue/radio-btn-blue.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { LoaderTwoModule } from 'src/app/modules/loader-two/loader-two.module';


@NgModule({
  declarations: [
    PaymentConfirmComponent
  ],
  imports: [
    CommonModule,
    PaymentConfirmRoutingModule,
    PaymentModule,
    CheckboxModule,
    SvgModule,
    RadioBtnBlueModule,
    TranslationModule,
    BtnOneModule,
    LoaderTwoModule
  ]
})
export class PaymentConfirmModule { }
