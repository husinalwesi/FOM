import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurLeadershipComponent } from './our-leadership.component';
import { OurLeadershipRoutingModule } from './our-leadership-routing.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { TeamMembersSectionModule } from 'src/app/modules/team-members-section/team-members-section.module';
import { CardWCategoryModule } from 'src/app/modules/card-w-category/card-w-category.module';
import { BtnOneModule } from 'src/app/modules/btn-one/btn-one.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [
    OurLeadershipComponent
  ],
  imports: [
    CommonModule,
    OurLeadershipRoutingModule,
    BreadcrumbSectionSecondStyleModule,
    TeamMembersSectionModule,
    CardWCategoryModule,
    BtnOneModule,
    TranslationModule,
    LazyLoadImageModule
  ]
})
export class OurLeadershipModule { }
