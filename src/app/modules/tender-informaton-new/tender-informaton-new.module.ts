import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenderInformatonNewComponent } from './tender-informaton-new.component';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { ModalModule } from '../modal/modal.module';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { FormsModule } from '@angular/forms';
import { AttachmentThirdStyleModule } from '../attachment-third-style/attachment-third-style.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    TenderInformatonNewComponent
  ],
  imports: [
    CommonModule,
    BtnOneModule,
    ModalModule,
    SvgModule,
    TranslationModule,
    FormsModule,
    AttachmentThirdStyleModule,
    DirectivesModule
  ],
  exports: [TenderInformatonNewComponent]
})
export class TenderInformatonNewModule { }
