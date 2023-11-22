import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerFifthStyleComponent } from './date-picker-fifth-style.component';
import { FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from '../svg/svg.module';

@NgModule({
  declarations: [
    DatePickerFifthStyleComponent
  ],
  imports: [
    CommonModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SvgModule,
    FormsModule,
    TranslationModule
  ],
  exports: [DatePickerFifthStyleComponent]
})
export class DatePickerFifthStyleModule { }
