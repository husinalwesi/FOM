import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})
export class ServiceItemComponent {
  @Input() index: number = 0;
  @Input() activeIndex: number = 0;
  @Output() onClick: EventEmitter<boolean> = new EventEmitter();

  onClickEvt() {
    this.onClick.emit(true);
  }

}
