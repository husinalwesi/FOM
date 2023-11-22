import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidraComponent } from './sidra.component';
import { SidraRoutingModule } from './sidra-routing.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';
import { TextImageHalfModule } from 'src/app/modules/text-image-half/text-image-half.module';
import { LatestPromotionsModule } from 'src/app/modules/latest-promotions/latest-promotions.module';
import { TalabatSnoonuModule } from 'src/app/modules/talabat-snoonu/talabat-snoonu.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';

@NgModule({
  declarations: [
    SidraComponent
  ],
  imports: [
    CommonModule,
    SidraRoutingModule,
    BreadcrumbSectionSecondStyleModule,
    OurStoryModule,
    TextImageHalfModule,
    LatestPromotionsModule,
    TalabatSnoonuModule,
    HeroHalfModule
  ]
})
export class SidraModule { }
