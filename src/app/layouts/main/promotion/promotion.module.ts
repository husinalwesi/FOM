import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PromotionRoutingModule } from './promotion-routing.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { PromotionListModule } from 'src/app/modules/promotion-list/promotion-list.module';
import { PromotionComponent } from './promotion.component';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { DetailedBodyModule } from 'src/app/modules/detailed-body/detailed-body.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';

@NgModule({
  declarations: [
    PromotionComponent
  ],
  imports: [
    CommonModule,
    PromotionRoutingModule,
    TranslationModule,
    SvgModule,
    PromotionListModule,
    RouterModule,
    HeroHalfModule,
    DetailedBodyModule,
    BreadcrumbSectionSecondStyleModule
  ]
})
export class PromotionModule { }
