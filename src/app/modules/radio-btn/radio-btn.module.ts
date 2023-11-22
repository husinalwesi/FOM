import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioBtnComponent } from './radio-btn.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RadioBtnComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    FormsModule
  ],
  exports: [RadioBtnComponent]
})
export class RadioBtnModule { }
