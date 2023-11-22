import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahesHeroSectionCarouselComponent } from './fahes-hero-section-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    FahesHeroSectionCarouselComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    BtnOneModule,
    TranslationModule
  ],
  exports: [FahesHeroSectionCarouselComponent]
})
export class FahesHeroSectionCarouselModule { }
