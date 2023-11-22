import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-product-and-service',
  templateUrl: './product-and-service.component.html',
  styleUrls: ['./product-and-service.component.scss']
})
export class ProductAndServiceComponent {
  lang: string = "en";
  isBrowser: boolean = false;
  isLoadingEnabled: boolean = true;
  isSliderLoadingEnabled: boolean = true;
  data: any = null;
  carousel: any = [];
  selectedTab: string = "products";//individual//corporate
  prices: any = [];
  woqoodApp: any = [];
  priceSectionMainData: any = {}
  statistics: any = [];
  products: any = [];
  services: any = [
    {
      icon: 'assets/svgs/station-product.svg',
      title: 'PRODUCT_AND_SERVICE.WOQODE',
      desc: 'PRODUCT_AND_SERVICE.READ_MORE',
      link: '/woqode-tag'
    },
    {
      icon: 'assets/svgs/station-product.svg',
      title: 'PRODUCT_AND_SERVICE.FUEL',
      desc: 'PRODUCT_AND_SERVICE.READ_MORE',
      link: '/retail'
    },
    {
      icon: 'assets/svgs/station-product.svg',
      title: 'PRODUCT_AND_SERVICE.WAQOD',
      desc: 'PRODUCT_AND_SERVICE.READ_MORE',
      link: '/auto-care-service'
    },
    {
      icon: 'assets/svgs/station-product.svg',
      title: 'PRODUCT_AND_SERVICE.KINAR',
      desc: 'PRODUCT_AND_SERVICE.READ_MORE',
      link: '/kenar-shop'
    },
    {
      icon: 'assets/svgs/station-product.svg',
      title: 'PRODUCT_AND_SERVICE.SIDRA',
      desc: 'PRODUCT_AND_SERVICE.READ_MORE',
      link: '/sidra'
    },
    {
      icon: 'assets/svgs/station-product.svg',
      title: 'PRODUCT_AND_SERVICE.SHAFAF',
      desc: 'PRODUCT_AND_SERVICE.READ_MORE',
      link: '/shafaf'
    },
  ]
  promotions: any = [];
  areaTwo = {
    areaOneImage: '',
    areaOneTitle: {
      en: 'Kenar Shop',
      ar: 'Kenar shop AR',
    },
    areaOneHeading: {
      en: 'heading',
      ar: 'response.area2HeadingAR',
    },
    areaOneDescription: {
      en: 'response.area2DescriptionEN',
      ar: 'response.area2DescriptionAR',
    },
    areaOneLink: 'response.area2URL',
  };
  details1: any = {}
  details2: any = {}
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
    this.getMetaData();
    this.getProductList();
    this.getPromotions();
    this.getPrices();
    this.getHomePageApp();
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
    this.multimediaService.getDataProductandSerive().subscribe((response) => {
      this.getSlider();
      this.data = {
        title: {
          en: response.titleEN,
          ar: response.titleAR
        },
        description: {
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
      };
      this.details1 = {
        title: {
          en: response.businessWoqodTitleEN,
          ar: response.businessWoqodTitleAR,
        },
        subtitle: {
          en: response.businessWoqodTitleEN,
          ar: response.businessWoqodTitleAR,
        },
        description: {
          en: response.businessWoqodBodyEN,
          ar: response.businessWoqodBodyAR,
        },
        image: response.businessWoqodImage,
        btnText: {
          en: response.businessWoqodURLEN,
          ar: response.businessWoqodURLAR,
        },
        link: response.businessWoqodURL
      }
      this.details2 = {

        subtitle: {
          en: response.area4TitleEN,
          ar: response.area4TitleAR,
        },
        description: {
          en: response.area4TextEN,
          ar: response.area4TextAR,
        },
        image: response.area4Image,
        btnText: {
          en: response.area4BtnTextEN,
          ar: response.area4BtnTextAR,
        },
        link: response.area4BtnURL
      }

      this.statistics = [
        {
          icon: response.area3Counter1Icon,
          number: response.area3Counter1Value,
          text: {
            en: response.area3Counter1TextEN,
            ar: response.area3Counter1TextAR,
          }
        },
        {
          icon: response.area3Counter2Icon,
          number: response.area3Counter2Value,
          text: {
            en: response.area3Counter2TextEN,
            ar: response.area3Counter2TextAR,
          }
        },
        {
          icon: response.area3Counter3Icon,
          number: response.area3Counter3Value,
          text: {
            en: response.area3Counter3TextEN,
            ar: response.area3Counter3TextAR,
          }
        },
        {
          icon: response.area3Counter4Icon,
          number: response.area3Counter4Value,
          text: {
            en: response.area3Counter4TextEN,
            ar: response.area3Counter4TextAR,
          }
        },
      ];

      setTimeout(() => {
        this.animateCounters();
      });

      this.priceSectionMainData = {
        title: {
          en: response.area2TitleEN,
          ar: response.area2TitleAR,
        },
        desc: {
          en: response.area2TextEN,
          ar: response.area2TextAR,
        },
        btnText: {
          en: response.area2BtnTextEN,
          ar: response.area2BtnTextAR,
        }
      }
      this.isLoadingEnabled = false;
    });
  }

  animateCounters() {
    if (typeof window !== 'undefined') {
      const counters: any = document.querySelectorAll('.counters');
      const totalDuration = 2000; // Total duration for each iteration in milliseconds

      counters.forEach((counter: any) => {
        const countTarget = parseInt(counter.getAttribute('counttarget'));
        const increment = (countTarget / totalDuration) * 10; // Calculate increment per 10 milliseconds

        let count = 0;
        const updateCounter = () => {
          count += increment;
          if (count < countTarget) {
            counter.innerHTML = Math.round(count);
            setTimeout(updateCounter, 10); // Execute every 10 milliseconds
          } else {
            counter.innerHTML = countTarget;
          }
        };
        updateCounter();
      });
    }
  }

  getHomePageApp() {
    this.multimediaService.getHomePageWoqodApp().subscribe((response) => {
      if (Array.isArray(response) && response.length > 0) {
        this.woqoodApp = response.map((item: any) => ({
          title: {
            en: item.textEN,
            ar: item.textAR,
          },
          imgOne: item.imageOneID,
          urlOne: item.imageOneURL,
          imgTwo: item.imageTwoID,
          urlTwo: item.imageTwoURL,
          icon: item.iconID,
        }));

        // console.log(this.woqoodApp); // Log the array
      }
    });
  }
  getSlider() {
    this.isSliderLoadingEnabled = true;
    this.multimediaService
      .getSliderProductandService("")
      .subscribe((response) => {
        this.carousel = (response || []).map((item: any) => {
          return {
            image: item.imageId,
            mobileImage: item.mobileImageId,
            video: null,
            title: {
              en: item.titleEN,
              ar: item.titleAR
            },
            description: {
              en: item.descriptionEN,
              ar: item.descriptionAR
            },
            link: item.pageURL,
            // btnText: {
            //   en: 'testst',
            //   ar: 'testst'
            // },
            btnText: item?.btnTxtEN || item?.btnTxtAR ? {
              en: item.btnTxtEN,
              ar: item.btnTxtAR
            } : null,
            paddingBottom: 'pb-[81px]',
          }
        });
        this.updateMetaData();
        this.isSliderLoadingEnabled = false;
      });
  }
  isDateLessThanOrEqualToday(date: any) {
    const promotionDate = new Date(date).setHours(0, 0, 0, 0);
    const tDate = new Date().setHours(0, 0, 0, 0);
    return promotionDate >= tDate;
  }
  getPromotions() {
    this.multimediaService.getPromotionsProductandSerive().subscribe((response) => {
      this.promotions = (response || []).filter((item: any) => this.isDateLessThanOrEqualToday(item?.endDate)).map((item: any) => {
        return {
          link: item.pageURL || '',
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          date: item.endDate,
          img: {
            en: this.sharedService.isValidImage(item.productionAreaImageID) || this.sharedService.isValidImage(item.webImageEN) || this.sharedService.isValidImage(item.mobileImageEN),
            ar: this.sharedService.isValidImage(item.productionAreaImageID) || this.sharedService.isValidImage(item.webImageAR) || this.sharedService.isValidImage(item.mobileImageAR),
          }
        }
      });
    });
  }

  getProductList() {
    this.isLoadingEnabled = true;
    this.multimediaService
      .getProductListProductandSerive("")
      .subscribe((response) => {
        this.products = (response || []).map((item: any) => {
          return {
            id: item.woqodProductID,
            icon: 'assets/svgs/station-product.svg',
            title: {
              en: item.titleEN,
              ar: item.titleAR,
            },
            desc: {
              en: item.descriptionEN,
              ar: item.descriptionAR,
            },
            image: this.sharedService.isValidImage(item.productionAreaImageID) || this.sharedService.isValidImage(item.imageID) || this.sharedService.isValidImage(item.mobileImageID),
            link: item.pageURL || '',
          }

        });
        this.products.push({
          id: '',
          icon: 'assets/svgs/station-product.svg',
          title: {
            en: 'PRODUCT_AND_SERVICE.SHAFAF',
            ar: 'PRODUCT_AND_SERVICE.SHAFAF',
          },
          desc: {
            en: 'PRODUCT_AND_SERVICE.READ_MORE',
            ar: 'PRODUCT_AND_SERVICE.READ_MORE',
          },
          image: '',
          link: '/shafaf'
        });

        this.products.push({
          id: '',
          icon: 'assets/svgs/station-product.svg',
          title: {
            en: 'PRODUCT_AND_SERVICE.LUBRICANTS',
            ar: 'PRODUCT_AND_SERVICE.LUBRICANTS',
          },
          desc: {
            en: 'PRODUCT_AND_SERVICE.READ_MORE',
            ar: 'PRODUCT_AND_SERVICE.READ_MORE',
          },
          image: '',
          link: '/lubricants'
        });

        // this.updateMetaData();
        this.isLoadingEnabled = false;
      });
  }
  changeSelectedTab(tab: any) {
    this.selectedTab = tab;
  }
  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Business With Woqod | Woqod",
      description: this.data.description[this.lang] || "Business With Woqod | Woqod",
      keywords: this.data.keywords || ["Woqod", "Business With Woqod"],
      img: this.carousel[0]?.image || '',
    });
  }

}
