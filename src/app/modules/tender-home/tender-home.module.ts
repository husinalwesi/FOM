import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenderHomeComponent } from './tender-home.component';
import { TranslateModule } from '@ngx-translate/core';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { DatePickerForthStyleModule } from '../date-picker-forth-style/date-picker-forth-style.module';
import { DdlStyleSecondModule } from '../ddl-style-second/ddl-style-second.module';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TenderHomeComponent
  ],
  imports: [
    CommonModule,
    BtnOneModule,
    SvgModule,
    TranslateModule,
    DatePickerForthStyleModule,
    DdlStyleSecondModule,
    TranslationModule,
    RouterModule
  ],
  exports: [TenderHomeComponent]
})
export class TenderHomeModule { }
