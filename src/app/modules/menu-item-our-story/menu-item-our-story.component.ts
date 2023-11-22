import { Component, Input } from '@angular/core';
import { GUID } from "src/app/const/guid";
@Component({
  selector: 'app-menu-item-our-story',
  templateUrl: './menu-item-our-story.component.html',
  styleUrls: ['./menu-item-our-story.component.scss']
})
export class MenuItemOurStoryComponent {
  @Input() data: any;
  EmptyImage:any = GUID.empty;
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
