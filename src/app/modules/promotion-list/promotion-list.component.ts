import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.scss']
})
export class PromotionListComponent {
  @Input() count: number = 0;//to be removed..
  @Input() promotionList: any = [];

  

}
