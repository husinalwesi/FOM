import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { SharedService } from 'src/app/services/shared.service';
import { ResizeService } from 'src/app/services/resize.service';

@Component({
  selector: 'app-sustainability',
  templateUrl: './sustainability.component.html',
  styleUrls: ['./sustainability.component.scss']
})
export class SustainabilityComponent {
  carousel: any = [];
  breadCrumb: any = [
    {
      title: 'BREADCRUMB.SUSTAINABILITY',
      path: '/sustainability'
    }
  ];
  lang: string = "en";
  isLoadingEnabled: boolean = true;
  isSliderLoadingEnabled: boolean = true;
  data: any = null;
  areaOne: any = null;
  areaFour: any = null;
  bullets: any = null;
  bulletsTitle: any = null;

  events: any = [];
  news: any = [];

  careers: any = {
    pagination: {
      pageSize: 7,
      pageIndex: 1,
      totalCount: 100//make it 0
    },
    data: Array.from({ length: 7 }, () => (
      {
        title: {
          en: 'Main title',
          ar: 'Main title'
        },
        description: {
          en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus turpis risus,',
          ar: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus turpis risus,'
        },
        location: 'Location',
        jobType: 'Full time',
        date: new Date()
      }
    ))
  };

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
  }


  getData() {
    this.getMetaData();
    this.getEvents();
    this.getBullets();
    this.getNews();
  }

  getMetaData() {
    this.isSliderLoadingEnabled = true;
    this.multimediaService.getSustainabillityLanding().subscribe((response) => {
      this.data = {
        title: {
          en: response.titleEN,
          ar: response.titleAR
        },
        description: {
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
        // img: '45900ba0-7ec6-4b02-89b1-dd25dee3dd8a',
        // mobileImageID: '4e58e886-072d-4b80-8b8d-0fc981fc0a91',
        img: response.imageID,
        mobileImageID: response.mobileImageID,
        productionAreaImageID: response.productionAreaImageID,
        keywords: []
      };
      this.areaOne = {
        title: {
          en: response.areaOneTitleEN,
          ar: response.areaOneTitleAR
        },
        description: {
          en: response.areaOneDescriptionEN,
          ar: response.areaOneDescriptionAR
        },
        btnText: {
          en: response.areaOneURLTitleEN,
          ar: response.areaOneURLTitleAR
        },
        link: {
          en: response.areaOneURLTextEN,
          ar: response.areaOneURLTextAR
        },
        icon: response.areaOneURLIcon,

        keywords: []
      };
      this.areaFour = {
        title: {
          en: response.areaFourTitleEN,
          ar: response.areaFourTitleAR
        },
        description: {
          en: response.areaFourDescriptionEN,
          ar: response.areaFourDescriptionAR
        },

        keywords: []
      };

      this.carousel = this.sharedService.isValidImage(this.data.img) || this.sharedService.isValidImage(this.data.mobileImageID) ? [
        {
          image: this.data.img,
          mobileImage: this.data.mobileImageID,
          video: null,
          title: this.data.title,
          description: this.data.description,
          link: "",
          paddingBottom: 'pb-[61px]',
        }
      ] : [];
      this.updateBreadCrumb();
      this.updateMetaData();
      this.isSliderLoadingEnabled = false;
    });
  }
  getNews() {
    this.isLoadingEnabled = true;
    this.multimediaService.getSustainabilityNews({}).subscribe((response) => {
      this.news = (response || []).map((item: any) => {
        return {
          link: item.pageURL || '',
          image: this.sharedService.isValidImage(item?.productionAreaImageId) || this.sharedService.isValidImage(item?.imageId) || this.sharedService.isValidImage(item?.mobileImageId),
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
    this.multimediaService.getSustainabillityBullets().subscribe((response) => {
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

  updateBreadCrumb() {
    this.breadCrumb[0].title = this.data.title[this.lang];
  }

  getEvents() {
    this.isLoadingEnabled = true;
    this.multimediaService.getSustainabilityEvents({}).subscribe((response) => {
      this.events = (response || []).map((item: any) => {
        return {
          link: item.pageURL || '',
          image: this.sharedService.isValidImage(item?.productionAreaImageId) || this.sharedService.isValidImage(item?.imageId) || this.sharedService.isValidImage(item?.mobileImageId),
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          category: {
            en: item.categoryNameEN,
            ar: item.categoryNameAR
          },
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          location: item.location,
          dates: {
            leftDate: {
              text: 'MEDIA_CENTER.START_DATE',
              date: item.fromDate ? new Date(item.fromDate) : null
            },
            rightDate: {
              text: 'MEDIA_CENTER.END_DATE',
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
      title: this.data.title[this.lang] || "Sustainability | Woqod",
      description: this.data.description[this.lang] || "Sustainability | Woqod",
      keywords: this.data.keywords || ["Woqod", "Sustainability"],
      img: this.data.img
    });
  }

  changePage(pageNo: number) {
    this.careers.pagination.pageIndex = pageNo;
    // this.getCareersList();
  }

}
