import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";

@Component({
  selector: "app-fahes-about-us",
  templateUrl: "./fahes-about-us.component.html",
  styleUrls: ["./fahes-about-us.component.scss"],
})
export class FahesAboutUsComponent {
  backgroundImageUrl: string = "assets/images/png/bg-about.webp";
  backgroundImagePath: string = "assets/svgs/wave-bg.svg";
  item: any = [];
  carousel: any = [];
  breadCrumb: any = [
    {
      title: "BREADCRUMB.FAHES_ABOUT_US",
      path: "/fahes/fahes-about-us",
    },
  ];
  lang: string = "en";
  isLoadingEnabled: boolean = true;
  isSliderLoadingEnabled: boolean = true;
  data: any = null;
  bullets: any = null;
  areaOne: any = null;
  areaTwo: any = null;
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
    this.getBullets();
  }

  getData() {
    this.isSliderLoadingEnabled = true;
    this.multimediaService
      .getFahesAboutUs("fahes/fahes-about-us")
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
          img: response.imageID,
          areaThreeTitle: {
            en: response.area3TitleEN,
            ar: response.area3TitleAR,
          },
          areaThreeDescription: {
            en: response.area3DescriptionEN,
            ar: response.area3DescriptionAR,
          },
          keywords: [],
        };
        this.areaOne = {
          areaOneImage: response.area1Image,
          areaOneTitle: {
            en: response.area1TitleEN,
            ar: response.area1TitleAR,
          },
          areaOneHeading: {
            en: response.area1HeadingEN,
            ar: response.area1HeadingAR,
          },
          areaOneDescription: {
            en: response.area1DescriptionEN,
            ar: response.area1DescriptionAR,
          },
          areaOneLink: response.area1URL,
        };
        this.areaTwo = {
          areaOneImage: response.area2Image,
          areaOneTitle: {
            en: response.area2TitleEN,
            ar: response.area2TitleAR,
          },
          areaOneHeading: {
            en: response.area2HeadingEN,
            ar: response.area2HeadingAR,
          },
          areaOneDescription: {
            en: response.area2DescriptionEN,
            ar: response.area2DescriptionAR,
          },
          areaOneLink: response.area2URL,
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
  getBullets() {
    this.isLoadingEnabled = true;
    this.multimediaService
      .getFahesAboutUsBullets("fahes/fahes-about-us")
      .subscribe((response) => {
        this.bullets = response.map((item: any) => ({
          title: {
            en: item.titleEN,
            ar: item.titleAR,
          },
          desc: {
            en: item.descriptionEN,
            ar: item.descriptionAR,
          },
          svg: item.iconID,
          keywords: [],

        }));

        this.isLoadingEnabled = false;
      });
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Company Profile | Woqod",
      description:
        this.data.description[this.lang] || "Company Profile | Woqod",
      keywords: this.data.keywords || ["Woqod", "Company Profile"],
      img: this.data.img
    });
  }

  updateBreadCrumb() {
    this.breadCrumb[0].title = this.data.title[this.lang];
  }
}
