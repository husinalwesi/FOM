import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahesEServicesCarouselComponent } from './fahes-e-services-carousel.component';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { EServicesCarouselModule } from '../e-services-carousel/e-services-carousel.module';
import { SvgModule } from '../svg/svg.module';
import { TinderTableSectionModule } from '../tinder-table-section/tinder-table-section.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    FahesEServicesCarouselComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule,
    TranslationModule,
    EServicesCarouselModule,
    TinderTableSectionModule,
    CarouselModule,
    LazyLoadImageModule
  ],
  exports: [FahesEServicesCarouselComponent]
})
export class FahesEServicesCarouselModule { }
