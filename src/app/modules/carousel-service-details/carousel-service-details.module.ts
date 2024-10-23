import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselServiceDetailsComponent } from './carousel-service-details.component';
import { SvgModule } from '../svg/svg.module';
import { ServiceDetailsItemModule } from "../service-details-item/service-details-item.module";



@NgModule({
  declarations: [
    CarouselServiceDetailsComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    ServiceDetailsItemModule
],
  exports: [CarouselServiceDetailsComponent]
})
export class CarouselServiceDetailsModule { }
