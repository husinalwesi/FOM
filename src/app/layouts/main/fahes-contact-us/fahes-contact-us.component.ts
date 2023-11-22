import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";

@Component({
  selector: "app-fahes-contact-us",
  templateUrl: "./fahes-contact-us.component.html",
  styleUrls: ["./fahes-contact-us.component.scss"],
})
export class FahesContactUsComponent {
  selectedOfficeIndex: number = -1;
  bullets: any = null;
  valueItem: any = {};
  carousel: any = [];
  breadCrumb: any = [
    {
      title: "BREADCRUMB.FAHES_CONTACT_US",
      path: "/fahes/contact-us",
    },
  ];
  lang: string = "en";
  isLoadingEnabled: boolean = true;
  isSliderLoadingEnabled: boolean = true;
  data: any = null;
  dataDetails: any = null;
  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit(): void {
    this.getData();
    this.getDataOffices();
    this.getBullets();
  }

  getData() {
    this.isSliderLoadingEnabled = true;
    this.multimediaService
      .getFahesContactUs("fahes/contact-us")
      .subscribe((response) => {
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
          areaOneTitle: {
            en: response.area1Title,
            ar: response.area1TitleAR,
          },
          areaOneDescription: {
            en: response.area1Description,
            ar: response.area1DescriptionAR,
          },
          areaTwoTitle: {
            en: response.area2Title,
            ar: response.area2TitleAR,
          },
          keywords: [],
        };
        this.updateBreadCrumb();
        this.carousel = this.data.img
          ? [
            {
              image: this.data.img,
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

  getDataOffices() {
    this.isLoadingEnabled = true;
    this.multimediaService.getFahesContactUsDetails("contact-us").subscribe((response) => {
      this.dataDetails = response.map((item: any, index: number) => ({
        open: index === 0,
        title: {
          en: item.titleEN,
          ar: item.titleAR,
        },
        address: {
          en: item.address,
          ar: item.addressAR || '', // Use an empty string if addressAR is null
        },
        img: item.imageID,
        phone: item.phone,
        fax: item.fax,
        email: item.email,
        help: item.helpLine,
        longItudeLatitude: item.longitudeLatitude,
        keywords: [],
      }));
      if (this.dataDetails.length > 0) this.selectedOfficeIndex = 0;
      this.isLoadingEnabled = false;
    });
  }

  toggleOffice(item: any, officeIndex: number) {
    item.open = !item.open;
    for (let index = 0; index < this.dataDetails.length; index++) {
      if (officeIndex !== index) {
        this.dataDetails[index].open = false;
      }
    }

    this.selectedOfficeIndex = this.dataDetails.findIndex((item: any) => item.open) || 0;
  }

  getBullets() {
    this.isLoadingEnabled = true;
    this.multimediaService
      .getFahesContactUsBullets("fahes/contact-us")
      .subscribe((response) => {
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
        this.isLoadingEnabled = false;
      });
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Contact Us | Woqod",
      description: this.data.description[this.lang] || "Contact Us | Woqod",
      keywords: this.data.keywords || ["Woqod", "Contact Us"],
      img: this.data.img
    });
  }

  updateBreadCrumb() {
    this.breadCrumb[0].title = this.data.title[this.lang];
  }
}
