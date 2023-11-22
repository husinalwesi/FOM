import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-offers-and-promotions',
  templateUrl: './offers-and-promotions.component.html',
  styleUrls: ['./offers-and-promotions.component.scss']
})
export class OffersAndPromotionsComponent {
  @Input() data: any;
  constructor(private sharedService: SharedService){}
  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }
}
