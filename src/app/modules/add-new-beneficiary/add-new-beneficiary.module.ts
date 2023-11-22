import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewBeneficiaryComponent } from './add-new-beneficiary.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { FilterDdlModule } from '../filter-ddl/filter-ddl.module';
import { SearchWDdlModule } from '../search-w-ddl/search-w-ddl.module';
import { SvgModule } from '../svg/svg.module';

@NgModule({
  declarations: [
    AddNewBeneficiaryComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    FilterDdlModule,
    TranslationModule,
    SearchWDdlModule
  ],
  exports: [AddNewBeneficiaryComponent]
})
export class AddNewBeneficiaryModule { }
