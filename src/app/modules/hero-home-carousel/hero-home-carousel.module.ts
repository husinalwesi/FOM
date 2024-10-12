import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroHomeCarouselComponent } from './hero-home-carousel.component';
import { HeroInnerCarouselModule } from "../hero-inner-carousel/hero-inner-carousel.module";



@NgModule({
  declarations: [
    HeroHomeCarouselComponent
  ],
  imports: [
    CommonModule,
    HeroInnerCarouselModule
],
  exports: [HeroHomeCarouselComponent]
})
export class HeroHomeCarouselModule { }
