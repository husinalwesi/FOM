import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoDataComponent } from './no-data.component';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    NoDataComponent
  ],
  imports: [
    CommonModule,
    TranslationModule
  ],
  exports: [NoDataComponent]
})
export class NoDataModule { }
