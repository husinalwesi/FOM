import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { SharedService } from 'src/app/services/shared.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.scss']
})
export class RetailComponent {
  data: any = null;
  areaOne: any = null;
  carousel: any = [];
  content: any = null;
  priceSectionMainData: any = null;
  breadCrumb: any = [
    {
      title: "E_SERVICES_SECTION.PRODUCT_SERVICES",
      path: "/product-and-service",
    },
    {
      title: 'BREADCRUMB.RETAIL',
      path: '/retail'
    }
  ];
  lang: string = "en";
  isLoadingEnabled: boolean = true;

  prices: any = [];

  cards: any = [];
  isBrowser: boolean = false;

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private sharedService: SharedService,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit(): void {
    this.getData();
  }


  getData() {
    this.getMetaData();
    this.getPrices();
  }

  getPrices() {
    this.multimediaService.getRetailPrices().subscribe((response) => {
      this.prices = (response || []).map((item: any) => {
        return {
          unit: {
            en: item.fuelTypeEn,
            ar: item.fuelTypeAr
          },
          bzsPerLiter: item.price,
          date: item.date ? new Date(item.date) : null
        }
      });
    });
  }


  getMetaData() {
    this.isLoadingEnabled = true;
    this.multimediaService.getContentPageByIDetaData('retail').subscribe((response) => {

      this.cards = (response.productList || []).map((item: any) => {
        return {
          link: item.pageURL || '',
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          desc: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          img: this.sharedService.isValidImage(item?.productionAreaImageID) || this.sharedService.isValidImage(item?.imageID) || this.sharedService.isValidImage(item?.mobileImageID),
        }
      });

      this.data = {
        title: {
          en: response.titleEN,
          ar: response.titleAR
        },
        description: {
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
        keywords: [],
        img: response.imageID,
      };

      this.carousel = (response.imagesList || []).map((item: any) => {
        return {
          image: item.imageFileId,
          mobileImage: item.mobileImageID,
          video: null,
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          link: "",
          paddingBottom: 'pb-[61px]',
        }
      });

      if (this.carousel.length == 0) {
        this.carousel = [{
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
        }]
      }

      this.content = {
        en: response.contentBoxOneHeaderEn,
        ar: response.contentBoxOneHeaderAr,
      };
      this.areaOne = {
        title: {
          en: response.titleOneEn,
          ar: response.titleOneAr,
        },
        desc: {
          en: response.descriptionOneEn,
          ar: response.descriptionOneAr,
        },
      };
      this.priceSectionMainData = {
        title: {
          en: response.titleTwoEn,
          ar: response.titleTwoAr,
        },
        desc: {
          en: response.descriptionTwoEn,
          ar: response.descriptionTwoAr,
        },
        btnText: {
          en: 'View All Price',
          ar: 'عرض جميع الأسعار',
        }
      };
      this.updateBreadCrumb();
      this.updateMetaData();
      this.isLoadingEnabled = false;
    });
  }

  updateBreadCrumb() {
    this.breadCrumb[1].title = this.data.title[this.lang];
  }


  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Retail | Woqod",
      description: this.data.description[this.lang] || "Retail | Woqod",
      keywords: this.data.keywords || ["Woqod", "Retail"],
      img: this.data.img
    });
  }

}
