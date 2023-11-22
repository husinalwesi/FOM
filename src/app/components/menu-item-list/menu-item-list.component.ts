import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item-list',
  templateUrl: './menu-item-list.component.html',
  styleUrls: ['./menu-item-list.component.scss']
})
export class MenuItemListComponent {
  @Input() data: any = [];
  @Output() closeMobileMenu: EventEmitter<boolean> = new EventEmitter();

  closeMenu() {
    this.closeMobileMenu.emit(true);
  }

}
