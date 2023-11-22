import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";

@Component({
  selector: "app-fahes-what-we-do",
  templateUrl: "./fahes-what-we-do.component.html",
  styleUrls: ["./fahes-what-we-do.component.scss"],
})
export class FahesWhatWeDoComponent {
  lang: string = "en";
  data: any = null;
  breadCrumb: any = [
    {
      title: "BREADCRUMB.WHAT_WE_DO",
      path: "/fahes-what-we-do",
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
      .getFahesWhatWeDo("fahes/fahes-what-we-do")
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
      title: this.data.title[this.lang] || "what we do | Woqod",
      description: this.data.description[this.lang] || "what we do | Woqod",
      keywords: this.data.keywords || ["Woqod", "what we do"],
      img: this.data.img
    });
  }
  updateBreadCrumb() {
    this.breadCrumb[0].title = this.data.title[this.lang];
  }
}
