import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuisnessContinuityMangmentComponent } from './buisness-continuity-mangment.component';
import { BuisnessContinuityMangmentRoutingModule } from './buisness-continuity-mangment-routing.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';
import { CardWCategoryModule } from 'src/app/modules/card-w-category/card-w-category.module';
import { OurValuesModule } from 'src/app/modules/our-values/our-values.module';


@NgModule({
  declarations: [
    BuisnessContinuityMangmentComponent
  ],
  imports: [
    CommonModule,
    BuisnessContinuityMangmentRoutingModule,
    HeroHalfModule,
    BreadcrumbSectionSecondStyleModule,
    OurStoryModule,
    CardWCategoryModule,
    OurValuesModule
  ]
})
export class BuisnessContinuityMangmentModule { }
