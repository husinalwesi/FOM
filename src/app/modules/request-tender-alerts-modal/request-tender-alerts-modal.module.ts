import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestTenderAlertsModalComponent } from './request-tender-alerts-modal.component';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from '../svg/svg.module';
import { FormsModule } from '@angular/forms';
import { DdlStanderModule } from '../ddl-stander/ddl-stander.module';
import { DatePickerFifthStyleModule } from '../date-picker-fifth-style/date-picker-fifth-style.module';

@NgModule({
  declarations: [
    RequestTenderAlertsModalComponent
  ],
  imports: [
    CommonModule,
    BtnOneModule,
    TranslationModule,
    SvgModule,
    FormsModule,
    DdlStanderModule,
    DatePickerFifthStyleModule
  ],
  exports: [RequestTenderAlertsModalComponent]
})
export class RequestTenderAlertsModalModule { }
