import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdlWithSearchComponent } from './ddl-with-search.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from '../svg/svg.module';
import { FilterDdlModule } from '../filter-ddl/filter-ddl.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DdlWithSearchComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    SvgModule,
    FilterDdlModule,
    FormsModule
  ],
  exports: [DdlWithSearchComponent]
})
export class DdlWithSearchModule { }
