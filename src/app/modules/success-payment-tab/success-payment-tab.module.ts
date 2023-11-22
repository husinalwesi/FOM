import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessPaymentTabComponent } from './success-payment-tab.component';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    SuccessPaymentTabComponent
  ],
  imports: [
    CommonModule,
    TranslationModule
  ],
  exports: [SuccessPaymentTabComponent]
})
export class SuccessPaymentTabModule { }
