import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-steps-woqod-tag',
  templateUrl: './steps-woqod-tag.component.html',
  styleUrls: ['./steps-woqod-tag.component.scss']
})
export class StepsWoqodTagComponent {
  @Input() lang: string = "en";
  @Input() data: any;
}
