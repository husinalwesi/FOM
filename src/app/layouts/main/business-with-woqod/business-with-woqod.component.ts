import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-business-with-woqod',
  templateUrl: './business-with-woqod.component.html',
  styleUrls: ['./business-with-woqod.component.scss']
})
export class BusinessWithWoqodComponent {
  carousel: any = [];
  becomeSupplier: any = [];
  breadCrumb: any = [
    {
      title: "E_SERVICES_SECTION.PRODUCT_SERVICES",
      path: "/product-and-service",
    },
    {
      title: 'BREADCRUMB.BUSINESS_WITH_WOQOD',
      path: '/business-with-woqod'
    }
  ];
  lang: string = "en";
  isLoadingEnabled: boolean = false;
  isProductsLoadingEnabled: boolean = true;
  data: any = null;

  services: any = [];
  relatedServicesMainData: any = {
    title: {
      en: 'Related Services',
      ar: 'Related Services'
    },
    desc: {
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus turpis risus, feugiat eu euismod eget, iaculis a lectus.',
      ar: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus turpis risus, feugiat eu euismod eget, iaculis a lectus.'
    }
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
    this.getProducts();
    this.getBecomeaSupplierSection();
  }

  getMetaData() {
    this.multimediaService.getContentPageByIDetaData('business-with-woqod').subscribe((response) => {
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
        image: response.imageID,
        mobileImage: response.mobileImageID
      };
      this.relatedServicesMainData = {
        title: {
          en: response.area1TitleEN,
          ar: response.area1TitleAR
        },
        desc: {
          en: response.area1DescriptionEN,
          ar: response.area1DescriptionAR
        }
      };
      this.updateBreadCrumb();
      this.getHeroCarouselData();

      // this.updateMetaData();
    });
  }
  // getbwwoqoodSupplier
  getBecomeaSupplierSection() {
    this.multimediaService
      .getbwwoqoodSupplier()
      .subscribe((response) => {
        this.becomeSupplier = [
          {
            image: response.infoBox1BackgroundImageID,
            icon: response.infoBox1IconID,
            title: {
              en: response.infoBox1TitleEN,
              ar: response.infoBox1TitleAR,
            },
            desc: {
              en: response.infoBox1DescriptionEN,
              ar: response.infoBox1DescriptionAR,
            },
            btn: {
              text: {
                en: response.infoBox1ButtonTextEN,
                ar: response.infoBox1ButtonTextAR,
              },
              // modal: 'supplier'
              link: {
                en: response.infoBox1ButtonURLEN,
                ar: response.infoBox1ButtonURLAR,
              },
            },
          },
          {
            image: response.infoBox2BackgroundImageID,
            icon: response.infoBox2IconID,
            title: {
              en: response.infoBox2TitleEN,
              ar: response.infoBox2TitleAR,
            },
            desc: {
              en: response.infoBox2DescriptionEN,
              ar: response.infoBox2DescriptionAR,
            },
            btn: {
              text: {
                en: response.infoBox2ButtonTextEN,
                ar: response.infoBox2ButtonTextAR,
              },
              // modal: 'supplier'
              link: {
                en: response.infoBox2ButtonURLEN,
                ar: response.infoBox2ButtonURLAR,
              },
            },
          },
        ]
      });
  }
  getProducts() {
    this.isProductsLoadingEnabled = true;
    this.multimediaService.getBusinessWithWoqodProducts({}).subscribe((response) => {
      this.services = (response || []).map((item: any) => {
        return {
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          desc: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          mainBtnText: {
            en: item.contractInitTextEN,
            ar: item.contractInitTextAR
          },
          // initiateContractLink: item.contractInitBtnURL,
          initiateContractLink: item.pageURL,
          img: this.sharedService.isValidImage(item?.productionAreaImageID) || this.sharedService.isValidImage(item?.imageID) || this.sharedService.isValidImage(item?.mobileImageID),
          points: []
        }
      });
      this.isProductsLoadingEnabled = false;
    });
  }


  updateBreadCrumb() {
    this.breadCrumb[1].title = this.data.title[this.lang];
  }

  getHeroCarouselData() {
    this.isLoadingEnabled = true;
    this.multimediaService.getBusinessWithWoqodImages().subscribe((response) => {
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
        this.carousel = [
          {
            image: this.data?.image,
            mobileImage: this.data?.mobileImage,
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
          }
        ]
      }
      this.updateMetaData();
      this.isLoadingEnabled = false;
    });
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
