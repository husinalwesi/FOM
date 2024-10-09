import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroHomeCircleCarouselComponent } from './hero-home-circle-carousel.component';
import { SvgModule } from '../svg/svg.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeroHomeCircleCarouselComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule
  ],
  exports: [HeroHomeCircleCarouselComponent]
})
export class HeroHomeCircleCarouselModule { }
