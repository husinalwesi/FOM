import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-related-news',
  templateUrl: './related-news.component.html',
  styleUrls: ['./related-news.component.scss']
})
export class RelatedNewsComponent {
  @Input() cards: any;
  @Input() lang: string = 'en';
  @Input() title: string = 'MEDIA_CENTER.RELATED_NEWS';
}
