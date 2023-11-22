import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPageRoutingModule } from './content-page-routing.module';
import { ContentPageComponent } from './content-page.component';
import { DetailedBodyModule } from 'src/app/modules/detailed-body/detailed-body.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';
import { OurValuesModule } from 'src/app/modules/our-values/our-values.module';
import { ItemFilesModule } from 'src/app/modules/item-files/item-files.module';
import { CardWCategoryModule } from 'src/app/modules/card-w-category/card-w-category.module';
import { TeamMembersSectionModule } from 'src/app/modules/team-members-section/team-members-section.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { OurValuesBtnModule } from 'src/app/modules/our-values-btn/our-values-btn.module';

@NgModule({
  declarations: [
    ContentPageComponent
  ],
  imports: [
    CommonModule,
    ContentPageRoutingModule,
    OurStoryModule,
    DetailedBodyModule,
    HeroHalfModule,
    OurValuesModule,
    ItemFilesModule,
    CardWCategoryModule,
    TeamMembersSectionModule,
    BreadcrumbSectionSecondStyleModule,
    TranslationModule,
    OurValuesBtnModule
  ]
})
export class ContentPageModule { }
