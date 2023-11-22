import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cyber-source-form',
  templateUrl: './cyber-source-form.component.html',
  styleUrls: ['./cyber-source-form.component.scss']
})
export class CyberSourceFormComponent {
  @Input() data: any;
  @Input() action: string = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      this.submitForm();
    });
  }

  submitForm() {
    if (typeof window !== 'undefined') {
      const cybersourceForm: any = document.getElementById("submitConfirm");
      if (cybersourceForm) cybersourceForm.click();
    }
  }

}
