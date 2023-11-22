import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { SharedService } from "src/app/services/shared.service";

@Component({
  selector: "app-shafaf",
  templateUrl: "./shafaf.component.html",
  styleUrls: ["./shafaf.component.scss"],
})
export class ShafafComponent {
  isLoadingEnabled: boolean = true;
  isSliderLoadingEnabled: boolean = true;
  areaOne: any = {};
  data: any = [];
  lang: string = "en";

  carousel: any = [];

  breadCrumb: any = [
    {
      title: "E_SERVICES_SECTION.PRODUCT_SERVICES",
      path: "/product-and-service",
    },
    {
      title: "BREADCRUMB.SHAFAF",
      path: "/shafaf",
    },
  ];
  services: any = [];
  // services1: any = {};
  relatedContents: any = [];
  rates: any = [];
  accessories: any = [];

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
    this.getMetaData();
    this.getFeatured();
    this.getRates();
    this.getAccessories();
  }

  getMetaData() {
    this.isSliderLoadingEnabled = true;
    this.multimediaService.getShafaf().subscribe((response) => {
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
        areaOneTitle: {
          en: response.headerTitleEN,
          ar: response.headerTitleAR,
        },
        areaOneDescription: {
          en: response.headerContentEN,
          ar: response.headerContentAR,
        },
      }
      this.services = {
        title: {
          en: response.area1TitleEN,
          ar: response.area1TitleAR,
        },
        desc: {
          en: response.area1DescriptionEN,
          ar: response.area1DescriptionAR,
        },
        btn: {
          text: null,
          link: null,
        },
        img: response.area1ImageID,
        imgType: response.area1ImageType

      }
      // this.services1 = {
      //   Heading: {
      //     en: response.area2HeadingEN,
      //     ar: response.area2HeadingAr,
      //   },
      //   title: {
      //     en: response.area2Title1EN,
      //     ar: response.area2Title1Ar
      //   },
      //   desc: {
      //     en: response.area2Description1EN,
      //     ar: response.area2Description1Ar,
      //   },
      //   btn: {
      //     text: "SHAFAF.VIEW",
      //     link: "shafaf/super-markets",
      //   },
      //   img: response.area2Image1,
      //   imgType: response.area2Image1Type,
      //   title1: {
      //     en: response.area2Title2EN,
      //     ar: response.area2Title2Ar
      //   },
      //   desc1: {
      //     en: response.area2Description2EN,
      //     ar: response.area2Description2Ar,
      //   },
      //   btn1: {
      //     text: "SHAFAF.VIEW",
      //     link: "/shafaf/gas-retailers",
      //   },
      //   img1: response.area2Image2,
      //   img1Type: response.area2Image2Type,
      // }
      this.updateBreadCrumb();
      this.carousel = this.sharedService.isValidImage(this.data.img) || this.sharedService.isValidImage(this.data.mobileImage) ?
        [
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
      this.updateMetaData();
      this.isSliderLoadingEnabled = false;
    });
  }
  getFeatured() {
    this.isLoadingEnabled = true;
    this.multimediaService.getFeaturedShafaf().subscribe((response) => {
      this.relatedContents = (response || []).map((item: any) => {
        return {
          link: item.pageURL || '',
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
          dates: {
            leftDate: null,
            rightDate: null,
          },
        }
      });
    });
  }
  getRates() {
    this.isLoadingEnabled = true;
    const payload = {
      orderBy: 'ModifiedOn DESC'
    };
    this.multimediaService.getFeaturedRates(payload).subscribe((response) => {
      this.rates = (response.pageItems || []).map((item: any) => {
        return {
          image: item.imageID,

          title: {
            en: item.weight + " Kg",
            ar: item.weight + " كم",
          },
          price: item.price,
          paddingBottom: "pb-[61px]",
          gas: item.withGas,
        }
      });
    });
  }
  getAccessories() {
    this.isLoadingEnabled = true;
    const payload = {
      orderBy: 'ModifiedOn DESC'
    };
    this.multimediaService.getFeaturedAccessories(payload).subscribe((response) => {
      this.accessories = (response.pageItems || []).map((item: any) => {
        return {
          image: item.imageID,

          title: {
            en: item.titleEN,
            ar: item.titleAR,
          },
          price: item.price,
          paddingBottom: "pb-[61px]",
          gas: false,
        }
      });
    });
  }
  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Shafaf | Woqod",
      description: this.data.description[this.lang] || "Shafaf | Woqod",
      keywords: this.data.keywords || ["Woqod", "Shafaf"],
      img: this.data.img
    });
  }

  updateBreadCrumb() {
    this.breadCrumb[1].title = this.data.title[this.lang];
  }
}
