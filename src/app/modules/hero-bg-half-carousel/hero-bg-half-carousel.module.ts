import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { HeroBgHalfCarouselComponent } from './hero-bg-half-carousel.component';
import { BtnOneModule } from '../btn-one/btn-one.module';

@NgModule({
  declarations: [
    HeroBgHalfCarouselComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule,
    TranslationModule,
    BtnOneModule
  ],
  exports: [HeroBgHalfCarouselComponent]
})
export class HeroBgHalfCarouselModule { }
