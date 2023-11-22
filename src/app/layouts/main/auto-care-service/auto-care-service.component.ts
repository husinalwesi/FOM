import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { TranslationService } from "src/app/i18n/translation.service";
import { SharedService } from "src/app/services/shared.service";

@Component({
  selector: "app-auto-care-service",
  templateUrl: "./auto-care-service.component.html",
  styleUrls: ["./auto-care-service.component.scss"],
})
export class AutoCareServiceComponent {
  data: any = null;
  carousel: any = [];
  isLoadingEnabled: boolean = true;
  promotionsSubset: any[] = [];
  becomeSupplier: any = [];
  breadCrumb: any = [
    {
      title: "E_SERVICES_SECTION.PRODUCT_SERVICES",
      path: "/product-and-service",
    },
    {
      title: "BREADCRUMB.AUTO_CARE_SERVICE",
      path: "/auto-care-service",
    },
  ];
  lang: string = "en";
  cards: any = [];
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
    this.getSubServices();
    this.getBecomeaSupplierSection();
  }

  getSubServices() {
    this.multimediaService.getAutoCareSubServices().subscribe((response) => {
      this.cards = (response || []).map((item: any) => {
        return {
          id: item.autoCareSubServicesID,
          link: item.pageURL || "",
          title: {
            en: item.titleEN,
            ar: item.titleAR,
          },
          desc: {
            en: item.descriptionEN,
            ar: item.descriptionAR,
          },
          img: this.sharedService.isValidImage(item.productionAreaImageID) || this.sharedService.isValidImage(item.mainImageID) || this.sharedService.isValidImage(item.mobileImageID),
        };
      });
    });
  }

  getMetaData() {
    this.isLoadingEnabled = true;
    this.multimediaService
      .getContentPageByIDetaData("auto-care-service")
      .subscribe((response) => {
        if (response && response.length > 0) {
          this.getPromotions(response[0].autoCarePagesID);
          this.data = {
            title: {
              en: response[0].titleEN,
              ar: response[0].titleAR,
            },
            description: {
              en: response[0].descriptionEN,
              ar: response[0].descriptionAR,
            },
            areaOne: {
              title: {
                en: response[0].contextTitleEN,
                ar: response[0].contextTitleAR,
              },
              description: {
                en: response[0].contextDescEN,
                ar: response[0].contextDescAR,
              },
            },
            keywords: [],
          };
          this.carousel = (response[0].imagesData || []).map((item: any) => {
            return {
              image: item.imageFileId,
              mobileImage: item.mobileImageID,
              video: null,
              title: {
                en: item.titleEN,
                ar: item.titleAR,
              },
              description: {
                en: item.descriptionEN,
                ar: item.descriptionAR,
              },
              link: "",
              paddingBottom: "pb-[61px]",
            };
          });
          this.updateBreadCrumb();
          this.updateMetaData();
        }
        this.isLoadingEnabled = false;
      });
  }

  getPromotions(id: string) {
    this.multimediaService
      .getAutoCarePromotions({ id: id })
      .subscribe((response) => {
        const newPromotions = (response || []).map((item: any) => {
          return {
            id: item.pageURL || "",
            title: {
              en: item.titleEN,
              ar: item.titleAR,
            },
            date: item.endDate ? new Date(item.endDate) : null,
            img: this.sharedService.isValidImage(item.productionAreaImageID) || (this.lang === 'en' ? this.sharedService.isValidImage(item.webImageEN) || this.sharedService.isValidImage(item.mobileImageEN) : this.sharedService.isValidImage(item.webImageAR) || this.sharedService.isValidImage(item.mobileImageAR)),
          };
        });
        this.promotionsSubset = newPromotions.slice(0, 4);
      });
  }

  getBecomeaSupplierSection() {
    this.multimediaService.getAutoCareSupplier().subscribe((response) => {
      this.becomeSupplier = [
        {
          image: response[0].infoBox1BackgroundImageID,
          icon: response[0].infoBox1IconID,
          title: {
            en: response[0].infoBox1TitleEN,
            ar: response[0].infoBox1TitleAR,
          },
          desc: {
            en: response[0].infoBox1DescriptionEN,
            ar: response[0].infoBox1DescriptionAR,
          },
          btn: {
            text: {
              en: response[0].infoBox1ButtonTextEN,
              ar: response[0].infoBox1ButtonTextAR,
            },
            // modal: 'supplier'
            link: {
              en: response[0].infoBox1ButtonURLEN,
              ar: response[0].infoBox1ButtonURLAR,
            },
          },
        },
        {
          image: response[0].infoBox2BackgroundImageID,
          icon: response[0].infoBox2IconID,
          title: {
            en: response[0].infoBox2TitleEN,
            ar: response[0].infoBox2TitleAR,
          },
          desc: {
            en: response[0].infoBox2DescriptionEN,
            ar: response[0].infoBox2DescriptionAR,
          },
          btn: {
            text: {
              en: response[0].infoBox2ButtonTextEN,
              ar: response[0].infoBox2ButtonTextAR,
            },
            // modal: 'supplier'
            link: {
              en: response[0].infoBox2ButtonURLEN,
              ar: response[0].infoBox2ButtonURLAR,
            },
          },
        },
      ];
    });
  }

  updateBreadCrumb() {
    this.breadCrumb[1].title = this.data.title[this.lang];
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Auto Care Service | Woqod",
      description:
        this.data.description[this.lang] || "Auto Care Service | Woqod",
      keywords: this.data.keywords || ["Woqod", "Auto Care Service"],
      img: this.carousel?.[0]?.image, // Meta Image By Ammar
    });
  }
}
