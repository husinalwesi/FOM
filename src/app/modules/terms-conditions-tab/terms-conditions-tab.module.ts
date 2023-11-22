import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsConditionsTabComponent } from './terms-conditions-tab.component';
import { BoxTermsAndConiditionModule } from '../box-terms-and-conidition/box-terms-and-conidition.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from '../svg/svg.module';

@NgModule({
  declarations: [
    TermsConditionsTabComponent
  ],
  imports: [
    CommonModule,
    BoxTermsAndConiditionModule,
    TranslationModule,
    SvgModule
  ],
  exports: [TermsConditionsTabComponent]
})
export class TermsConditionsTabModule { }
