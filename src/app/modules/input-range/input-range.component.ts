import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-range',
  templateUrl: './input-range.component.html',
  styleUrls: ['./input-range.component.scss']
})
export class InputRangeComponent {
  @Input() val: number = 0;
  @Output() onChange: EventEmitter<number> = new EventEmitter();

  rangeInput() {
    this.onChange.emit(this.val);
  }

}
