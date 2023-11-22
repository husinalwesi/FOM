import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksFilesComponent } from './links-files.component';
import { TranslationModule } from "../../i18n/translation.module";



@NgModule({
  declarations: [
    LinksFilesComponent
  ],
  exports: [LinksFilesComponent],
  imports: [
    CommonModule,
    TranslationModule
  ]
})
export class LinksFilesModule { }
