import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox-car',
  templateUrl: './checkbox-car.component.html',
  styleUrls: ['./checkbox-car.component.scss']
})
export class CheckboxCarComponent {
  @Input() data: any = {//remove it once you chane it everywhere
    title: 'SHOP.LIMITED_HOURS',
    carNumber: '123456',
    name: 'limitedHours',
    value: false
  };
  @Output() onChange: EventEmitter<boolean> = new EventEmitter();

  change() {
    this.onChange.emit(this.data.value);
  }

}
