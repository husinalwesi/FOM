import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ethic-item-second-style',
  templateUrl: './ethic-item-second-style.component.html',
  styleUrls: ['./ethic-item-second-style.component.scss']
})
export class EthicItemSecondStyleComponent {
  @Input() lang: string = "en";
  @Input() data: any;
}
