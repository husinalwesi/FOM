import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-latest-promotions',
  templateUrl: './latest-promotions.component.html',
  styleUrls: ['./latest-promotions.component.scss']
})
export class LatestPromotionsComponent {
  @Input() lang: string = "en";
  @Input() mainData: any;
  @Input() promotions: any = [];
}
