import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-price-item',
  templateUrl: './price-item.component.html',
  styleUrls: ['./price-item.component.scss']
})
export class PriceItemComponent {
  @Input() lang: string = "en";
  @Input() data: any;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  itemClick() {
    this.onClick.emit();
  }

}
