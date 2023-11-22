import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahesContactUsComponent } from './fahes-contact-us.component';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { HeroBgHalfModule } from 'src/app/modules/hero-bg-half/hero-bg-half.module';
import { OurMissionModule } from 'src/app/modules/our-mission/our-mission.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';
import { OurValuesModule } from 'src/app/modules/our-values/our-values.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { FahesContactUsRoutingModule } from '../fahes-contact-us/fahes-contact-us-routing.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { StaticMapModule } from 'src/app/modules/static-map/static-map.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';



@NgModule({
  declarations: [
    FahesContactUsComponent
  ],
  imports: [
    CommonModule,
    FahesContactUsRoutingModule,
    HeroBgHalfModule,
    OurStoryModule,
    SvgModule,
    OurValuesModule,
    OurMissionModule,
    BtnOneModule,
    HeroHalfModule,
    TranslationModule,
    StaticMapModule,
    BreadcrumbSectionSecondStyleModule
  ]
})
export class FahesContactUsModule { }
