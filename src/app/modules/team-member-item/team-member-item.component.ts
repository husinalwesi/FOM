import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-member-item',
  templateUrl: './team-member-item.component.html',
  styleUrls: ['./team-member-item.component.scss']
})
export class TeamMemberItemComponent {
  @Input() lang: string = "en";
  @Input() data: any;

  isModalEnabled: boolean = false;
  ngOnInit() {
  }

}
