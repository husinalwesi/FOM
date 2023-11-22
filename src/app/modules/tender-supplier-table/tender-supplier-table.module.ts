import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenderSupplierTableComponent } from './tender-supplier-table.component';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { SvgModule } from '../svg/svg.module';
import { TranslateModule } from '@ngx-translate/core';
import { DatePickerForthStyleModule } from '../date-picker-forth-style/date-picker-forth-style.module';
import { DdlStyleSecondModule } from '../ddl-style-second/ddl-style-second.module';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [
    TenderSupplierTableComponent,
  ],
  imports: [
    CommonModule,
    BtnOneModule,
    SvgModule,
    TranslateModule,
    DatePickerForthStyleModule,
    DdlStyleSecondModule,
    RouterModule,
    TranslationModule,
    LazyLoadImageModule
  ],
  exports: [TenderSupplierTableComponent]
})
export class TenderSupplierTableModule { }
