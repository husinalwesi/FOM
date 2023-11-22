import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MilestonesComponent } from './milestones.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { EServicesCarouselModule } from '../e-services-carousel/e-services-carousel.module';
import { SvgModule } from '../svg/svg.module';
import { TinderTableSectionModule } from '../tinder-table-section/tinder-table-section.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    MilestonesComponent
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
  exports: [MilestonesComponent]
})
export class MilestonesModule { }
