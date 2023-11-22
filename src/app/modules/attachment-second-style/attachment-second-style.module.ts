import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttachmentSecondStyleComponent } from './attachment-second-style.component';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    AttachmentSecondStyleComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule
  ],
  exports: [AttachmentSecondStyleComponent]
})
export class AttachmentSecondStyleModule { }
