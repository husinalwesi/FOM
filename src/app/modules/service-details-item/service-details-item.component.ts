import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-details-item',
  templateUrl: './service-details-item.component.html',
  styleUrls: ['./service-details-item.component.scss']
})
export class ServiceDetailsItemComponent {
  @Input() data: any = 1;
}
