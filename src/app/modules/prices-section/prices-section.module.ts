import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricesSectionComponent } from './prices-section.component';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { PriceItemModule } from '../price-item/price-item.module';
import { ModalModule } from '../modal/modal.module';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    PricesSectionComponent
  ],
  imports: [
    CommonModule,
    BtnOneModule,
    PriceItemModule,
    ModalModule,
    SvgModule,
    TranslationModule
  ],
  exports: [PricesSectionComponent]
})
export class PricesSectionModule { }
