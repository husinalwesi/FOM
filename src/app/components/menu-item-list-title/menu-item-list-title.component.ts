import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item-list-title',
  templateUrl: './menu-item-list-title.component.html',
  styleUrls: ['./menu-item-list-title.component.scss']
})
export class MenuItemListTitleComponent {
  @Input() title: string = "";
  @Input() link: string = "";
  @Input() linkTarget: string = "";
  @Input() menu: any = [];
  @Output() closeMobileMenu: EventEmitter<boolean> = new EventEmitter();

  closeMenu() {
    this.closeMobileMenu.emit(true);
  }

  isExternalMethod(link: string) {
    if (!link) return false;
    if (
      link.startsWith('//') ||
      link.startsWith('http://') ||
      link.startsWith('https://') ||
      link.startsWith('www.')
    ) {
      return true;
    }
    return false;
  }

}
