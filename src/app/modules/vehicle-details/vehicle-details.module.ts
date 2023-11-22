import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgModule } from '../svg/svg.module';
import { VehicleDetailsComponent } from './vehicle-details.component';
import { FilterDdlModule } from '../filter-ddl/filter-ddl.module';
import { InspectionItemModule } from '../inspection-item/inspection-item.module';
import { PaginationModule } from '../pagination/pagination.module';
import { ModalModule } from '../modal/modal.module';
import { DdlStanderModule } from '../ddl-stander/ddl-stander.module';
import { VehicleDetailsItemModule } from '../vehicle-details-item/vehicle-details-item.module';
import { AddNewCarModule } from '../add-new-car/add-new-car.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { FormsModule } from '@angular/forms';
import { DdlModule } from '../ddl/ddl.module';
import { AddNewBeneficiaryModule } from '../add-new-beneficiary/add-new-beneficiary.module';
import { DatePickerSecondStyleModule } from '../date-picker-second-style/date-picker-second-style.module';

@NgModule({
  declarations: [VehicleDetailsComponent],
  imports: [
    CommonModule,
    SvgModule,
    FilterDdlModule,
    InspectionItemModule,
    PaginationModule,
    ModalModule,
    DdlStanderModule,
    VehicleDetailsItemModule,
    AddNewCarModule,
    TranslationModule,
    FormsModule,
    DdlModule,
    AddNewBeneficiaryModule,
    DatePickerSecondStyleModule
  ],
  exports: [VehicleDetailsComponent]
})
export class VehicleDetailsModule { }
