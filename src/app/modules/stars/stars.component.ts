import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent {
  stars: any = [1, 2, 3, 4, 5];
  @Input() fill: number = 0;
  @Input() size: string = "16";
  @Input() isClickable: boolean = false;
  @Output() onUpdate: EventEmitter<number> = new EventEmitter();
  @Input() colorFill: string = '#802d3d';
  @Input() colorEmpty: string = '#ffffff';
  @Input() containerClasses: string = '';
  onClick(order: number) {
    let tempOrder = order;
    if (order === this.fill) tempOrder = order - 1;
    if (tempOrder < 0) tempOrder = 0;
    this.onUpdate.emit(tempOrder);
  }

}
