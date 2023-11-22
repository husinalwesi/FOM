import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessInformationComponent } from './business-information.component';
import { SvgModule } from '../svg/svg.module';
import { DdlStanderModule } from '../ddl-stander/ddl-stander.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { FormsModule } from '@angular/forms';
import { DatePickerFifthStyleModule } from '../date-picker-fifth-style/date-picker-fifth-style.module';
import { RadioButtonModule } from '../radio-button/radio-button.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    BusinessInformationComponent,
  ],
  imports: [
    CommonModule,
    SvgModule,
    RadioButtonModule,
    DdlStanderModule,
    TranslationModule,
    FormsModule,
    DatePickerFifthStyleModule,
    DirectivesModule
  ],
  exports: [BusinessInformationComponent]
})
export class BusinessInformationModule { }
