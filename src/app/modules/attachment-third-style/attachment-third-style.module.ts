import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttachmentThirdStyleComponent } from './attachment-third-style.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from '../svg/svg.module';



@NgModule({
  declarations: [
    AttachmentThirdStyleComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule
  ],
  exports: [AttachmentThirdStyleComponent]
})
export class AttachmentThirdStyleModule { }
