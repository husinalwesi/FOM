import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMobileComponent } from './home-mobile.component';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    HomeMobileComponent
  ],
  imports: [
    CommonModule,
    TranslationModule
  ],
  exports: [HomeMobileComponent]
})
export class HomeMobileModule { }
