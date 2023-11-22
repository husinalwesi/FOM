import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgModule } from '../svg/svg.module';
import { BookAppointmentComponent } from './book-appointment.component';
import { TimePickerModule } from '../time-picker/time-picker.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { FilterDdlModule } from '../filter-ddl/filter-ddl.module';
import { DdlStanderModule } from '../ddl-stander/ddl-stander.module';
import { AddNewCarModule } from '../add-new-car/add-new-car.module';
import { CheckboxCarModule } from '../checkbox-car/checkbox-car.module';
import { CounterModule } from '../counter/counter.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { AttachmentSecondStyleModule } from '../attachment-second-style/attachment-second-style.module';
import { DdlStyleSecondModule } from '../ddl-style-second/ddl-style-second.module';
import { FormsModule } from '@angular/forms';
import { DatePickerSecondStyleModule } from '../date-picker-second-style/date-picker-second-style.module';
import { LocationListModule } from '../location-list/location-list.module';


@NgModule({
  declarations: [BookAppointmentComponent],
  imports: [
    CommonModule,
    SvgModule,
    TimePickerModule,
    CheckboxModule,
    FilterDdlModule,
    DdlStanderModule,
    AddNewCarModule,
    CheckboxCarModule,
    CounterModule,
    TranslationModule,
    AttachmentSecondStyleModule,
    DdlStyleSecondModule,
    FormsModule,
    DatePickerSecondStyleModule,
    LocationListModule
  ],
  exports: [BookAppointmentComponent]
})
export class BookAppointmentModule { }
