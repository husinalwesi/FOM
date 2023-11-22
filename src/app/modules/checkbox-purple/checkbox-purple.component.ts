import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox-purple',
  templateUrl: './checkbox-purple.component.html',
  styleUrls: ['./checkbox-purple.component.scss']
})
export class CheckboxPurpleComponent {
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
