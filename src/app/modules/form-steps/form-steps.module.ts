import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormStepsComponent } from './form-steps.component';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    FormStepsComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule
  ],
  exports: [FormStepsComponent]
})
export class FormStepsModule { }
