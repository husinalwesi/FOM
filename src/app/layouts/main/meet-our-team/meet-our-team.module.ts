import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetOurTeamRoutingModule } from './meet-our-team-routing.module';
import { MeetOurTeamComponent } from './meet-our-team.component';
import { BreadcrumbSectionFirstStyleModule } from 'src/app/modules/breadcrumb-section-first-style/breadcrumb-section-first-style.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';
import { TeamMembersSectionModule } from 'src/app/modules/team-members-section/team-members-section.module';
import { HeroHalfModule } from 'src/app/modules/hero-half/hero-half.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';


@NgModule({
  declarations: [
    MeetOurTeamComponent
  ],
  imports: [
    CommonModule,
    MeetOurTeamRoutingModule,
    BreadcrumbSectionFirstStyleModule,
    OurStoryModule,
    TeamMembersSectionModule,
    HeroHalfModule,
    BreadcrumbSectionSecondStyleModule
  ]
})
export class MeetOurTeamModule { }
