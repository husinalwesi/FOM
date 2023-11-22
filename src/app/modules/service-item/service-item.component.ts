import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})
export class ServiceItemComponent {
  @Input() lang: string = "en";
  @Input() data: any;
  @Input() styleColor: string = '';//red-purple
  
}
