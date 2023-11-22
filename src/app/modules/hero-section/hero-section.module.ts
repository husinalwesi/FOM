import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section.component';
import { SvgModule } from '../svg/svg.module';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { HeroSectionCarouselModule } from '../hero-section-carousel/hero-section-carousel.module';
import { HeroSectionPriceBottomModule } from '../hero-section-price-bottom/hero-section-price-bottom.module';

@NgModule({
  declarations: [
    HeroSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SvgModule,
    TranslationModule,
    HeroSectionCarouselModule,
    HeroSectionPriceBottomModule
  ],
  exports: [
    HeroSectionComponent
  ]
})
export class HeroSectionModule { }
