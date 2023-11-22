import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ethic-item',
  templateUrl: './ethic-item.component.html',
  styleUrls: ['./ethic-item.component.scss']
})
export class EthicItemComponent {
@Input() lang: string ='en';
@Input() item :any = [];
}
