import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCareSubServiceComponent } from './auto-care-sub-service.component';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { OffersAndPromotionsModule } from 'src/app/modules/offers-and-promotions/offers-and-promotions.module';
import { PricesSectionModule } from 'src/app/modules/prices-section/prices-section.module';
import { TextHalfModule } from 'src/app/modules/text-half/text-half.module';
import { AutoCareServiceRoutingModule } from './auto-care-sub-service-routing.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';

@NgModule({
  declarations: [
    AutoCareSubServiceComponent
  ],
  imports: [
    CommonModule,
    AutoCareServiceRoutingModule,
    HeroHalfModule,
    BreadcrumbSectionSecondStyleModule,
    OffersAndPromotionsModule,
    TextHalfModule,
    PricesSectionModule,
    OurStoryModule
  ]
})
export class AutoCareSubServiceModule { }
