import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from './radio-button.component';
import { FormsModule } from '@angular/forms';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    RadioButtonComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    FormsModule
  ],
  exports: [RadioButtonComponent]
})
export class RadioButtonModule { }
