import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  @Input() count: number = 0;
  @Output() onChange: EventEmitter<number> = new EventEmitter();

  plus() {
    let temp = this.count + 1;
    this.onChange.emit(temp);
  }

  minus() {
    if (this.count > 0) {
      let temp = this.count - 1;
      this.onChange.emit(temp);
    }
  }

}
