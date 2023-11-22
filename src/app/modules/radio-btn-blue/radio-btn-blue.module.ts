import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioBtnBlueComponent } from './radio-btn-blue.component';
import { FormsModule } from '@angular/forms';
import { TranslationModule } from 'src/app/i18n/translation.module';



@NgModule({
  declarations: [
    RadioBtnBlueComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    FormsModule
  ],
  exports: [RadioBtnBlueComponent]
})
export class RadioBtnBlueModule { }
