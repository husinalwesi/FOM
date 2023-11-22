import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-widgets',
  templateUrl: './social-widgets.component.html',
  styleUrls: ['./social-widgets.component.scss']
})
export class SocialWidgetsComponent {
  @Input() socilaMediaAccounts: any = [];
  constructor() { }

}
