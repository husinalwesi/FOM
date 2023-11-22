import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { SharedService } from "src/app/services/shared.service";

@Component({
  selector: "app-buisness-continuity-mangment",
  templateUrl: "./buisness-continuity-mangment.component.html",
  styleUrls: ["./buisness-continuity-mangment.component.scss"],
})
export class BuisnessContinuityMangmentComponent {
  bullets: any = null;
  areaOne: any = null;
  areaFour: any = null;
  events: any = null;
  carousel: any = [];
  breadCrumb: any = [
    {
      title: "BREADCRUMB.FAHES_CONTACT_US",
      path: "/fahes/contact-us",
    },
  ];
  lang: string = "en";
  isLoadingEnabled: boolean = true;
  isCarouselLoadingEnabled: boolean = true;
  data: any = null;
  dataDetails: any = null;
  news: any = null;
  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private sharedService: SharedService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit(): void {
    this.getData();
    this.getNews();
    this.getBullets();
    this.getEvents();
  }

  getData() {
    this.isCarouselLoadingEnabled = true;
    this.multimediaService.getDataBCM("").subscribe((response) => {
      this.data = {
        title: {
          en: response.titleEN,
          ar: response.titleAR,
        },
        description: {
          en: response.descriptionEN,
          ar: response.descriptionAR,
        },
        img: response.imageID,
        mobileImage: response.mobileImageID,
        keywords: [],
      };
      this.areaOne = {
        title: {
          en: response.areaOneTitleEN,
          ar: response.areaOneTitleAR,
        },
        description: {
          en: response.areaOneDescriptionEN,
          ar: response.areaOneDescriptionAR,
        },
        btnText: {
          en: response.areaOneURLTextEN,
          ar: response.areaOneURLTextAR,
        },
        link: response.areaOneURL,
        icon: response.areaOneURLIcon,

        keywords: [],
      };
      this.areaFour = {
        title: {
          en: response.areaFourTitleEN,
          ar: response.areaFourTitleAR,
        },
        description: {
          en: response.areaFourDescriptionEN,
          ar: response.areaFourDescriptionAR,
        },

        keywords: [],
      };
      this.updateBreadCrumb();
      this.carousel = this.sharedService.isValidImage(this.data.img) || this.sharedService.isValidImage(this.data.mobileImage) ? [
        {
          image: this.data.img,
          mobileImage: this.data.mobileImage,
          video: null,
          title: this.data.title,
          description: this.data.description,
          link: "",
          paddingBottom: "pb-[61px]",
        },
      ]
        : [];
      this.updateMetaData();
      this.isCarouselLoadingEnabled = false;
    });
  }
  getNews() {
    this.isLoadingEnabled = true;
    this.multimediaService.getContentPageBCM({}).subscribe((response) => {
      this.news = (response || []).map((item: any) => {
        return {
          link: item.pageURL || "",
          image: this.sharedService.isValidImage(item?.productionAreaImageId) || this.sharedService.isValidImage(item?.imageId) || this.sharedService.isValidImage(item?.mobileImageId),
          video: null,
          title: {
            en: item.titleEN,
            ar: item.titleAR,
          },
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR,
          },
          paddingBottom: "pb-[61px]",
          dates: {
            leftDate: null,
            rightDate: null,
          },
        };
      });
      this.isLoadingEnabled = false;
    });
  }
  getBullets() {
    this.multimediaService.getBulletsBCM().subscribe((response) => {
      this.bullets = response.map((item: any) => ({
        subTitle: {
          en: item.titleEN,
          ar: item.titleAR,
        },
        description: {
          en: item.descriptionEN,
          ar: item.descriptionAR,
        },
        svg: item.iconID,
        keywords: [],
      }));
    });
  }
  getEvents() {
    this.isLoadingEnabled = true;
    this.multimediaService.getEventsBCM({}).subscribe((response) => {
      this.events = (response || []).map((item: any) => {
        return {
          link: item.pageURL || "",
          image: this.sharedService.isValidImage(item?.productionAreaImageID) || this.sharedService.isValidImage(item?.imageID) || this.sharedService.isValidImage(item?.mobileImageID),
          video: null,
          title: {
            en: item.titleEN,
            ar: item.titleAR,
          },
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR,
          },
          paddingBottom: "pb-[61px]",
          dates: {
            leftDate: null,
            rightDate: {
              text: "MEDIA_CENTER.PUBLISHED",
              date: item.toDate ? new Date(item.toDate) : null,
            },
          },
        };
      });
      this.isLoadingEnabled = false;
    });
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Contact Us | Woqod",
      description: this.data.description[this.lang] || "Contact Us | Woqod",
      keywords: this.data.keywords || ["Woqod", "Contact Us"],
      img: this.data.img
    });
  }

  updateBreadCrumb() {
    this.breadCrumb[0].title = this.data.title[this.lang];
  }
}
