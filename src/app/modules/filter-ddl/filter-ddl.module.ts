import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterDdlComponent } from './filter-ddl.component';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    FilterDdlComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule,
    DirectivesModule
  ],
  exports: [FilterDdlComponent]
})
export class FilterDdlModule { }
