import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxCarComponent } from './checkbox-car.component';
import { FormsModule } from '@angular/forms';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    CheckboxCarComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    FormsModule
  ],
  exports: [CheckboxCarComponent]
})
export class CheckboxCarModule { }
