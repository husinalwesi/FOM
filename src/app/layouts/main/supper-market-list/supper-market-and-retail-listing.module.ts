import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupperMarketAndRetailListingRoutingModule } from './supper-market-and-retail-listing-routing.module';
import { SupperMarketAndRetailListingComponent } from './supper-market-and-retail-listing.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';
import { InspectionCenterModule } from 'src/app/modules/inspection-center/inspection-center.module';
import { PaginationModule } from 'src/app/modules/pagination/pagination.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';


@NgModule({
  declarations: [
    SupperMarketAndRetailListingComponent
  ],
  imports: [
    CommonModule,
    SupperMarketAndRetailListingRoutingModule,
    HeroHalfModule,
    BreadcrumbSectionSecondStyleModule,
    OurStoryModule,
    InspectionCenterModule,
    PaginationModule,
    TranslationModule,
    SvgModule
  ]
})
export class SupperMarketAndRetailListingModule { }
