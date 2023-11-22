import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-links-files',
  templateUrl: './links-files.component.html',
  styleUrls: ['./links-files.component.scss']
})
export class LinksFilesComponent {
  @Input() data: any;
  @Input() lang: string = 'en'
  @Input() linksType: string = 'links' // links or pdf
}
