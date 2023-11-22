import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenderInformationComponent } from './tender-information.component';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { ModalModule } from '../modal/modal.module';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';



@NgModule({
  declarations: [
    TenderInformationComponent
  ],
  imports: [
    CommonModule,
    BtnOneModule,
    ModalModule,
    SvgModule,
    TranslationModule
  ],
  exports: [TenderInformationComponent]
})
export class TenderInformationModule { }
