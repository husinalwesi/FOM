import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vehicle-details-item',
  templateUrl: './vehicle-details-item.component.html',
  styleUrls: ['./vehicle-details-item.component.scss']
})
export class VehicleDetailsItemComponent {
  @Input() lang: string = "en";
  @Input() data: any;
  @Output() changeCount: EventEmitter<number> = new EventEmitter();
  @Output() changeActive: EventEmitter<boolean> = new EventEmitter();

  countChange(value: number) {
    if (value == 0) this.changeActive.emit(false);
    this.changeCount.emit(value);
  }

  add() {
    this.changeCount.emit(1);
    this.changeActive.emit(true);
  }

}
