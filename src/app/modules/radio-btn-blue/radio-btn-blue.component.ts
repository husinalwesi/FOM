import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-radio-btn-blue',
  templateUrl: './radio-btn-blue.component.html',
  styleUrls: ['./radio-btn-blue.component.scss']
})

export class RadioBtnBlueComponent {
  @Input() name: string = "";
  @Input() title: string = "";
  @Input() value: string = "";
  @Input() selected: string = "";
  @Output() onChange: EventEmitter<string> = new EventEmitter();

  change() {
    this.onChange.emit(this.value);
  }

}