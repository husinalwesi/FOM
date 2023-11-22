import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspectionCenterFilterComponent } from './inspection-center-filter.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from '../svg/svg.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { FilterDdlModule } from '../filter-ddl/filter-ddl.module';
import { DdlThirdStyleModule } from '../ddl-third-style/ddl-third-style.module';
import { FormsModule } from '@angular/forms';
import { DdlWithSearchModule } from '../ddl-with-search/ddl-with-search.module';
import { NoDataModule } from '../no-data/no-data.module';
import { DdlThirdStyleMultipleModule } from '../ddl-third-style-multiple/ddl-third-style-multiple.module';

@NgModule({
  declarations: [
    InspectionCenterFilterComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    SvgModule,
    CheckboxModule,
    FilterDdlModule,
    DdlThirdStyleModule,
    FormsModule,
    DdlWithSearchModule,
    NoDataModule,
    DdlThirdStyleMultipleModule
  ],
  exports: [InspectionCenterFilterComponent]
})
export class InspectionCenterFilterModule { }
