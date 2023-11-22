import { Component, Input } from '@angular/core';
import { PlaceholderImgService } from 'src/app/services/placeholder-img.service';

@Component({
  selector: 'app-list-with-image-item',
  templateUrl: './list-with-image-item.component.html',
  styleUrls: ['./list-with-image-item.component.scss']
})
export class ListWithImageItemComponent {
  @Input() textClass: string = "font-Cairo-Regular text-[15px]";
  @Input() isListEnabled: boolean = false;
  @Input() lang: string = 'en';
  @Input() data: any=null;

  image: string = this.placeholderImgService.generatePlaceholderImage(592, 306, '31343c', 'ffffff');

  constructor(
    private placeholderImgService: PlaceholderImgService
  ) {

  }
}
