import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-members-section',
  templateUrl: './team-members-section.component.html',
  styleUrls: ['./team-members-section.component.scss']
})
export class TeamMembersSectionComponent {
  @Input() lang: string = "en";
  @Input() data: any = [];
}
