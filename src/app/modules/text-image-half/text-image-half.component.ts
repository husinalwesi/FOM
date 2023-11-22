import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-image-half',
  templateUrl: './text-image-half.component.html',
  styleUrls: ['./text-image-half.component.scss']
})
export class TextImageHalfComponent {
  @Input() lang: string = "en";
  @Input() data: any;
  @Input() rtl: boolean = false;
}
