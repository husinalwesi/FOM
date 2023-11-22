import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationSecondStyleComponent } from './pagination-second-style.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from '../svg/svg.module';

@NgModule({
  declarations: [
    PaginationSecondStyleComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule
  ],
  exports: [PaginationSecondStyleComponent]
})
export class PaginationSecondStyleModule { }
