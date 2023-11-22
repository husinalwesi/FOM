import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { HeroSectionModule } from 'src/app/modules/hero-section/hero-section.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { PromotionItemModule } from 'src/app/modules/promotion-item/promotion-item.module';
import { PromotionsSectionModule } from 'src/app/modules/promotions-section/promotions-section.module';
import { SocialWidgetsModule } from 'src/app/modules/social-widgets/social-widgets.module';
import { PetrolStationsModule } from 'src/app/modules/petrol-stations/petrol-stations.module';
import { NewsModule } from 'src/app/modules/news/news.module';
import { EServicesModule } from 'src/app/modules/e-services/e-services.module';
import { HeroSectionPriceBottomModule } from 'src/app/modules/hero-section-price-bottom/hero-section-price-bottom.module';
import { WoqoodAppModule } from 'src/app/modules/woqood-app/woqood-app.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    TranslationModule,
    HeroSectionModule,
    SvgModule,
    PromotionItemModule,
    PromotionsSectionModule,
    SocialWidgetsModule,
    PetrolStationsModule,
    NewsModule,
    EServicesModule,
    HeroSectionPriceBottomModule,
    WoqoodAppModule
  ],
  providers: [DatePipe]
})
export class HomePageModule { }
