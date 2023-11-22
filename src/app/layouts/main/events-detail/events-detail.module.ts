import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsDetailRoutingModule } from './events-detail-routing.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { EventsDetailComponent } from './events-detail.component';
import { BreadcrumbSectionFirstStyleModule } from 'src/app/modules/breadcrumb-section-first-style/breadcrumb-section-first-style.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';
import { DetailedBodyModule } from 'src/app/modules/detailed-body/detailed-body.module';
import { OurValuesModule } from 'src/app/modules/our-values/our-values.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { RelatedNewsModule } from 'src/app/modules/related-news/related-news.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
// import { SocailMediaIconsNewsModule } from 'src/app/modules/socail-media-icons-news/socail-media-icons-news.module';

@NgModule({
  declarations: [
    EventsDetailComponent,
  ],
  imports: [
    CommonModule,
    EventsDetailRoutingModule,
    TranslationModule,
    SvgModule,
    HeroHalfModule,
    BreadcrumbSectionSecondStyleModule,
    OurStoryModule,
    DetailedBodyModule,
    BtnOneModule,
    OurValuesModule,
    RelatedNewsModule,
    LazyLoadImageModule,
    // SocailMediaIconsNewsModule
  ]
})
export class EventsDetailModule { }
