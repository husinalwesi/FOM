import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-career-item',
  templateUrl: './career-item.component.html',
  styleUrls: ['./career-item.component.scss']
})
export class CareerItemComponent {
  @Input() lang: string = "en";
  @Input() data: any = null;
}
