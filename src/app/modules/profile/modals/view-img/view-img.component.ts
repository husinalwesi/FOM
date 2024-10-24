import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-img',
  templateUrl: './view-img.component.html',
  styleUrls: ['./view-img.component.scss']
})
export class ViewImgComponent {
  @Input() isModalEnabled: boolean = false;
}
