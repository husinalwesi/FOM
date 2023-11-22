import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMembersSectionComponent } from './team-members-section.component';
import { TeamMemberItemModule } from '../team-member-item/team-member-item.module';

@NgModule({
  declarations: [
    TeamMembersSectionComponent
  ],
  imports: [
    CommonModule,
    TeamMemberItemModule
  ],
  exports: [TeamMembersSectionComponent]
})
export class TeamMembersSectionModule { }
