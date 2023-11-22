import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPromotionsComponent } from './filter-promotions.component';
import { SvgModule } from '../svg/svg.module';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { DatePickerModule } from '../date-picker/date-picker.module';
import { DdlModule } from '../ddl/ddl.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FilterPromotionsComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule,
    TranslationModule,
    BtnOneModule,
    DatePickerModule,
    DdlModule,
    FormsModule
  ],
  exports: [FilterPromotionsComponent]
})
export class FilterPromotionsModule { }
