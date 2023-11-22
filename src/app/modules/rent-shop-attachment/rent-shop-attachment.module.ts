import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentShopAttachmentComponent } from './rent-shop-attachment.component';
import { SvgModule } from '../svg/svg.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { AttachmentModule } from '../attachment/attachment.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { RecaptchModule } from '../recaptch/recaptch.module';
import { RadioButtonModule } from '../radio-button/radio-button.module';

@NgModule({
  declarations: [
    RentShopAttachmentComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    CheckboxModule,
    RadioButtonModule,
    AttachmentModule,
    TranslationModule,
    RecaptchModule
  ],
  exports: [RentShopAttachmentComponent]
})
export class RentShopAttachmentModule { }
