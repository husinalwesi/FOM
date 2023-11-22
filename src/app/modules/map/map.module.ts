import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LoaderTwoModule } from '../loader-two/loader-two.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    SvgModule,
    TranslationModule,
    LazyLoadImageModule,
    LoaderTwoModule,
    CarouselModule
  ],
  exports: [MapComponent]
})
export class MapModule { }
