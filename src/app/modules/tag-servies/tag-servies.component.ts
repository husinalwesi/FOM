import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-servies',
  templateUrl: './tag-servies.component.html',
  styleUrls: ['./tag-servies.component.scss']
})
export class TagServiesComponent {
  @Input() lang: string = "en";
  @Input() data: any;
}
