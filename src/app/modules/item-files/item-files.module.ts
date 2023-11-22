import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemFilesComponent } from './item-files.component';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    ItemFilesComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule
  ],
  exports: [ItemFilesComponent]
})
export class ItemFilesModule { }
