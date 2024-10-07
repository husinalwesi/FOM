import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroHomeCircleCarouselComponent } from './hero-home-circle-carousel.component';
import { SvgModule } from '../svg/svg.module';



@NgModule({
  declarations: [
    HeroHomeCircleCarouselComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [HeroHomeCircleCarouselComponent]
})
export class HeroHomeCircleCarouselModule { }
