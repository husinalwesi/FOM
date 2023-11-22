import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahesEServicesComponent } from './fahes-e-services.component';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from '../svg/svg.module';
import { FahesEServicesCarouselModule } from '../fahes-e-services-carousel/fahes-e-services-carousel.module';

@NgModule({
  declarations: [
    FahesEServicesComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule,
    TranslationModule,
    FahesEServicesCarouselModule
  ],
  exports: [FahesEServicesComponent]
})
export class FahesEServicesModule { }
