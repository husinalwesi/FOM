import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersHomepageRoutingModule } from './careers-homepage-routing.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { BtnWImageModule } from 'src/app/modules/btn-w-image/btn-w-image.module';
import { OurJobsModule } from 'src/app/modules/our-jobs/our-jobs.module';
import { OurValuesBtnModule } from 'src/app/modules/our-values-btn/our-values-btn.module';
import { FaqModule } from 'src/app/modules/faq/faq.module';
import { CareersHomepageComponent } from './careers-homepage.component';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { CareerItemModule } from 'src/app/modules/career-item/career-item.module';



@NgModule({
  declarations: [
    CareersHomepageComponent,
  ],
  imports: [
    CommonModule,
    CareersHomepageRoutingModule,
    TranslationModule,
    SvgModule,
    HeroHalfModule,
    OurStoryModule,
    BtnOneModule,
    BtnWImageModule,
    OurJobsModule,
    OurValuesBtnModule,
    FaqModule,
    BreadcrumbSectionSecondStyleModule,
    CareerItemModule
  ]
})
export class CareersHomepageModule { }
