import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-map',
  templateUrl: './search-map.component.html',
  styleUrls: ['./search-map.component.scss']
})
export class SearchMapComponent {
  @Input() placeholder: string = 'SHARED.CHOOSE_ONE';
  @Input() lang: string = 'en';
  @Input() data: any;
  isDdlEnabled: boolean = false;
  fireCloseAnimation: boolean = false;
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Input() isDisabled: boolean = false;

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
    this.onChange.emit(option);
    if (this.isDdlEnabled) this.toggleDDL();
  }

  isActive(key: string) {
    return this.data.selected.some((item: any) => item.key === key);
  }

}
