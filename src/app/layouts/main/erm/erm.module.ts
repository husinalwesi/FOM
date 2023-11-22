import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErmComponent } from './erm.component';
import { ErmRoutingModule } from './erm-routing.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { OurMissionModule } from 'src/app/modules/our-mission/our-mission.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';
import { OurValuesModule } from 'src/app/modules/our-values/our-values.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { CardWCategoryModule } from 'src/app/modules/card-w-category/card-w-category.module';
import { TeamMembersSectionModule } from 'src/app/modules/team-members-section/team-members-section.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';


@NgModule({
  declarations: [
    ErmComponent
  ],
  imports: [
    CommonModule,
    ErmRoutingModule,
    TranslationModule,
    SvgModule,
    OurMissionModule,
    OurStoryModule,
    OurValuesModule,
    HeroHalfModule,
    CardWCategoryModule,
    TeamMembersSectionModule,
    BreadcrumbSectionSecondStyleModule
  ]
})
export class ErmModule { }
