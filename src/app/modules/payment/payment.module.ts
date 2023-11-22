import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { SvgModule } from '../svg/svg.module';
import { RadioBtnModule } from '../radio-btn/radio-btn.module';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    CheckboxModule,
    SvgModule,
    RadioBtnModule,
    TranslationModule
  ],
  exports: [PaymentComponent]
})
export class PaymentModule { }
