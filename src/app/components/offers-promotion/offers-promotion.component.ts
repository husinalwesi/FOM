import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-offers-promotion',
  templateUrl: './offers-promotion.component.html',
  styleUrls: ['./offers-promotion.component.scss']
})
export class OffersPromotionComponent {
  @Input() lang: string = "en";
  @Input() promotions: any = [];


}
