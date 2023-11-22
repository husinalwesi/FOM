import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ddl-style-two',
  templateUrl: './ddl-style-two.component.html',
  styleUrls: ['./ddl-style-two.component.scss']
})
export class DdlStyleTwoComponent {
  @Input() lang: string = "en";
  @Input() isErrorEnabled: boolean = false;
  @Input() isErrorTextEnabled: boolean = true;
  @Input() data: any = {
    selected: null,
    placeholder: 'SHARED.CHOOSE_ONE',
    list: []
  };

  @Output() onOptionChange: EventEmitter<any> = new EventEmitter();
  isDdlEnabled: boolean = false;
  fireCloseAnimation: boolean = false;

  constructor(
    private translate: TranslateService,
  ) {
  }

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
