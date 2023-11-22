import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahesMapComponent } from './fahes-map.component';
import { SvgModule } from '../svg/svg.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { InspectionCenterFilterModule } from '../inspection-center-filter/inspection-center-filter.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    FahesMapComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    SvgModule,
    TranslationModule,
    InspectionCenterFilterModule,
    LazyLoadImageModule,
    CarouselModule
  ],
  exports: [FahesMapComponent]
})
export class FahesMapModule { }
