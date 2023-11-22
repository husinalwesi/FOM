import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewCarComponent } from './add-new-car.component';
import { SvgModule } from '../svg/svg.module';
import { FilterDdlModule } from '../filter-ddl/filter-ddl.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SearchWDdlModule } from '../search-w-ddl/search-w-ddl.module';

@NgModule({
  declarations: [
    AddNewCarComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    FilterDdlModule,
    TranslationModule,
    SearchWDdlModule
  ],
  exports: [AddNewCarComponent]
})
export class AddNewCarModule { }
