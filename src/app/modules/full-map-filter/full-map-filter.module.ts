import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullMapFilterComponent } from './full-map-filter.component';
import { FormsModule } from '@angular/forms';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { CheckboxPurpleModule } from '../checkbox-purple/checkbox-purple.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { DdlThirdStyleModule } from '../ddl-third-style/ddl-third-style.module';
import { DdlWithSearchModule } from '../ddl-with-search/ddl-with-search.module';
import { FilterDdlModule } from '../filter-ddl/filter-ddl.module';
import { NoDataModule } from '../no-data/no-data.module';
import { SearchMapModule } from '../search-map/search-map.module';
import { SvgModule } from '../svg/svg.module';

@NgModule({
  declarations: [
    FullMapFilterComponent
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
    SearchMapModule,
    CheckboxPurpleModule,
    NoDataModule
  ],
  exports: [FullMapFilterComponent]
})
export class FullMapFilterModule { }
