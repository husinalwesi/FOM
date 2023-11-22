import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SustainabilityComponent } from './sustainability.component';
import { SustainabilityRoutingModule } from './sustainability-routing.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';
import { OurValuesModule } from 'src/app/modules/our-values/our-values.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { CardWCategoryModule } from 'src/app/modules/card-w-category/card-w-category.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';

@NgModule({
  declarations: [
    SustainabilityComponent
  ],
  imports: [
    CommonModule,
    SustainabilityRoutingModule,
    HeroHalfModule,
    OurStoryModule,
    OurValuesModule,
    CardWCategoryModule,
    BreadcrumbSectionSecondStyleModule
  ]
})
export class SustainabilityModule { }
