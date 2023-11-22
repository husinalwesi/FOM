import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-steps',
  templateUrl: './form-steps.component.html',
  styleUrls: ['./form-steps.component.scss']
})
export class FormStepsComponent {
  @Input() steps: any;
  @Input() selectedStep: string = '';


  getSelectedTabIndex() {
    return this.steps.findIndex((step: any) => step.key === this.selectedStep) || 0;
  }

}
