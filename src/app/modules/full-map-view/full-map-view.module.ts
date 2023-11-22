import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullMapViewComponent } from './full-map-view.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { TranslationModule } from 'src/app/i18n/translation.module';
// import { InspectionCenterFilterModule } from '../inspection-center-filter/inspection-center-filter.module';
import { SvgModule } from '../svg/svg.module';
import { InspectionCenterFilterModule } from '../inspection-center-filter/inspection-center-filter.module';
// import { FullMapFilterModule } from 'src/app/full-map-filter/full-map-filter.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FullMapFilterModule } from '../full-map-filter/full-map-filter.module';
// import { FullMapFilterModule } from 'src/app/full-map-filter/full-map-filter.module';

@NgModule({
  declarations: [
    FullMapViewComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    SvgModule,
    TranslationModule,
    InspectionCenterFilterModule,
    LazyLoadImageModule,
    FullMapFilterModule,
    CarouselModule
  ],
  exports: [FullMapViewComponent]
})
export class FullMapViewModule { }
