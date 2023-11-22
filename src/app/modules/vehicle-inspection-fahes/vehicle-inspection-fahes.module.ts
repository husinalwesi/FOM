import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleInspectionFahesComponent } from './vehicle-inspection-fahes.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { VehicleDetailsItemModule } from '../vehicle-details-item/vehicle-details-item.module';
import { DdlStanderModule } from '../ddl-stander/ddl-stander.module';
import { FormsModule } from '@angular/forms';
import { InspectionFilterModule } from '../inspection-filter/inspection-filter.module';
import { SvgModule } from '../svg/svg.module';
import { PaginationSecondStyleModule } from '../pagination-second-style/pagination-second-style.module';
import { InspectionItemModule } from '../inspection-item/inspection-item.module';



@NgModule({
  declarations: [
    VehicleInspectionFahesComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    VehicleDetailsItemModule,
    DdlStanderModule,
    FormsModule,
    InspectionFilterModule,
    SvgModule,
    PaginationSecondStyleModule,
    InspectionItemModule
  ],
  exports : [VehicleInspectionFahesComponent]
})
export class VehicleInspectionFahesModule { }
