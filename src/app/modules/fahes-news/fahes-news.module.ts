import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahesNewsComponent } from './fahes-news.component';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    FahesNewsComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    RouterModule
  ],
  exports: [FahesNewsComponent]
})
export class FahesNewsModule { }
