import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-with-image',
  templateUrl: './list-with-image.component.html',
  styleUrls: ['./list-with-image.component.scss']
})
export class ListWithImageComponent {
  @Input() count: number = 3;
}
