import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsAppointmentComponent } from './steps-appointment.component';
import { StepsAppointmentRoutingModule } from './steps-appointment-routing.module';
import { FormStepsModule } from 'src/app/modules/form-steps/form-steps.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { AddNewCarModule } from 'src/app/modules/add-new-car/add-new-car.module';
import { VehicleDetailsItemModule } from 'src/app/modules/vehicle-details-item/vehicle-details-item.module';
import { PaginationModule } from 'src/app/modules/pagination/pagination.module';
import { CheckboxModule } from 'src/app/modules/checkbox/checkbox.module';
import { RadioBtnModule } from 'src/app/modules/radio-btn/radio-btn.module';
import { TimePickerModule } from 'src/app/modules/time-picker/time-picker.module';
import { TermsConditionsTabModule } from 'src/app/modules/terms-conditions-tab/terms-conditions-tab.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { CheckboxCarModule } from 'src/app/modules/checkbox-car/checkbox-car.module';

@NgModule({
  declarations: [
    StepsAppointmentComponent
  ],
  imports: [
    CommonModule,
    StepsAppointmentRoutingModule,
    FormStepsModule,
    SvgModule,
    AddNewCarModule,
    VehicleDetailsItemModule,
    PaginationModule,
    CheckboxModule,
    RadioBtnModule,
    TimePickerModule,
    TermsConditionsTabModule,
    TranslationModule,
    CheckboxCarModule
  ]
})
export class StepsAppointmentModule { }
