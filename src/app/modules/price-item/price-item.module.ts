import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceItemComponent } from './price-item.component';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    PriceItemComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule
  ],
  exports: [PriceItemComponent]
})
export class PriceItemModule { }
