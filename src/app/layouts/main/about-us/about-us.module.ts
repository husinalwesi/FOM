import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { OurMissionModule } from 'src/app/modules/our-mission/our-mission.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';
import { OurValuesModule } from 'src/app/modules/our-values/our-values.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { CardWCategoryModule } from 'src/app/modules/card-w-category/card-w-category.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    TranslationModule,
    SvgModule,
    OurMissionModule,
    OurStoryModule,
    OurValuesModule,
    HeroHalfModule,
    CardWCategoryModule,
    BreadcrumbSectionSecondStyleModule
  ]
})
export class AboutUsModule { }
