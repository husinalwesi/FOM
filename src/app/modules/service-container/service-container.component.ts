import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-service-container',
  templateUrl: './service-container.component.html',
  styleUrls: ['./service-container.component.scss']
})
export class ServiceContainerComponent {
  @Input() services: any = [];
  @Input() activeIndex: number = 0;
  @Output() onClick: EventEmitter<number> = new EventEmitter();

  onClickEvt(index: number) {
    this.onClick.emit(index);
  }
}
