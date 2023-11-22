import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/i18n/translation.service';

@Component({
  selector: 'app-ddl-search-header',
  templateUrl: './ddl-search-header.component.html',
  styleUrls: ['./ddl-search-header.component.scss']
})
export class DdlSearchHeaderComponent {
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
