import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatedCarouselDetailsComponent } from './related-carousel-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { FahesEventCardModule } from '../fahes-event-card/fahes-event-card.module';
import { SvgModule } from '../svg/svg.module';

@NgModule({
  declarations: [
    RelatedCarouselDetailsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    SvgModule,
    TranslationModule,
    FahesEventCardModule
  ],
  exports: [RelatedCarouselDetailsComponent]
})
export class RelatedCarouselDetailsModule { }
