import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeroComponent } from './home-hero.component';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { HeroHomeCircleCarouselModule } from "../hero-home-circle-carousel/hero-home-circle-carousel.module";
import { HeroHomeCarouselModule } from "../hero-home-carousel/hero-home-carousel.module";

@NgModule({
  declarations: [
    HomeHeroComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule,
    HeroHomeCircleCarouselModule,
    HeroHomeCarouselModule
  ],
  exports: [HomeHeroComponent]
})
export class HomeHeroModule { }
