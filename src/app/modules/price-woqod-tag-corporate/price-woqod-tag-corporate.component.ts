import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-woqod-tag-corporate',
  templateUrl: './price-woqod-tag-corporate.component.html',
  styleUrls: ['./price-woqod-tag-corporate.component.scss']
})
export class PriceWoqodTagCorporateComponent {
  @Input() lang: string = "en";
  @Input() data: any = [];
  @Input() mainData: any;
  @Input() modalData:any = {};
  @Input() modalData1:any = {};
  isModalEnabled1: boolean = false;
  isModalEnabled2: boolean = false;
 toggleModals() {
    if (this.isModalEnabled1) {
      this.isModalEnabled1 = false;
      this.isModalEnabled2 = true;
    } else {
      this.isModalEnabled1 = true;
      this.isModalEnabled2 = false;
    }
  }
}
