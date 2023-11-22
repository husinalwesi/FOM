import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent {
  @Input() keyword: string = "";
  @Input() mediaType: string = "";
}
