import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { TranslationService } from "src/app/i18n/translation.service";

@Component({
  selector: "app-erm",
  templateUrl: "./erm.component.html",
  styleUrls: ["./erm.component.scss"],
})
export class ErmComponent {
  data: any = null;
  firstThreeItems: any = [];
  nextThreeItems: any = [];
  teamMembers: any = [];
  leaderships: any = [];
  contentpages: any = [];
  bullets: any = [];
  isLoadingEnabled: boolean = true;
  secondBulletsList: any = [];
  carousel: any = [];
  lang: string = "en";
  breadCrumb: any = [
    {
      title: "BREADCRUMB.ERM",
      path: "/erm",
    },
  ];
  xxxx: any = [1, 2, 3];

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
    this.getMetaData();
    this.getTeamMembers();
    // this.getBullets();
  }
  getMetaData() {
    this.isLoadingEnabled = true;
    this.multimediaService.getErmData().subscribe((response) => {
      this.data = {
        title: {
          en: response.titleEN,
          ar: response.titleAR
        },
        description: {
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
        image: response.imageID,
        mobileImage: response.mobileImageID,
        areaOneTitle: {
          en: response.area1TitleEN,
          ar: response.area1TitleAR
        },
        areaOneDescription: {
          en: response.area1DescriptionEN,
          ar: response.area1DescriptionAR
        },
        link: response.area1URL,
        areaTwoTitle: {
          en: response.area2TitleEN,
          ar: response.area2TitleAR
        },
        areaThreeTitle: {
          en: response.area3TitleEN,
          ar: response.area3TitleAR
        },
        areaThreeDescription: {
          en: response.area3DescriptionEN,
          ar: response.area3DescriptionAR
        },
        linkArea3: response.area3URL,
        areaFiveTitle: {
          en: response.area5TitleEN,
          ar: response.area5TitleAR
        },
        areaFiveDescription: {
          en: response.area5DescriptionEN,
          ar: response.area5DescriptionAR
        },
        linkArea5: response.area5URL,
        areaSexTitle: {
          en: response.area6TitleEN,
          ar: response.area6TitleAR
        },
        areaSexContent: {
          en: response.area6ContnetBoxEN,
          ar: response.area6ContnetBoxAR
        },
        area7Title: {
          en: response.area7TitleEN,
          ar: response.area7TitleAR,
        },
        area7Content: {
          en: response.area7ContnetBoxEN,
          ar: response.area7ContnetBoxAR,
        },
        keywords: []
      };
      this.carousel = [
        {
          image: response.imageID,
          mobileImage: response.mobileImageID,
          video: null,
          title: {
            en: response.titleEN,
            ar: response.titleAR
          },
          description: {
            en: response.descriptionEN,
            ar: response.descriptionAR
          },
          link: "",
          paddingBottom: 'pb-[61px]',
        }
      ];

      this.contentpages = (response.relatedContnet || []).map((item: any) => {
        return {
          link: item.pageURL || '',
          image: item.productionAreaImageID,
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          category: null,
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          dates: {
            leftDate: null,
            rightDate: null
          }
        }

      });
      // this.firstThreeItems = this.contentpages.slice(0);
      // this.nextThreeItems = this.contentpages;

      this.bullets = (response.relatedBullets || []).map((item: any) => {
        return {
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
        }
      });
      this.updateBreadCrumb();
      this.updateMetaData();
      this.isLoadingEnabled = false;
    });
  }
  getTeamMembers() {
    this.multimediaService.getTeamMembersErm().subscribe((response) => {
      this.teamMembers = (response || []).map((item: any) => {
        return {
          title: {
            en: item.nameEN,
            ar: item.nameAR
          },
          desc: {
            en: item.positionEN,
            ar: item.positionAR
          },
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          img: item.imageID,
        }
      });
    });
  }

  updateBreadCrumb() {
    this.breadCrumb[0].title = this.data.title[this.lang];
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "ERM | Woqod",
      description: this.data.description[this.lang] || "ERM | Woqod",
      keywords: this.data.keywords || ["ERM", "Woqod"],
      img: this.data.image
    });
  }
}
