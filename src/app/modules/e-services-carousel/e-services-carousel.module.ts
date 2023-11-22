import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EServicesCarouselComponent } from './e-services-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    EServicesCarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    SvgModule,
    TranslationModule,
    LazyLoadImageModule
  ],
  exports: [EServicesCarouselComponent]
})
export class EServicesCarouselModule { }
