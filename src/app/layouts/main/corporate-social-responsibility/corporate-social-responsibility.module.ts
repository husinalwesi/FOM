import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateSocialResponsibilityComponent } from './corporate-social-responsibility.component';
import { CorporateSocialResponsibilityRoutingModule } from './corporate-social-responsibility-routing.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';
import { CardWCategoryModule } from 'src/app/modules/card-w-category/card-w-category.module';
import { OurValuesModule } from 'src/app/modules/our-values/our-values.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';



@NgModule({
  declarations: [
    CorporateSocialResponsibilityComponent
  ],
  imports: [
    CommonModule,
    CorporateSocialResponsibilityRoutingModule,
    HeroHalfModule,
    OurStoryModule,
    CardWCategoryModule,
    OurValuesModule,
    BreadcrumbSectionSecondStyleModule
  ]
})
export class CorporateSocialResponsibilityModule { }
