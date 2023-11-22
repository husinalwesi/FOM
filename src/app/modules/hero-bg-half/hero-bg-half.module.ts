import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBgHalfComponent } from './hero-bg-half.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeroBgHalfComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    RouterModule
  ],
  exports: [HeroBgHalfComponent]
})
export class HeroBgHalfModule { }
