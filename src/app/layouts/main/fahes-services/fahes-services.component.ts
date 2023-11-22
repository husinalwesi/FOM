import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";

@Component({
  selector: "app-fahes-services",
  templateUrl: "./fahes-services.component.html",
  styleUrls: ["./fahes-services.component.scss"],
})
export class FahesServicesComponent {
  data: any = {};
  carousel: any = [];
  breadCrumb: any = [
    {
      title: "BREADCRUMB.SERVICES",
      path: "/services",
    },
  ];
  lang: string = "en";

  relatedServicesMainData: any = {};

  services: any = [];
  bottomSection: any = {};
  isLoadingEnabled: boolean = true;
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
    this.getFServices();
  }
  getData() {
    this.isLoadingEnabled = true;
    this.multimediaService.getServicesData("").subscribe((response) => {
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
        keywords: [],
      };
      this.relatedServicesMainData = {
        title: {
          en: response.area1TitleEN,
          ar: response.area1TitleAR,
        },
        desc: {
          en: response.area1DescriptionEN,
          ar: response.area1DescriptionAR,
        },
      };
      this.bottomSection = {
        title: {
          en: response.area3BodyEN,
          ar: response.area3BodyAR,
        },
        btnText: {
          en: response.area3TextUrlEN,
          ar: response.area3TextUrlAR,
        },
        href: response.area3URL,
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
      this.isLoadingEnabled = false;
    });
  }

  getFServices() {
    this.multimediaService.getServices().subscribe((response) => {
      this.services = (response || []).map((item: any) => {
        return {
          title: {
            en: item.titleEN,
            ar: item.titleAR,
          },
          desc: {
            en: item.descriptionEN,
            ar: item.descriptionAR,
          },
          mainBtnText: {
            en: item.button2TextEN,
            ar: item.button1TextAR,
          },
          initiateContractLink: item.pageURL || "",
          img: item.bodyImageID,
          points: [],
        };
      });
    });
  }
  updateBreadCrumb() {
    this.breadCrumb[0].title = this.data.title[this.lang];
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Auto Care Service | Woqod",
      description:
        this.data.description[this.lang] || "Auto Care Service | Woqod",
      keywords: this.data.keywords || ["Woqod", "Auto Care Service"],
      img: this.data.img
    });
  }
}
