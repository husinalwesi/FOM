import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ddl-stander',
  templateUrl: './ddl-stander.component.html',
  styleUrls: ['./ddl-stander.component.scss']
})
export class DdlStanderComponent {
  @Input() lang: string = "en";
  @Input() isErrorEnabled: boolean = false;
  @Input() isRequired: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() data: any = {
    selected: null,
    placeholder: 'SHARED.CHOOSE_ONE',
    list: []
  };

  @Output() onOptionChange: EventEmitter<any> = new EventEmitter();

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

  selectOption(option: any) {
    this.onOptionChange.emit(option);
    this.toggleDDL();
  }

}
