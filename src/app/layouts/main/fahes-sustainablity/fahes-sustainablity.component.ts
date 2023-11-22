import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";

@Component({
  selector: 'app-fahes-sustainablity',
  templateUrl: './fahes-sustainablity.component.html',
  styleUrls: ['./fahes-sustainablity.component.scss']
})
export class FahesSustainablityComponent {
  bullets: any = null;
  areaOne: any = null;
  areaFour: any = null;
  events: any = null;
  carousel: any = [];
  breadCrumb: any = [
    {
      title: "BREADCRUMB.SUSTAINABILITY",
      path: "/fahes/sustainability",
    },
  ];
  lang: string = "en";
  isLoadingEnabled: boolean = true;
  isSliderLoadingEnabled: boolean = true;
  data: any = null;
  dataDetails: any = null;
  news: any = null;
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
    this.getNews();
    this.getBullets();
    this.getEvents();

  }

  getData() {
    this.isSliderLoadingEnabled = true;
    this.multimediaService
      .getFahesSustainabilty("")
      .subscribe((response) => {
        this.data = {
          title: {
            en: response.titleEN,
            ar: response.titleAR
          },
          description: {
            en: response.descriptionEN,
            ar: response.descriptionAR
          },
          img: response.imageID,
          keywords: []
        };
        this.areaOne = {
          title: {
            en: response.area1TitleEN,
            ar: response.area1TitleAR
          },
          description: {
            en: response.area1DescriptionEN,
            ar: response.area1DescriptionAR
          },
          btnText: {
            en: response.area1URLTitleAR,
            ar: response.area1URLTitleAR
          },
          link: {
            en: response.area1URLTextEN,
            ar: response.area1URLTextAR,
          },
          icon: response.area1URLIcon,

          keywords: []
        };
        this.areaFour = {
          title: {
            en: response.area4TitleEN,
            ar: response.area4TitleAR
          },
          description: {
            en: response.area4DescriptionEN,
            ar: response.area4DescriptionAR
          },

          keywords: []
        };
        this.updateBreadCrumb();
        this.carousel = this.data.img
          ? [
            {
              image: this.data.img,
              video: null,
              title: this.data.title,
              description: this.data.description,
              link: "",
              paddingBottom: "pb-[61px]",
            },
          ]
          : [];
        this.updateMetaData();
        this.isSliderLoadingEnabled = false;
      });
  }
  getNews() {
    this.isLoadingEnabled = true;
    this.multimediaService.getFahesSustainabiltyAreaTwo({}).subscribe((response) => {
      this.news = (response || []).map((item: any) => {
        return {
          link: item.pageURL || '',
          image: item.imageID,
          video: null,
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          paddingBottom: 'pb-[61px]',
          dates: {
            leftDate: null,
            rightDate: null
          }
        }
      });
      this.isLoadingEnabled = false;
    });
  }
  getBullets() {
    this.multimediaService.getFahesSustainabillityBullets().subscribe((response) => {
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
    this.multimediaService.getFahesSustainabillityFour({}).subscribe((response) => {
      this.events = (response || []).map((item: any) => {
        return {
          link: '/fahes/media-center/event/' + item.eventDetailsID || '',
          image: item.imageID,
          video: null,
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          paddingBottom: 'pb-[61px]',
          dates: {
            leftDate: null,
            rightDate: {
              text: 'MEDIA_CENTER.PUBLISHED',
              date: item.toDate ? new Date(item.toDate) : null
            }
          }
        }
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
