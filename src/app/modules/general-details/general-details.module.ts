import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralDetailsComponent } from './general-details.component';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { FormsModule } from '@angular/forms';
import { SuccessPaymentTabModule } from '../success-payment-tab/success-payment-tab.module';
import { AttachmentModule } from '../attachment/attachment.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    GeneralDetailsComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule,
    FormsModule,
    SuccessPaymentTabModule,
    AttachmentModule,
    DirectivesModule
  ],
  exports: [GeneralDetailsComponent]
})
export class GeneralDetailsModule { }
