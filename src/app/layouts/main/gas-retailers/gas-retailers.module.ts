import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GasRetailersComponent } from './gas-retailers.component';
import { GasRetailersRoutingModule } from './gas-retailers-routing.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';
import { InspectionCenterModule } from 'src/app/modules/inspection-center/inspection-center.module';
import { PaginationModule } from 'src/app/modules/pagination/pagination.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';


@NgModule({
  declarations: [
    GasRetailersComponent
  ],
  imports: [
    CommonModule,
    GasRetailersRoutingModule,
    HeroHalfModule,
    BreadcrumbSectionSecondStyleModule,
    OurStoryModule,
    InspectionCenterModule,
    PaginationModule,
    TranslationModule,
    SvgModule
  ]
})
export class GasRetailersModule { }
