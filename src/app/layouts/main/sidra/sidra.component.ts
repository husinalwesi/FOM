import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sidra',
  templateUrl: './sidra.component.html',
  styleUrls: ['./sidra.component.scss']
})
export class SidraComponent {
  carousel: any = [];
  breadCrumb: any = [
    {
      title: "E_SERVICES_SECTION.PRODUCT_SERVICES",
      path: "/product-and-service",
    },
    {
      title: "BREADCRUMB.SIDRA",
      path: "/sidra",
    },
  ];
  isLoadingEnabled: boolean = true;
  isSliderLoadingEnabled: boolean = true;
  data: any = null;
  areaOne: any = null;
  lang: string = "en";
  service: any = {};

  delivery: any = [];

  promotionMainData: any = {};

  promotions: any = [];

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
    this.getSidraPromotios();
    this.getSidraOrders();
  }

  getSidraPromotios() {
    this.isLoadingEnabled = true;
    this.multimediaService.getSidraPromotios().subscribe((response) => {
      this.promotions = (response || []).map((item: any) => {
        return {
          image: this.sharedService.isValidImage(item.productionAreaImageID) || (this.lang === 'en' ? this.sharedService.isValidImage(item.webImageEN) || this.sharedService.isValidImage(item.mobileImageEN) : this.sharedService.isValidImage(item.webImageAR) || this.sharedService.isValidImage(item.mobileImageAR)),
          link: item.pageURL || '',
        }
      });
    });
  }

  getSidraOrders() {
    this.isLoadingEnabled = true;
    this.multimediaService.getSidraOrders().subscribe((response) => {
      this.delivery = (response || []).map((item: any) => {
        return {
          img: item.imageURL,
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          desc: {
            en: item.detailsEN,
            ar: item.detailsAR
          },
          btn: {
            text: {
              en: item.buttonTextEN,
              ar: item.buttonTextAR
            },
            link: item.link,
            isExternal: true
          }
        }
      });
    });
  }

  getMetaData() {
    this.isSliderLoadingEnabled = true;
    this.multimediaService.getContentPageByIDetaData('sidra').subscribe((response) => {
      this.data = {
        title: {
          en: response.titleEN,
          ar: response.titleAR,
        },
        description: {
          en: response.descriptionEN,
          ar: response.descriptionAR,
        },
        img: response.mainImageID,
        mobileImage: response.mobileImageID,
        keywords: [],
      };

      this.updateBreadCrumb();
      this.carousel = this.sharedService.isValidImage(this.data.img) || this.sharedService.isValidImage(this.data.mobileImage)
        ? [
          {
            image: this.data.img,
            mobileImage: response.mobileImageID,
            video: null,
            title: this.data.title,
            description: this.data.description,
            link: "",
            paddingBottom: "pb-[61px]",
          },
        ]
        : [];
      this.areaOne = {
        title: {
          en: response.contentBoxHeaderTitleEN,
          ar: response.contentBoxHeaderTitleAR,
        },
        description: {
          en: response.contentBoxHeaderDescriptionEN,
          ar: response.contentBoxHeaderDescriptionAR,
        },
      }

      this.service = {
        title: {
          en: response.areaOneTitleEN,
          ar: response.areaOneTitleAR,
        },
        desc: {
          en: response.areaOneDescrptionEN,
          ar: response.areaOneDescrptionAR,
        },
        btn: {
          // text: 'SIDRA.VISIT_SIDRA_WEBSITE',
          text: '',
          link: response.areaOneURL
        },
        imgType: 'image',
        img: response.areaOneImageId
      };

      this.promotionMainData = {
        title: {
          en: response.areaTwoTitleEN,
          ar: response.areaTwoTitleAR,
        },
        desc: {
          en: response.areaTwoDescrptionEN,
          ar: response.areaTwoDescrptionAR,
        },
        btn: {
          // text: 'SIDRA.SHOP_NOW',
          text: '',
          link: response.areaTwoURL
        }
      };

      this.updateMetaData();
      this.isSliderLoadingEnabled = false;
    });
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Sidra | Woqod",
      description: this.data.description[this.lang] || "Sidra | Woqod",
      keywords: this.data.keywords || ["Woqod", "Sidra"],
      img: this.data.img
    });
  }

  updateBreadCrumb() {
    this.breadCrumb[1].title = this.data.title[this.lang];
  }

}
