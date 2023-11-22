import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-woqod-tag',
  templateUrl: './price-woqod-tag.component.html',
  styleUrls: ['./price-woqod-tag.component.scss']
})
export class PriceWoqodTagComponent {
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

