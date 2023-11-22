import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxTermsAndConiditionComponent } from './box-terms-and-conidition.component';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    BoxTermsAndConiditionComponent
  ],
  imports: [
    CommonModule,
    CheckboxModule,
    TranslationModule
  ],
  exports : [BoxTermsAndConiditionComponent]
})
export class BoxTermsAndConiditionModule { }
