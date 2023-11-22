import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fahes-e-services',
  templateUrl: './fahes-e-services.component.html',
  styleUrls: ['./fahes-e-services.component.scss']
})
export class FahesEServicesComponent {
  @Input() lang: string = 'en';
  selectedTab: string = "services"; //report
  @Input() slidesStore: any = null;
}
