import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-product-and-service',
  templateUrl: './statistics-product-and-service.component.html',
  styleUrls: ['./statistics-product-and-service.component.scss']
})
export class StatisticsProductAndServiceComponent {
@Input() lang:string = 'en';
@Input() statistics:any= null
}
