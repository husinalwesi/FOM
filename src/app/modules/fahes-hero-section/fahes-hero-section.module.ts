import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahesHeroSectionComponent } from './fahes-hero-section.component';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { BtnOneModule } from '../btn-one/btn-one.module';
import { SvgModule } from '../svg/svg.module';
import { FahesHeroSectionCarouselModule } from '../fahes-hero-section-carousel/fahes-hero-section-carousel.module';
import { FahesHeroSectionBottomModule } from '../fahes-hero-section-bottom/fahes-hero-section-bottom.module';

@NgModule({
  declarations: [
    FahesHeroSectionComponent,
  ],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule,
    SvgModule,
    TranslationModule,
    BtnOneModule,
    FahesHeroSectionCarouselModule,
    FahesHeroSectionBottomModule
  ],
  exports: [FahesHeroSectionComponent]
})
export class FahesHeroSectionModule { }
