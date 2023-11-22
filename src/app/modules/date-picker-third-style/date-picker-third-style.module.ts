import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerThirdStyleComponent } from './date-picker-third-style.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { SvgModule } from '../svg/svg.module';
import { FormsModule } from '@angular/forms';
import { TranslationModule } from 'src/app/i18n/translation.module';



@NgModule({
  declarations: [
    DatePickerThirdStyleComponent
  ],
  imports: [
    CommonModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SvgModule,
    FormsModule,
    TranslationModule
  ],
  exports: [DatePickerThirdStyleComponent]
})
export class DatePickerThirdStyleModule { }
