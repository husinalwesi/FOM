import { Component, Input } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-fahes-tabs-media-center",
  templateUrl: "./fahes-tabs-media-center.component.html",
  styleUrls: ["./fahes-tabs-media-center.component.scss"],
})
export class FahesTabsMediaCenterComponent {
  @Input() selectedTab: string = "";
  data: any = [
    {
      title: "FAHES_MEDIA_CENTER.NEWS",
      link: "/fahes/media-center/news-and-announcements",
      key: "news-and-announcements",
    },
    {
      title: "FAHES_MEDIA_CENTER.MULTIMEDIA",
      link: "/fahes/media-center/multimedia",
      key: "multimedia",
    },
    {
      title: "FAHES_MEDIA_CENTER.EVENTS",
      link: "/fahes/media-center/events",
      key: "events",
    },
  ];

  constructor(private location: Location) {}

  isActive(link: string) {
    const path = this.location.path();
    if (
      link.indexOf("/fahes/media-center/multimedia") !== -1 &&
      path.indexOf("/fahes/media-center/multimedia") !== -1
    )
      return true;
    if (
      link.indexOf("/fahes/media-center/events") !== -1 &&
      path.indexOf("/fahes/media-center/events") !== -1
    )
      return true;

    if (
      link === "/fahes/media-center/news-and-announcements" &&
      (path === "/en/fahes/media-center/news-and-announcements" ||
        path === "/ar/fahes/media-center/news-and-announcements")
    )
      return true;

    return false;
  }
}
