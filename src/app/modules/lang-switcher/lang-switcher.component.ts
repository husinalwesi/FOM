import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lang-switcher',
  templateUrl: './lang-switcher.component.html',
  styleUrls: ['./lang-switcher.component.scss']
})
export class LangSwitcherComponent {
  @Input() isEn: boolean = true;
  @Output() toggleLanguage: EventEmitter<boolean> = new EventEmitter();

  fireToggleLanguage() {
    this.toggleLanguage.emit(true);
  }

}
