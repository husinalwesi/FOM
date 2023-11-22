import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-terms-conditions-tab',
  templateUrl: './terms-conditions-tab.component.html',
  styleUrls: ['./terms-conditions-tab.component.scss']
})
export class TermsConditionsTabComponent {
  @Output() nextStep: EventEmitter<any> = new EventEmitter();
  @Output() prevStep: EventEmitter<any> = new EventEmitter();
  @Input() lang: string = "en";
  @Input() terms: any = [];
  

  next() {
    if (this.isValidForm()) {
      // alert("next");
      this.nextStep.emit();
    } else {
      alert("you have to check the checkboxs");
    }
  }

  back() {
    this.prevStep.emit();
  }

  isValidForm() {
    return this.terms.every((term: any) => term.checkBox.value);
  }

}
