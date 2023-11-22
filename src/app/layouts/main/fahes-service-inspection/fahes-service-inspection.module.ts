import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FahesServiceInspectionRoutingModule } from './fahes-service-inspection-routing.module';
import { FahesServiceInspectionComponent } from './fahes-service-inspection.component';
import { FormStepsModule } from 'src/app/modules/form-steps/form-steps.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { HeroBgHalfModule } from 'src/app/modules/hero-bg-half/hero-bg-half.module';
import { PaginationSecondStyleModule } from 'src/app/modules/pagination-second-style/pagination-second-style.module';
import { InspectionItemModule } from 'src/app/modules/inspection-item/inspection-item.module';
import { InspectionFilterModule } from 'src/app/modules/inspection-filter/inspection-filter.module';
import { DatePickerSecondStyleModule } from 'src/app/modules/date-picker-second-style/date-picker-second-style.module';
import { CheckboxModule } from 'src/app/modules/checkbox/checkbox.module';
import { TimePickerModule } from 'src/app/modules/time-picker/time-picker.module';
import { ModalModule } from 'src/app/modules/modal/modal.module';
import { RadioBtnModule } from 'src/app/modules/radio-btn/radio-btn.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { VehicleDetailsItemModule } from 'src/app/modules/vehicle-details-item/vehicle-details-item.module';
import { DdlStanderModule } from 'src/app/modules/ddl-stander/ddl-stander.module';
import { FormsModule } from '@angular/forms';
import { VehicleInspectionFahesModule } from 'src/app/modules/vehicle-inspection-fahes/vehicle-inspection-fahes.module';
import { BookInspectionFahesModule } from 'src/app/modules/book-inspection-fahes/book-inspection-fahes.module';

@NgModule({
  declarations: [
    FahesServiceInspectionComponent
  ],
  imports: [
    CommonModule,
    FahesServiceInspectionRoutingModule,
    FormStepsModule,
    SvgModule,
    BreadcrumbSectionSecondStyleModule,
    HeroBgHalfModule,
    PaginationSecondStyleModule,
    InspectionItemModule,
    InspectionFilterModule,
    DatePickerSecondStyleModule,
    CheckboxModule,
    TimePickerModule,
    ModalModule,
    RadioBtnModule,
    TranslationModule,
    VehicleDetailsItemModule,
    DdlStanderModule,
    FormsModule,
    VehicleInspectionFahesModule,
    BookInspectionFahesModule
  ]
})
export class FahesServiceInspectionModule { }
