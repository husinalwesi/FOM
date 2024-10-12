import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroInnerCarouselComponent } from './hero-inner-carousel.component';
import { SvgModule } from '../svg/svg.module';



@NgModule({
  declarations: [
    HeroInnerCarouselComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [HeroInnerCarouselComponent]
})
export class HeroInnerCarouselModule { }
