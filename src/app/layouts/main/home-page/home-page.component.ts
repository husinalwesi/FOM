import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { DatePipe } from '@angular/common';
import { SharedService } from "src/app/services/shared.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  isBrowser: boolean = false;
  lang: string = "en";
  servicesIcons: any = null;
  data: any = null;
  socilaMediaAccounts: any = [];
  whistleBlowingFileId: string = '';
  isLoadingEnabled: boolean = true;
  isSliderLoadingEnabled: boolean = true;
  isPromotinsLoadingEnabled: boolean = true;
  isSocialmediaLoadingEnabled: boolean = true;
  isProductsAndServicesLoadingEnabled: boolean = true;
  isFuelPricesLoadingEnabled: boolean = true;
  isNewsLoadingEnabled: boolean = true;
  isTenderLoadingEnabled: boolean = true;
  newsList: any = [];
  woqoodApp: any = [];
  promotionList: any = {
    pagination: { pageSize: 6, pageIndex: 1, totalCount: 6 },
    data: [],
  };
  slidesStore: any = [];
  currency: string = "CURRENCIES.QR";
  content: any = {
    en: '',
    ar: ''
  };
  //  = "HERO_HOME_PAGE_BOTTOM.EVERYTHING_WOQOD_DOES_INTERNALLY_OR_EXTERNALLY";
  date: Date = new Date();
  materials: any = [];
  slidesStore2: any = [];
  dateFrom: any;
  dateTo: any;
  table: any = {
    thead: [
      "TINDER.TENDER_NO",
      // "FEEDBACK.TITLE",
      "TINDER.LAST_COLLECTION_DATE",
      // "TINDER.BOND",
      // "TINDER.FEE",
      "TINDER.CATEGORY",
      "",
    ],
    tbody: [],
  };

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private datePipe: DatePipe,
    private sharedService: SharedService,
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.getHomePageSlider();
    this.getMetaData();
    this.getHomePagePromotions();
    this.getHomePageSocialmedia();
    this.getHomePageProductsAndServices();
    this.getFuelPrices();
    this.getNews();
    this.getTenders();
    this.getHomePageApp();
  }

  getMetaData() {
    this.isLoadingEnabled = true;
    this.multimediaService.getHomepage().subscribe((response) => {
      this.content = {
        en: response.priceBoxTitleEN,
        ar: response.priceBoxTitleAR
      };
      this.data = {
        title: {
          en: response.titleEN,
          ar: response.titleAR
        },
        description: {
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
        keywords: []
      };
      this.servicesIcons = {
        tab1IconID: response.tab1IconID,
        tab1Title: {
          en: response.tab1TitleEN,
          ar: response.tab1TitleAR,
        },
        tab2Title: {
          en: response.tab2TitleEN,
          ar: response.tab2TitleAR,
        },
        tab2Desription: {
          en: response.tab1DescriptionEN,
          ar: response.tab1DescriptionAR,
        },
        tab2IconID: response.tab2IconID,
        whistleBlowTitle: {
          en: response.whistleBlowTitleEN,
          ar: response.whistleBlowTitleAR,
        },
        whistleBlowIconID: response.whistleBlowIconID,
      };
      this.whistleBlowingFileId = response.whistleBlowingFileId;
      this.updateMetaData();
      this.isLoadingEnabled = false;
    });
  }

  getHomePageSlider() {
    this.isSliderLoadingEnabled = true;
    this.multimediaService.getHomePageSlider().subscribe((response) => {
      let data = (response || []).slice(0, 8).map((item: any) => {

        const enDesktopType = this.sharedService.isValidImage(item.bannerVideoEN) ? 'video' : 'image';
        const enMobileType = this.sharedService.isValidImage(item.bannerMobileVideoEN) ? 'video' : 'image';

        const arDesktopType = this.sharedService.isValidImage(item.bannerVideoAR) ? 'video' : 'image';
        const arMobileType = this.sharedService.isValidImage(item.bannerMobileVideoAR) ? 'video' : 'image';

        return {
          title: {
            en: item.bannerTitleEN,
            ar: item.bannerTitleAR
          },
          description: {
            en: item.bannerDescriptionEN,
            ar: item.bannerDescriptionAR
          },
          btnText: {
            en: item.bannerBtnTextEN,
            ar: item.bannerBtnTextAR,
          },
          link: {
            en: item.bannerBtnUrlEN || '',
            ar: item.bannerBtnUrlAR || '',
          },
          media: {
            en: {
              desktop: {
                src: enDesktopType === 'video' ? item.bannerVideoEN : item.bannerImageEN,
                type: enDesktopType
              },
              mobile: {
                src: enMobileType === 'video' ? item.bannerMobileVideoEN : item.bannerMobileImageEN,
                type: enMobileType
              },
            },
            ar: {
              desktop: {
                src: arDesktopType === 'video' ? item.bannerVideoAR : item.bannerImageAR,
                type: arDesktopType
              },
              mobile: {
                src: arMobileType === 'video' ? item.bannerMobileVideoAR : item.bannerMobileImageAR,
                type: arMobileType
              },
            }
          }
        }
      });

      this.slidesStore = data;

      this.updateMetaData();
      this.isSliderLoadingEnabled = false;
    });
  }

  getNews() {
    this.isNewsLoadingEnabled = true;
    this.multimediaService.getHomePageNews().subscribe((response) => {
      const originalArray = (response.pageItems || []).map((item: any) => {
        return {
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          description: {
            en: item?.descriptionEN,
            ar: item.descriptionAR
          },
          link: item.pageURL || '',
          date: item.modifiedOn ? new Date(item.modifiedOn) : null,
        };
      });

      // Initialize two empty arrays
      const firstArray = [];
      const secondArray = [];

      // Loop through the original array
      for (let i = 0; i < originalArray.length; i++) {
        // Check if the current index is even or odd
        if (i % 2 === 0) {
          // Even index, push to the first array
          firstArray.push(originalArray[i]);
        } else {
          // Odd index, push to the second array
          secondArray.push(originalArray[i]);
        }
      }

      // Slice the arrays to send only the first 6 items from each
      const slicedFirstArray = firstArray.slice(0, 3);
      const slicedSecondArray = secondArray.slice(0, 3);

      // Assign the sliced arrays to this.newsList
      // this.newsList = [slicedFirstArray, slicedSecondArray];

      let itemLeft = [];
      if (slicedFirstArray?.[0]) itemLeft.push(slicedFirstArray?.[0]);
      if (slicedSecondArray?.[0]) itemLeft.push(slicedSecondArray?.[0]);
      if (slicedFirstArray?.[1]) itemLeft.push(slicedFirstArray?.[1]);
      // 
      let itemRight = [];
      if (slicedSecondArray?.[1]) itemRight.push(slicedSecondArray?.[1]);
      if (slicedFirstArray?.[2]) itemRight.push(slicedFirstArray?.[2]);
      if (slicedSecondArray?.[2]) itemRight.push(slicedSecondArray?.[2]);

      this.newsList = [
        itemLeft,
        itemRight
      ];

      this.isNewsLoadingEnabled = false;
    });
  }

  getFuelPrices() {
    this.isFuelPricesLoadingEnabled = true;
    this.multimediaService.getRetailPrices().subscribe((response) => {
      this.date = new Date(response[0].date);
      const colors = ['bg-[#D37E16]', 'bg-[#45B288]', 'bg-[#174E91]'];
      this.materials = (response || []).map((item: any, index: number) => {
        return {
          title: {
            en: item.fuelTypeEn,
            ar: item.fuelTypeAr
          },
          desctiption: null,
          price: item.price,
          backroundColor: colors[index],
        }
      });
      this.isFuelPricesLoadingEnabled = false;
    });
  }

  isDateLessThanOrEqualToday(date: any, index: number, item: any) {
    const promotionDate = new Date(date).setHours(0, 0, 0, 0);
    const tDate = new Date().setHours(0, 0, 0, 0);
    return promotionDate >= tDate;
  }


  getHomePagePromotions() {
    this.isPromotinsLoadingEnabled = true;
    this.multimediaService.getHomePagePromotions().subscribe((response) => {
      this.promotionList.data = (response || []).filter((item: any, index: number) => this.isDateLessThanOrEqualToday(item?.endDate, index, item)).map((item: any) => {
        return {
          id: item.offersAndPromotionsID,
          date: item.modifiedOn,
          img: item.productionAreaImageID,
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          desc: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          link: item.pageURL || '',
        };
      });

      // console.log(this.promotionList.data);


      this.isPromotinsLoadingEnabled = false;
    });
  }


  getTenders() {
    this.isTenderLoadingEnabled = true;
    this.multimediaService.getHomePageTenders().subscribe((response) => {
      this.table.tbody = (response || []).map((item: any) => {
        return Object.values(
          [
            {
              value: item.tenderNumber || "-",
              class: "tender-id",
              link: item.pageURL || '',
              button: null,
            },
            // {
            //   value: {
            //     en: item.titleEN || "-",
            //     ar: item.titleAR || "-",
            //   },
            //   class: "normal",
            //   button: null,
            // },
            {
              value: item.lastCollectionDate ? this.datePipe.transform(item.lastCollectionDate, 'dd-MM-yyyy') : "-",
              class: "normal",
              button: null,
            },
            // {
            //   value: item.tenderBond || "-",
            //   class: "normal",
            //   button: null,
            // },
            // {
            //   value: item.fee || "-",
            //   class: "normal",
            //   button: null,
            // },
            {
              value: {
                en: item.categoryNameEN || "-",
                ar: item.categoryNameAR || "-",
              },
              class: "normal",
              button: null,
            },
            {
              value: "",
              class: "normal",
              button: {
                text: "TINDER.REQUEST",
                link: item.pageURL || '',
              },
            },
          ]
        );
      });
      this.isTenderLoadingEnabled = false;
    });
  }

  getHomePageSocialmedia() {
    this.isSocialmediaLoadingEnabled = true;
    this.multimediaService.getHomePageSocialmedia().subscribe((response) => {
      this.socilaMediaAccounts = (response || []).map((item: any) => {
        return {
          image: item.iconID,
          title: item.titleEN,
          // svg: 'assets/svgs/linkedin-2.svg',
          link: item.url
        }
      });
      this.isSocialmediaLoadingEnabled = false;
    });
  }
  getHomePageApp() {
    this.isSocialmediaLoadingEnabled = true;
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




  getHomePageProductsAndServices() {
    this.isProductsAndServicesLoadingEnabled = true;
    this.multimediaService.getHomePageProductsAndServices().subscribe((response) => {
      const temp = (response || []).map((item: any) => {
        return {
          id: item.woqodProductID,
          image: item.landingIconID,
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          link: item.pageURL || '',
        }
      });
      this.slidesStore2 = this.groupArrayItems(temp);
      this.isProductsAndServicesLoadingEnabled = false;
    });
  }

  groupArrayItems(array: any) {
    const result = [];
    for (let i = 0; i < array.length; i += 2) {
      result.push(array.slice(i, i + 2));
    }
    return result;
  }

  updateMetaData() {
    const item = this.slidesStore.find((item: any) => item.media[this.lang].desktop.type === 'image') || {};
    // 
    this.metaTagsService.updateMetaTags({
      title: this.data?.title?.[this.lang] || "Home page | Woqod",
      description: this.data?.description?.[this.lang] || "Home page | Woqod",
      keywords: this.data?.keywords || ["Woqod", "Home page"],
      img: item?.media?.[this.lang]?.desktop?.src || ''
    });
  }
}
