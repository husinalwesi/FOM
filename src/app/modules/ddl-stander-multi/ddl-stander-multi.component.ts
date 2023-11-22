import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ddl-stander-multi',
  templateUrl: './ddl-stander-multi.component.html',
  styleUrls: ['./ddl-stander-multi.component.scss']
})
export class DdlStanderMultiComponent {
  @Input() lang: string = "en";
  @Input() isErrorEnabled: boolean = false;
  @Input() isRequired: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() data: any = {
    selected: [],
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

  isSelected(key: string) {
    return (this.data?.selected || []).some((item: any) => item?.key === key) || false;
  }

  getSelectedTitle() {
    return (this.data?.selected || []).map((item: any) => item?.title?.[this.lang || '']);
  }

}
