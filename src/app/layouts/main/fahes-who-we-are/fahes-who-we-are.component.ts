import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";

@Component({
  selector: "app-fahes-who-we-are",
  templateUrl: "./fahes-who-we-are.component.html",
  styleUrls: ["./fahes-who-we-are.component.scss"],
})
export class FahesWhoWeAreComponent {
  lang: string = "en";
  data: any = null;
  breadCrumb: any = [
    {
      title: "BREADCRUMB.FAHES_WHO_WE_ARE",
      path: "/fahes-who-we-are",
    },
  ];

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.multimediaService
      .getFahesWhoWeAre("fahes/fahes-who-we-are")
      .subscribe((response) => {
        this.data = {
          title: {
            en: response.titleEN,
            ar: response.titleAR,
          },
          description: {
            en: response.descriptionEN,
            ar: response.descriptionAR,
          },
          body: {
            en: response.bodyEN,
            ar: response.bodyAR,
          },
          img: response.imageID,
          keywords: [],
        };
        this.updateBreadCrumb();
        this.updateMetaData();
      });
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "who we are | Woqod",
      description: this.data.description[this.lang] || "who we are | Woqod",
      keywords: this.data.keywords || ["Woqod", "who we are"],
      img: this.data.img
    });
  }
  updateBreadCrumb() {
    this.breadCrumb[0].title = this.data.title[this.lang];
  }
}
