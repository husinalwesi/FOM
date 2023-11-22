import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/i18n/translation.service';

@Component({
  selector: 'app-ddl',
  templateUrl: './ddl.component.html',
  styleUrls: ['./ddl.component.scss']
})
export class DdlComponent {
  lang: string = "en";
  @Input() isErrorEnabled: boolean = false;
  @Input() data: any = {
    selected: null,
    placeholder: 'SHARED.CHOOSE_ONE',
    list: [
      {
        key: 'location1',
        title: {
          en: 'Location 1',
          ar: 'Location 1'
        }
      },
      {
        key: 'location2',
        title: {
          en: 'Location 2',
          ar: 'Location 2'
        }
      }
    ]
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
