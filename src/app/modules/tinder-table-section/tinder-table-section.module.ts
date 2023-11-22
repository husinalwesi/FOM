import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TinderTableSectionComponent } from './tinder-table-section.component';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { SvgModule } from '../svg/svg.module';
import { TranslateModule } from '@ngx-translate/core';
import { DatePickerForthStyleModule } from '../date-picker-forth-style/date-picker-forth-style.module';
import { DdlStyleSecondModule } from '../ddl-style-second/ddl-style-second.module';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { FormsModule } from '@angular/forms';
import { NoDataModule } from '../no-data/no-data.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    TinderTableSectionComponent
  ],
  imports: [
    CommonModule,
    BtnOneModule,
    SvgModule,
    TranslateModule,
    DatePickerForthStyleModule,
    DdlStyleSecondModule,
    RouterModule,
    TranslationModule,
    FormsModule,
    NoDataModule,
    DirectivesModule
  ],
  exports: [TinderTableSectionComponent]
})
export class TinderTableSectionModule { }
