import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahesInNumbersComponent } from './fahes-in-numbers.component';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    FahesInNumbersComponent
  ],
  imports: [
    CommonModule,
    TranslationModule
  ],
  exports: [FahesInNumbersComponent]
})
export class FahesInNumbersModule { }
