import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item-box',
  templateUrl: './menu-item-box.component.html',
  styleUrls: ['./menu-item-box.component.scss']
})
export class MenuItemBoxComponent {
  @Input() data: any;
  @Output() closeMobileMenu: EventEmitter<boolean> = new EventEmitter();

  closeMenu() {
    this.closeMobileMenu.emit(true);
  }

}
