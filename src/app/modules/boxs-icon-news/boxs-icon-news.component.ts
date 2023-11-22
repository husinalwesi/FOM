import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boxs-icon-news',
  templateUrl: './boxs-icon-news.component.html',
  styleUrls: ['./boxs-icon-news.component.scss']
})
export class BoxsIconNewsComponent {
  @Input() selectedTab: string = "";
  tabs: ITab[] = [
    {
      title: 'MEDIA_CENTER.NEWS_AND_ANNOUNCMENTS',
      key: 'news-and-announcements',
      link: '/media-center/news-and-announcements',
      icon: 'assets/svgs/world.svg'
    },
    {
      title: 'MEDIA_CENTER.MULTIMEDIA',
      key: 'multimedia',
      link: '/media-center/multimedia',
      icon: 'assets/svgs/world.svg'
    },
    {
      title: 'MEDIA_CENTER.EVENTS',
      key: 'events',
      link: '/media-center/events',
      icon: 'assets/svgs/world.svg'
    }
  ];

  constructor() { }

}

export interface ITab {
  title: string,
  key: string,
  link: string,
  icon: string
};