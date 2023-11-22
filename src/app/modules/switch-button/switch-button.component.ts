import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss']
})
export class SwitchButtonComponent {
  @Input() data: any;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  changeValue() {
    this.onChange.emit(this.data.value);
  }

}
