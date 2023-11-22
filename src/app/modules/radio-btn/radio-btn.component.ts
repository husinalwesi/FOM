import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-radio-btn',
  templateUrl: './radio-btn.component.html',
  styleUrls: ['./radio-btn.component.scss']
})
export class RadioBtnComponent {
  @Input() name: string = "";
  @Input() title: string = "";
  @Input() value: string = "";
  @Input() selected: string = "";
  @Output() onChange: EventEmitter<string> = new EventEmitter();

  change() {
    this.onChange.emit(this.value);
  }

}
