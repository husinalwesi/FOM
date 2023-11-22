import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-half',
  templateUrl: './text-half.component.html',
  styleUrls: ['./text-half.component.scss']
})
export class TextHalfComponent {
  @Input() lang: string = "en";
  @Input() data: any;
}
