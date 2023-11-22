import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/i18n/translation.service';

@Component({
  selector: 'app-ddl-third-style-multiple',
  templateUrl: './ddl-third-style-multiple.component.html',
  styleUrls: ['./ddl-third-style-multiple.component.scss']
})
export class DdlThirdStyleMultipleComponent {
  @Input() isDisabled: boolean = false;
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

  isSelected(key: string) {
    return (this.data?.selected || []).some((item: any) => item?.key === key) || false;
  }

  getSelectedTitle() {
    return (this.data?.selected || []).map((item: any) => item?.title?.[this.lang || '']).join(", ");
  }

}
