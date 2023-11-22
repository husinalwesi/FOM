import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePickerComponent } from './time-picker.component';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    TimePickerComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule,
    DirectivesModule
  ],
  exports: [TimePickerComponent]
})
export class TimePickerModule { }
