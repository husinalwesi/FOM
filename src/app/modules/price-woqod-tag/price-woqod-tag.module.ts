import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { PriceWoqodTagComponent } from './price-woqod-tag.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from '../svg/svg.module';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  declarations: [PriceWoqodTagComponent],
  imports: [
    CommonModule,
    BtnOneModule,
    TranslationModule,
    ModalModule,
    SvgModule
  ],
  exports: [PriceWoqodTagComponent]
})
export class PriceWoqodTagModule { }
