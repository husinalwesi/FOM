import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesDetailsRoutingModule } from './services-details-routing.module';
import { ServicesDetailsComponent } from './services-details.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { FahesStoryModule } from 'src/app/modules/fahes-story/fahes-story.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { TimeLineModule } from 'src/app/modules/time-line/time-line.module';
import { TagServiesModule } from 'src/app/modules/tag-servies/tag-servies.module';


@NgModule({
  declarations: [
    ServicesDetailsComponent
  ],
  imports: [
    CommonModule,
    ServicesDetailsRoutingModule,
    HeroHalfModule,
    BreadcrumbSectionSecondStyleModule,
    TimeLineModule,
    FahesStoryModule,
    TranslationModule,
    TagServiesModule
  ]
})
export class ServicesDetailsModule { }
