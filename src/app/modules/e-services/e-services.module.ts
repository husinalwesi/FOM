import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EServicesComponent } from './e-services.component';
import { SvgModule } from '../svg/svg.module';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { EServicesCarouselModule } from '../e-services-carousel/e-services-carousel.module';
import { TenderHomeModule } from '../tender-home/tender-home.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    EServicesComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule,
    TranslationModule,
    EServicesCarouselModule,
    TenderHomeModule,
    CarouselModule
  ],
  exports: [EServicesComponent]
})
export class EServicesModule { }
