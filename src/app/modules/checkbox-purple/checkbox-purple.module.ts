import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxPurpleComponent } from './checkbox-purple.component';
import { FormsModule } from '@angular/forms';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    CheckboxPurpleComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    FormsModule
  ],
  exports: [CheckboxPurpleComponent]
})
export class CheckboxPurpleModule { }
