import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-socail-media-icons-news',
  templateUrl: './socail-media-icons-news.component.html',
  styleUrls: ['./socail-media-icons-news.component.scss']
})
export class SocailMediaIconsNewsComponent {
  @Input() link: string = "";
  @Input() metaData: any;
}
