import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WoqodeTagComponent } from './woqode-tag.component';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { WoqodeTagRoutingModule } from './woqode-tag-routing.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { AccordionWoqodTagModule } from 'src/app/modules/accordion-woqod-tag/accordion-woqod-tag.module';
import { StepsWoqodTagModule } from 'src/app/modules/steps-woqod-tag/steps-woqod-tag.module';
import { TabsWoaodTagModule } from 'src/app/modules/tabs-woaod-tag/tabs-woaod-tag.module';
import { PriceWoqodTagModule } from 'src/app/modules/price-woqod-tag/price-woqod-tag.module';
import { PriceWoqodTagCorporateModule } from 'src/app/modules/price-woqod-tag-corporate/price-woqod-tag-corporate.module';
import { FahesStoryModule } from 'src/app/modules/fahes-story/fahes-story.module';
import { EthicItemSecondStyleModule } from 'src/app/modules/ethic-item-second-style/ethic-item-second-style.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { TimeLineModule } from 'src/app/modules/time-line/time-line.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { TagServiesModule } from 'src/app/modules/tag-servies/tag-servies.module';

@NgModule({
  declarations: [
    WoqodeTagComponent
  ],
  imports: [
    CommonModule,
    WoqodeTagRoutingModule,
    BreadcrumbSectionSecondStyleModule,
    BtnOneModule,
    SvgModule,
    AccordionWoqodTagModule,
    StepsWoqodTagModule,
    TabsWoaodTagModule,
    PriceWoqodTagModule,
    PriceWoqodTagCorporateModule,
    FahesStoryModule,
    EthicItemSecondStyleModule,
    TranslationModule,
    TimeLineModule,
    HeroHalfModule,
    TagServiesModule
  ]
})
export class WoqodeTagModule { }
