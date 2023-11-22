import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionCarouselComponent } from './hero-section-carousel.component';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    HeroSectionCarouselComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    BtnOneModule,
    TranslationModule
  ],
  exports: [HeroSectionCarouselComponent]
})
export class HeroSectionCarouselModule { }
