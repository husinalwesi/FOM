import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceWoqodTagCorporateComponent } from './price-woqod-tag-corporate.component';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { ModalModule } from '../modal/modal.module';
import { SvgModule } from '../svg/svg.module';

@NgModule({
  declarations: [
    PriceWoqodTagCorporateComponent
  ],
  imports: [
    CommonModule,
    BtnOneModule,
    TranslationModule,
    ModalModule,
    SvgModule
  ],
  exports: [PriceWoqodTagCorporateComponent]
})
export class PriceWoqodTagCorporateModule { }
