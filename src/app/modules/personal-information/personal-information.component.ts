import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent {
  @Output() nextStep: EventEmitter<any> = new EventEmitter();
  @Output() prevStep: EventEmitter<any> = new EventEmitter();
  min:Date = new Date;
  formData: any = {
    firstName: '',
    middleName: '',
    lastName: '',
    mobileNumber: '',
    officeTelephoneNumber: '',
    email: '',
    bestTimeToCall: "",
  };
  isSubmitted: boolean = false;

  onSubmit(form: any) {
    this.isSubmitted = true;
    if (form.valid && this.formData.bestTimeToCall) {
      let data = { ...this.formData, ...{ bestTimeToCall: this.formData.bestTimeToCall } };
      this.nextStep.emit(data);
    }
  }


  back() {
    this.prevStep.emit();
  }
}
