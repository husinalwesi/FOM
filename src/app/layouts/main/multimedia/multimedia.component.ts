import { Component } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { TranslationService } from "src/app/i18n/translation.service";

@Component({
  selector: "app-multimedia",
  templateUrl: "./multimedia.component.html",
  styleUrls: ["./multimedia.component.scss"],
})
export class MultimediaComponent {
  selectedTab: string = "";
  mediaType: string = "";
  keyword: string = "";
  tabsData: string = "";

  lang: string = "en";
  isLoadingEnabled: boolean = true;
  data: any = null;
  filterrData: any = null;
  teamMembers: any = [];
  constructor(
    private translate: TranslateService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit() {
    this.setKeywordByURL();
    this.getData();
    this.enablingSelectedTabLogic();

  }
  getData() {
    this.multimediaService.getMultimediaLanding("").subscribe((response) => {
      this.filterrData = [
        {
          title: "MEDIA_TYPES.VIDEOS",
          desc: {
            en: response.videoTabTextEN,
            ar: response.videoTabTextAR,
          },
          svg: response.videoTabIconID,
          link: "/media-center/multimedia/videos",
        },
        {
          title: "MEDIA_TYPES.GALLERIES",
          desc: {
            en: response.galleryTabTextEN,
            ar: response.galleryTabTextAR,
          },
          svg: response.galleryTabIconID,
          link: "/media-center/multimedia/galleries",
        },
        {
          title: "MEDIA_TYPES.IMAGES",
          desc: {
            en: response.imagesTabTextEN,
            ar: response.imagesTabTextAR,
          },
          svg: response.imagesTabIconID,
          link: "/media-center/multimedia/images",
        },
      ];
    });
  }

  filterSubmit(data: any) {
    this.mediaType = data.mediaType;
    this.keyword = data.keyword;
  }

  enablingSelectedTabLogic() {
    this.setSelectedTab(this.router.url);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const path = event?.urlAfterRedirects;
        this.setSelectedTab(path);
        this.setKeywordByURL();
      }
    });
  }

  setKeywordByURL() {
    this.keyword = this.route.snapshot.queryParams?.q;
  }

  setSelectedTab(path: string) {
    // Split the path by "/"
    const pathSegments = path.split("/");

    // Check if there are at least 5 segments
    if (pathSegments.length >= 5) {
      // Get the 5th segment
      const segmentWithQuery = pathSegments[4];

      // Split the segment by "?" to get the tab name
      const tabAndQuery = segmentWithQuery.split("?");
      const tab = tabAndQuery[0];

      // Assign the tab name to this.selectedTab
      this.selectedTab = tab;
    }

    // this.selectedTab = path.split("/")[4].split("?")[0];
  }
}
