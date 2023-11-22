import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-files',
  templateUrl: './item-files.component.html',
  styleUrls: ['./item-files.component.scss']
})
export class ItemFilesComponent {
  @Input() items: any;
  @Input() lang: string = 'en';
}
