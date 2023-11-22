import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentOfWalletComponent } from './payment-of-wallet.component';
import { PaymentOfWalletRoutingModule } from './payment-of-wallet-routing.module';
import { PaymentModule } from 'src/app/modules/payment/payment.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { CheckboxModule } from 'src/app/modules/checkbox/checkbox.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { RadioBtnBlueModule } from 'src/app/modules/radio-btn-blue/radio-btn-blue.module';
import { CyberSourceFormModule } from 'src/app/modules/cyber-source-form/cyber-source-form.module';
import { PaymentFormTwoModule } from 'src/app/modules/payment-form-two/payment-form-two.module';

@NgModule({
  declarations: [
    PaymentOfWalletComponent
  ],
  imports: [
    CommonModule,
    PaymentOfWalletRoutingModule,
    PaymentModule,
    CheckboxModule,
    SvgModule,
    RadioBtnBlueModule,
    TranslationModule,
    BtnOneModule,
    CyberSourceFormModule,
    PaymentFormTwoModule
  ]
})
export class PaymentOfWalletModule { }
