import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent {
  @Input() name: string = "";
  @Input() title: string = "";
  @Input() value: string = "";
  @Input() selected: string = "";
  @Output() onChange: EventEmitter<string> = new EventEmitter();

  change() {
    this.onChange.emit(this.value);
  }

}