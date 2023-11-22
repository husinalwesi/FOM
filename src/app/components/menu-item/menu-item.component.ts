import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ResizeService } from 'src/app/services/resize.service';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe'
import { PlaceholderImgService } from 'src/app/services/placeholder-img.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() pageType: string = '';
  @Input() isStickyEnabled: boolean = false;
  promotionItem: any = {
    date: new Date(),
    img: '',
    title: 'Toyo Tires - Special Offer',
    desc: 'Buy 4 TOYO TIRES and get a free gift on',
    link: ''
  };
  @Input() data: any;
  @Input() id: string = "";
  leftPosition: Number = 0;
  isHoverEnabled: boolean = false;
  @Output() closeMobileMenu: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private resizeService: ResizeService,
    private router: Router,
    private routeLocalizationPipe: RouteLocalizationPipe,
    private placeholderImgService: PlaceholderImgService
  ) { }

  ngOnInit(): void { }

  menuItemClick(event: any) {
    if (!this.resizeService.isDesktop()) {
      this.isHoverEnabled = !this.isHoverEnabled;
      this.leftPosition = 0;
    }
  }

  mouseenter(event: any) {
    event.stopPropagation();
    if (this.resizeService.isDesktop()) {
      this.isHoverEnabled = true;
      this.toggleItemMenu(event);
    }
  }

  mouseleave(event: any) {
    event.stopPropagation();
    if (this.resizeService.isDesktop()) {
      this.isHoverEnabled = false;
      this.pauseVideo();
    }
  }

  pauseVideo() {
    if (typeof window !== 'undefined') {
      const videoTag: any = document.querySelector(`#${this.id} video`);
      if (videoTag) videoTag.pause();
    }
  }

  toggleItemMenu({ target }: any) {
    if (typeof window !== 'undefined') {
      setTimeout(() => {

        const menusWithTitle: any = document.querySelectorAll(`.menu-with-title`);
        menusWithTitle.forEach((menuWithTitle: any) => {
          menuWithTitle.style.width = `max-content`;
          menuWithTitle.style.width = `${menuWithTitle.offsetWidth + 27}px`;
        });

        const itemMenuContainer: any = document.querySelector(`#main-menu #${this.id}`);
        const screenWidth = this.resizeService.getWindowWidth();
        const padding = screenWidth > 1280 ? 97 : 16;
        if (itemMenuContainer) {
          const mainMenuItemOffsetLeft = target.parentElement.offsetLeft;
          const subMenuWidth = itemMenuContainer.offsetWidth;
          const subMenuHalfWidth = subMenuWidth / 2;
          if (mainMenuItemOffsetLeft - subMenuHalfWidth < 0) {
            this.leftPosition = -(mainMenuItemOffsetLeft - padding);
          } else if (mainMenuItemOffsetLeft + subMenuHalfWidth > screenWidth) {
            this.leftPosition = -(subMenuWidth - (screenWidth - mainMenuItemOffsetLeft) + padding);
          } else {
            if (mainMenuItemOffsetLeft - subMenuHalfWidth < padding) {
              this.leftPosition = -(subMenuHalfWidth - (mainMenuItemOffsetLeft - subMenuHalfWidth));
            } else {
              const restAtRight = screenWidth - (mainMenuItemOffsetLeft - subMenuHalfWidth + subMenuWidth);
              const diff = restAtRight < padding ? padding - restAtRight : 0;
              this.leftPosition = -(subMenuHalfWidth + diff);
            }
          }
        }
      });
    }
  }

  clickMenuItem(event: any, data: any) {
    if (!data?.subMenu) {
      this.closeMenu();
      this.router.navigate([this.routeLocalizationPipe.transform(data?.link)]);
    }
  }

  closeMenu() {
    this.isHoverEnabled = false;
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
