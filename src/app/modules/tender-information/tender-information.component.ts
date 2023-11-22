import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tender-information',
  templateUrl: './tender-information.component.html',
  styleUrls: ['./tender-information.component.scss']
})
export class TenderInformationComponent {
  @Input() isModalEnabled1: boolean = false
  @Input() lang: string = 'en';
  @Input() data: any;
}
