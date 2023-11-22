import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { PlaceholderImgService } from 'src/app/services/placeholder-img.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-woqode-tag',
  templateUrl: './woqode-tag.component.html',
  styleUrls: ['./woqode-tag.component.scss']
})
export class WoqodeTagComponent {
  lang: string = "en";
  data: any = null;
  breadCrumb: any = [
    {
      title: "E_SERVICES_SECTION.PRODUCT_SERVICES",
      path: "/product-and-service",
    },
    {
      title: 'BREADCRUMB.WOQODE_TAG',
      path: '/woqode-tag'
    }
  ];

  carousel: any = [];

  faqs: any = [];
  modalData: any = {
    heading: {
      en: 'Tag prices',
      ar: 'Tag prices'
    },
    subHeading: {
      en: 'WOQODE FOR INDIVIDUALS',
      ar: 'asdas'
    },
    title: {
      en: 'Who can use it?',
      ar: 'Who can use it?',
    },
    description: {
      en: 'WOQODe fueling system for individuals can be used by an individual with a vehicle registered under their name.',
      ar: 'WOQODe fueling system for individuals can be used by an individual with a vehicle registered under their name.',
    },
    data: [
      {
        title: {
          en: 'Cost of Tag',
          ar: 'sdasd'
        },
        price: 195.00,
        level: {
          en: 'Per Tag',
          ar: 'asdasd'
        },
      },
      // Add more data items if needed
    ]
  };
  modalData1: any = {
    heading: {
      en: 'Tag prices',
      ar: 'Tag prices'
    },
    subHeading: {
      en: 'WOQODE FOR INDIVIDUALS',
      ar: 'asdas'
    },
    title: {
      en: 'Who can use it?',
      ar: 'Who can use it?',
    },
    description: {
      en: 'WOQODe fueling system for individuals can be used by an individual with a vehicle registered under their name.',
      ar: 'WOQODe fueling system for individuals can be used by an individual with a vehicle registered under their name.',
    },
    data: [
      {
        title: {
          en: 'Cost of Tag',
          ar: 'sdasd'
        },
        price: 195.00,
        tagsFrom: '',
        tagsTo: '',
        level: {
          en: 'Per Tag',
          ar: 'asdasd'
        },
      },
      // Add more data items if needed
    ]
  };

  individualTablePrice: any = [

  ];

  individualMainData: any = {
    details: {
      en: '',
      ar: ''
    },
    btn: {
      text: 'PRICE_TABLE.SEE_PRICES',
      link: '/'
    }
  };

  corporateMainData: any = {
    details: {
      en: '',
      ar: ''
    },
    btn: {
      text: 'PRICE_TABLE.SEE_PRICES',
      link: '/'
    }
  };

  corporateTablePrice: any = [

  ];

  service: any = {
    title: {
      en: 'E-Tag Service',
      ar: 'E-Tag Service'
    },
    desc: {
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus turpis risus, feugiat eu euismod eget, iaculis a lectus. Mauris a ultricies ipsum, et aliquam augue. Fusce mattis, metus ut pharetra efficitur, felis odio laoreet dui, vel egestas tortor metus id ex. Donec blandit a est volutpat blandit. Aliquam mattis tincidunt ipsum, sed pellentesque elit congue non. Sed fringilla nisl in orci',
      ar: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus turpis risus, feugiat eu euismod eget, iaculis a lectus. Mauris a ultricies ipsum, et aliquam augue. Fusce mattis, metus ut pharetra efficitur, felis odio laoreet dui, vel egestas tortor metus id ex. Donec blandit a est volutpat blandit. Aliquam mattis tincidunt ipsum, sed pellentesque elit congue non. Sed fringilla nisl in orci'
    },
    img: ''
  };
  selectedTab: string = "individual";//individual//corporate
  // isRTL: boolean = this.TranslationService.isRTL();
  videoContent: any = null;
  areaOneCorporate: any = null;
  areaOneIndividual: any = null;
  fahesStroy: any = null;
  ethics: any = null;
  topUpStepsIsLoadingEnabled: boolean = false;
  faqIsLoadingEnabled: boolean = false;
  isSliderLoadingEnabled: boolean = true;
  steps: any = [];
  corporateTablePrice1: any = [];
  corporateMainData1: any = {};

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private placeholderImgService: PlaceholderImgService,
    private TranslationService: TranslationService,
    private multimediaService: MultimediaService,
    private sanitizer: DomSanitizer
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit(): void {
    // this.getData();\
    this.getWoqodeData();
    this.getSteps();
    this.getWoqodeBullets();
    this.getFaq();
    // this.getHeroCarouselData();
    this.getCorporatePrices();
    this.getIndividualPrices();
    this.getModalPricesIndividual();
    this.getModalPricesCorporate();
  }

  getModalPricesCorporate() {
    this.multimediaService.getWoqodepriceC().subscribe((response) => {
      this.modalData1.heading = {
        en: response.headingEN,
        ar: response.headingAR
      };
      this.modalData1.subHeading = {
        en: response.subHeadingEN,
        ar: response.subHeadingAR
      };
      this.modalData1.title = {
        en: response.titleEN || '-',
        ar: response.titleAR || '-',
      };
      this.modalData1.description = {
        en: response.descriptionEN || '-',
        ar: response.descriptionAR || '-',
      };

      this.modalData1.data = (response.prices || []).map((item: any) => {
        return {
          title: {
            en: item.titleEN || '-',
            ar: item.titleAR || '-'
          },
          price: item.price || '-',
          tagsFrom: item.tagsFrom || '-',
          tagsTo: item.tagsTo || '-',
          level: {
            en: item.levelEN || '-',
            ar: item.levelAR || '-'
          },
        };
      });

      this.topUpStepsIsLoadingEnabled = false;
    });
  }
  getModalPricesIndividual() {
    this.multimediaService.getWoqodepriceI().subscribe((response) => {
      this.modalData.heading = {
        en: response.headingEN,
        ar: response.headingAR
      };
      this.modalData.subHeading = {
        en: response.subHeadingEN,
        ar: response.subHeadingAR
      };
      this.modalData.title = {
        en: response.titleEN,
        ar: response.titleAR,
      };
      this.modalData.description = {
        en: response.descriptionEN,
        ar: response.descriptionAR,
      };

      this.modalData.data = (response.prices || []).map((item: any) => {
        return {
          title: {
            en: item.titleEN || '-',
            ar: item.titleAR || '-'
          },
          price: item.price || '-',
          level: {
            en: item.levelEN || '-',
            ar: item.levelAR || '-'
          },
        };
      });

      this.topUpStepsIsLoadingEnabled = false;
    });
  }

  getFaq() {
    this.faqIsLoadingEnabled = true;
    this.multimediaService.getFaqWoqode().subscribe((response) => {
      this.faqs = (response || []).map((item: any) => {
        return {
          title: {
            en: item.questionEN,
            ar: item.questionAR
          },
          desc: {
            en: item.answerEN,
            ar: item.answerAR
          },
        }
      });
      this.faqIsLoadingEnabled = false;
    });
  }

  getWoqodeData() {
    this.multimediaService.getWoqodeInfo('woqode-tag').subscribe((response) => {
      this.data = {
        title: {
          en: response.titleEN,
          ar: response.titleAR
        },
        description: {
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
        video: {
          en: response.videoEmbedEN ? this.sanitizer.bypassSecurityTrustHtml(response.videoEmbedEN) : null,
          ar: response.videoEmbedAR ? this.sanitizer.bypassSecurityTrustHtml(response.videoEmbedAR) : null,
        },
        img: response.fileObjectId,
        mobileImage: response.mobileImageID
      };

      this.updateBreadCrumb();
      this.updateMetaData();
      this.areaOneCorporate = {
        box: {
          en: response.area1CorporateBoxEN,
          ar: response.area1CorporateBoxAR,
        },
        img: response.area1CorporateBoxImage,
      }
      this.areaOneIndividual = {
        box: {
          en: response.area1IndividualBoxEN,
          ar: response.area1IndividualBoxAR,
        },
        img: response.area1individualBoxImage,
      }
      this.fahesStroy = {
        title: {
          en: response.contactInitTextEN,
          ar: response.contractInitTextAR,
        },
        btnText: {
          en: response.contactInitButtonTextEN,
          ar: response.contactInitButtonTextAR,
        },
        href: response.contactInitButtonLink
      }
      this.getHeroCarouselData();
    });
  }

  getWoqodeBullets() {
    this.multimediaService.getWoqodeBullets('woqode-tag').subscribe((response) => {
      this.ethics = (response || []).map((item: any) => {
        return {
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          icon: item.iconID,
        }
      });
      this.topUpStepsIsLoadingEnabled = false;
    });
  }


  updateBreadCrumb() {
    this.breadCrumb[1].title = this.data.title[this.lang];
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Woqode tag | Woqod",
      description: this.data.description[this.lang] || "Woqode tag | Woqod",
      keywords: this.data.keywords || ["Woqod", "Woqode tag"],
      img: this.data.img
    });
  }

  getSteps() {
    this.topUpStepsIsLoadingEnabled = true;
    this.multimediaService.getWoqodeTopup().subscribe((response) => {
      this.steps = (response || []).map((item: any) => {
        return {
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          desc: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          }
        }
      });
      this.topUpStepsIsLoadingEnabled = false;
    });
  }

  changeSelectedTab(tab: any) {
    this.selectedTab = tab;
  }


  getHeroCarouselData() {
    this.isSliderLoadingEnabled = true;
    this.multimediaService.getWoqodeTagCarouselData().subscribe((response) => {

      this.carousel = (response || []).map((item: any) => {
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
          image: this.data.img,
          mobileImage: this.data.mobileImage,
          // video: this.data.video[this.lang],
          video: null,
          title: {
            en: this.data.title.en,
            ar: this.data.title.ar
          },
          description: {
            en: this.data.description.en,
            ar: this.data.description.ar
          },
          link: "",
          paddingBottom: 'pb-[61px]',
        }]
      }
      this.isSliderLoadingEnabled = false;

    });
  }

  getCorporatePrices() {
    this.multimediaService.getWoqodePricesCorporate().subscribe((response) => {
      this.corporateTablePrice1 = (response.prices || []).map((item: any) => {
        return {
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          desc: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          amount: item.price,
          details: {
            en: item.subDescriptionEN,
            ar: item.subDescriptionAR,
          }
        }
      });
      this.corporateMainData1 = {
        details: {
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
        btn: {
          text: {
            en: response.buttonTextEN,
            ar: response.buttonTextAR,
          },
          link: '/static'
        }
      }
    });
  }
  getIndividualPrices() {
    this.multimediaService.getWoqodePricesIndividual().subscribe((response) => {
      this.individualTablePrice = (response.prices || []).map((item: any) => {
        return {
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          desc: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          desc2: {
            en: item.subDescriptionEN,
            ar: item.subDescriptionAR
          },
          amount: item.price,
          btn: {
            text: {
              en: item.buttonTextEN,
              ar: item.buttonTextAR,
            },
            link: '/request-e-tag'
          }
        }
      });
      this.individualMainData = {
        details: {
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
        btn: {
          text: {
            en: response.buttonTextEN,
            ar: response.buttonTextAR,
          },
          link: '/static'
        }
      }
    });
  }
}
