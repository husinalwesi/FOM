import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselServiceDetailsComponent } from './carousel-service-details.component';
import { SvgModule } from '../svg/svg.module';



@NgModule({
  declarations: [
    CarouselServiceDetailsComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [CarouselServiceDetailsComponent]
})
export class CarouselServiceDetailsModule { }
