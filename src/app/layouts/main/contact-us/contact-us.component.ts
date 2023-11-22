import { ChangeDetectorRef, Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { SharedService } from "src/app/services/shared.service";


interface ContactUsDetail {
  woqodOfficesID: string;
  titleAR: string;
  titleEN: string;
  address: string;
  phone: string;
  fax: string;
  email: string;
  helpLine: string;
  longitudeLatitude: string;
  imageID: string;
  addressAR: string | null;
}

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent {
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
  dataDetails: any = [];
  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private cdk: ChangeDetectorRef,
    private sharedService: SharedService

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
      .getContactUs("contact-us")
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
          mobileImage: response.mobileImageID,
          areaOneTitle: {
            en: response.area1TitleEN,
            ar: response.area1TitleAR,
          },
          areaOneDescription: {
            en: response.area1DescriptionEN,
            ar: response.area1DescriptionAR,
          },
          areaTwoTitle: {
            en: response.area2TitleEN,
            ar: response.area2TitleAR,
          },
          keywords: [],
        };
        this.updateBreadCrumb();
        this.carousel = this.sharedService.isValidImage(this.data.img) || this.sharedService.isValidImage(this.data.mobileImage)
          ? [
            {
              image: this.data.img,
              mobileImage: this.data.mobileImage,
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
  extractCoordinates(longitudeLatitude: string) {
    try {
      const parsedData = JSON.parse(longitudeLatitude);
      return `${parsedData.lat},${parsedData.lng}`;
    } catch (error) {
      // console.error("Error parsing longitudeLatitude:", error);
      return "0,0"; // Default value when parsing fails
    }
  }
  getDataOffices() {
    this.isLoadingEnabled = true;
    this.multimediaService.getContactUsDetails("contact-us").subscribe((response) => {
      this.dataDetails = response.map((item: ContactUsDetail, index: number) => ({
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
        longItudeLatitude: this.extractCoordinates(item.longitudeLatitude),
        keywords: [],
      }));
      if (this.dataDetails.length > 0) this.selectedOfficeIndex = 0;
      this.isLoadingEnabled = false;
    });
  }
  getBullets() {
    this.isLoadingEnabled = true;
    this.multimediaService
      .getContactUsBullets("contact-us")
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

  toggleOffice(item: any, officeIndex: number) {
    item.open = !item.open;
    for (let index = 0; index < this.dataDetails.length; index++) {
      if (officeIndex !== index) {
        this.dataDetails[index].open = false;
      }
    }

    this.selectedOfficeIndex = this.dataDetails.findIndex((item: any) => item.open) || 0;
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
