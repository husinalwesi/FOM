import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-become-supplier-item',
  templateUrl: './become-supplier-item.component.html',
  styleUrls: ['./become-supplier-item.component.scss']
})
export class BecomeSupplierItemComponent {
  @Input() data: any;
  @Input() lang: string = 'en';
  @Output() onClick: EventEmitter<boolean> = new EventEmitter();

  onClickFire() {
    this.onClick.emit();
  }

}
