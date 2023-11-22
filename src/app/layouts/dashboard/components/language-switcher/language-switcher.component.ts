import { Component } from '@angular/core';
import { TranslationService } from 'src/app/i18n/translation.service';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {
  isEn: boolean = this.translationService.getSelectedLanguage() === 'en';

  constructor(private translationService: TranslationService) { }

  fireToggleLanguage() {
    this.isEn = !this.isEn;
    let lang: string = this.isEn ? 'en' : 'ar';
    if (this.translationService.getSelectedLanguage() !== lang) this.translationService.setLanguage(lang);
  }



}
