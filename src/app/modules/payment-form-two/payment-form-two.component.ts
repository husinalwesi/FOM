import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-payment-form-two',
  templateUrl: './payment-form-two.component.html',
  styleUrls: ['./payment-form-two.component.scss']
})
export class PaymentFormTwoComponent {
  @Input() data: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      this.submitForm();
    });
  }

  submitForm() {
    if (typeof window !== 'undefined') {
      const qpForm: any = document.getElementById("qpFormSubmit");
      if (qpForm) qpForm.click();
    }
  }

}
