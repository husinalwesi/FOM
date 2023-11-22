import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-new-beneficiary',
  templateUrl: './add-new-beneficiary.component.html',
  styleUrls: ['./add-new-beneficiary.component.scss']
})
export class AddNewBeneficiaryComponent {
  @Output() toggleNewBeneficiaryEmiter: EventEmitter<any> = new EventEmitter();
  @Input() isNewBeneficiaryEnabled: boolean = false;

  toggleNewBeneficiary() {
    this.toggleNewBeneficiaryEmiter.emit();
  }

}
