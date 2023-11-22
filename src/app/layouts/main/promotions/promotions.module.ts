import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PromotionsComponent } from './promotions.component';
import { PromotionRoutingModule } from './promotions-routing.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { PromotionListModule } from 'src/app/modules/promotion-list/promotion-list.module';
import { PaginationModule } from 'src/app/modules/pagination/pagination.module';
import { FilterPromotionsModule } from 'src/app/modules/filter-promotions/filter-promotions.module';
import { PromotionsSequareModule } from 'src/app/modules/promotions-sequare/promotions-sequare.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { NoDataModule } from 'src/app/modules/no-data/no-data.module';
import { ComponentLoaderModule } from 'src/app/modules/component-loader/component-loader.module';
import { FormatDateToApiFormatPipe } from 'src/app/pipes/format-date-to-api-format.pipe';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
// import { HeroBgHalfCarouselModule } from 'src/app/modules/hero-bg-half-carousel/hero-bg-half-carousel.module';

@NgModule({
  declarations: [
    PromotionsComponent
  ],
  imports: [
    CommonModule,
    PromotionRoutingModule,
    TranslationModule,
    SvgModule,
    // HeroBgHalfCarouselModule,
    PromotionListModule,
    RouterModule,
    PaginationModule,
    FilterPromotionsModule,
    PromotionsSequareModule,
    HeroHalfModule,
    NoDataModule,
    ComponentLoaderModule,
    BreadcrumbSectionSecondStyleModule
  ],
  providers: [FormatDateToApiFormatPipe]
})
export class PromotionsModule { }
