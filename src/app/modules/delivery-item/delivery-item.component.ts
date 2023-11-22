import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delivery-item',
  templateUrl: './delivery-item.component.html',
  styleUrls: ['./delivery-item.component.scss']
})
export class DeliveryItemComponent {
  @Input() data: any;
  @Input() lang: string = "en";

}
