import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahesNewsDetailedRoutingModule } from './fahes-news-detailed-routing.module';
import { FahesNewsDetailedComponent } from './fahes-news-detailed.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { DetailedBodyModule } from 'src/app/modules/detailed-body/detailed-body.module';
import { RelatedCarouselDetailsModule } from 'src/app/modules/related-carousel-details/related-carousel-details.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    FahesNewsDetailedComponent
  ],
  imports: [
    CommonModule,
    FahesNewsDetailedRoutingModule,
    CommonModule,
    BreadcrumbSectionSecondStyleModule,
    TranslationModule,
    DetailedBodyModule,
    RelatedCarouselDetailsModule,
    LazyLoadImageModule
  ]
})
export class FahesNewsDetailedModule { }
