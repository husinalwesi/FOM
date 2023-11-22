import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-retail-prices',
  templateUrl: './retail-prices.component.html',
  styleUrls: ['./retail-prices.component.scss']
})
export class RetailPricesComponent {
  @Input() mainData: any;
  @Input() lang: string = "en";
  @Input() data: any = [];
  isModalEnabled3: boolean = false;
  isModalEnabledPart: boolean = false;

  closeModal() {
    this.isModalEnabled3 = false;
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        this.isModalEnabledPart = false;
      }, 500);
    }
  }

}
