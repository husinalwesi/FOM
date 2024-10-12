import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroHomeCarouselComponent } from './hero-home-carousel.component';



@NgModule({
  declarations: [
    HeroHomeCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeroHomeCarouselComponent]
})
export class HeroHomeCarouselModule { }
