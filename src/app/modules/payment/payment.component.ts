import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  saveCard: any = {
    title: 'Save Card',
    name: 'saveCard',
    value: false
  };

  termsConditions: any = {
    title: 'I agree with WOQOD Terms and Conditions',
    name: 'termsConditions',
    value: false
  };

  isDdlEnabled: boolean = false;
  fireCloseAnimation: boolean = false;

  toggleDDL() {
    if (this.isDdlEnabled) {
      this.fireCloseAnimation = true;
      setTimeout(() => {
        this.isDdlEnabled = false;
        this.fireCloseAnimation = false;
      }, 300);
    } else {
      this.isDdlEnabled = true;
    }
  }
}
