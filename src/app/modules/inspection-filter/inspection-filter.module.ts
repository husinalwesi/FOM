import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspectionFilterComponent } from './inspection-filter.component';
import { FilterDdlModule } from '../filter-ddl/filter-ddl.module';
import { SvgModule } from '../svg/svg.module';
import { SearchWDdlModule } from '../search-w-ddl/search-w-ddl.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { AddNewCarModule } from '../add-new-car/add-new-car.module';

@NgModule({
  declarations: [
    InspectionFilterComponent
  ],
  imports: [
    CommonModule,
    FilterDdlModule,
    SvgModule,
    SearchWDdlModule,
    TranslationModule,
    AddNewCarModule
  ],
  exports: [InspectionFilterComponent]
})
export class InspectionFilterModule { }
