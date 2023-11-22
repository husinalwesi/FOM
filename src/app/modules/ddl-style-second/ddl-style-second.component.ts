import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/i18n/translation.service';

@Component({
  selector: 'app-ddl-style-second',
  templateUrl: './ddl-style-second.component.html',
  styleUrls: ['./ddl-style-second.component.scss']
})
export class DdlStyleSecondComponent {
  @Input() mainClasses: string = "h-[33px]";
  lang: string = "en";
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
    private TranslationService: TranslationService,
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
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
