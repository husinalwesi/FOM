import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  data: any = null;
  leaderships: any = [];
  contentpages: any = [];
  bullets: any = [];
  isLoadingEnabled: boolean = true;
  secondBulletsList: any = [];
  carousel: any = [];
  lang: string = "en";
  breadCrumb: any = [
    {
      title: 'BREADCRUMB.ABOUT_US',
      path: '/about-us'
    }
  ];
  xxxx: any = [1, 2, 3];

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private sharedService: SharedService,
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.getMetaData();
  }

  getMetaData() {
    this.isLoadingEnabled = true;
    this.multimediaService.getAboutus().subscribe((response) => {
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
      this.leaderships = (response.leadershipLandingList || []).map((item: any) => {
        return {
          link: item.pageURL || '',
          image: this.sharedService.isValidImage(item?.productionAreaImageID) || this.sharedService.isValidImage(item?.imageID) || this.sharedService.isValidImage(item?.mobileImageID),
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
      this.contentpages = (response.contentPagesList || []).map((item: any) => {
        return {
          link: item.pageURL || '',
          image: this.sharedService.isValidImage(item?.productionAreaImageId) || this.sharedService.isValidImage(item?.imageId) || this.sharedService.isValidImage(item?.mobileImageId),
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
      this.secondBulletsList = (response.secondBulletsList || []).map((item: any) => {
        return {
          img: item.iconID,
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          desc: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
        }
      });
      this.bullets = (response.bulletsList || []).map((item: any) => {
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
      this.isLoadingEnabled = false;
      this.updateBreadCrumb();
      this.updateMetaData();
    });
  }
  updateBreadCrumb() {
    this.breadCrumb[0].title = this.data.title[this.lang];
  }
  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "About us | Woqod",
      description: this.data.description[this.lang] || "About us | Woqod",
      keywords: this.data.keywords || ["Woqod", "About us"],
      img: this.data.image
    });
  }

}
