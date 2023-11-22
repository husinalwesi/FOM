import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroHalfComponent } from './hero-half.component';
import { HeroBgHalfModule } from '../hero-bg-half/hero-bg-half.module';
import { HeroBgHalfCarouselModule } from '../hero-bg-half-carousel/hero-bg-half-carousel.module';

@NgModule({
  declarations: [
    HeroHalfComponent
  ],
  imports: [
    CommonModule,
    HeroBgHalfModule,
    HeroBgHalfCarouselModule
  ],
  exports: [HeroHalfComponent]
})
export class HeroHalfModule { }
