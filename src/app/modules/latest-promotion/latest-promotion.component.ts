import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-latest-promotion',
  templateUrl: './latest-promotion.component.html',
  styleUrls: ['./latest-promotion.component.scss']
})
export class LatestPromotionComponent {
@Input() promotions:any =null;
@Input() lang:string ='en';
}
