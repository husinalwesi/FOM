import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionPriceBottomComponent } from './hero-section-price-bottom.component';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    HeroSectionPriceBottomComponent
  ],
  imports: [
    CommonModule,
    TranslationModule
  ],
  exports: [HeroSectionPriceBottomComponent]
})
export class HeroSectionPriceBottomModule { }
