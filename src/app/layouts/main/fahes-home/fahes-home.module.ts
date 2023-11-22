import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahesHomeComponent } from './fahes-home.component';
import { FahesHomeRoutingModule } from './fahes-home-routing.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { PromotionItemModule } from 'src/app/modules/promotion-item/promotion-item.module';
import { PromotionsSectionModule } from 'src/app/modules/promotions-section/promotions-section.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { SocialWidgetsModule } from 'src/app/modules/social-widgets/social-widgets.module';
import { FahesHeroSectionModule } from 'src/app/modules/fahes-hero-section/fahes-hero-section.module';
import { FahesEServicesModule } from 'src/app/modules/fahes-e-services/fahes-e-services.module';
import { FahesNewsModule } from 'src/app/modules/fahes-news/fahes-news.module';
import { InspectionCenterModule } from 'src/app/modules/inspection-center/inspection-center.module';
import { FahesInNumbersModule } from 'src/app/modules/fahes-in-numbers/fahes-in-numbers.module';
import { FahesAboutUsHomeModule } from 'src/app/modules/fahes-about-us-home/fahes-about-us-home.module';

@NgModule({
  declarations: [
    FahesHomeComponent,
  ],
  imports: [
    CommonModule,
    FahesHomeRoutingModule,
    TranslationModule,
    FahesHeroSectionModule,
    SvgModule,
    PromotionItemModule,
    PromotionsSectionModule,
    SocialWidgetsModule,
    FahesNewsModule,
    FahesEServicesModule,
    InspectionCenterModule,
    FahesInNumbersModule,
    FahesAboutUsHomeModule
  ]
})
export class FahesHomeModule { }
