import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() lang: string = 'en';
  @Input() isErrorEnabled: boolean = false;
  @Input() data: any = {//remove it once you chane it everywhere
    title: 'SHOP.LIMITED_HOURS',
    name: 'limitedHours',
    value: false
  };
  @Output() onChange: EventEmitter<boolean> = new EventEmitter();

  change() {
    this.onChange.emit(this.data.value);
  }

}
