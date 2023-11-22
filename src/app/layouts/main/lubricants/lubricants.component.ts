import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { GUID } from "src/app/const/guid";
import { TranslationService } from "src/app/i18n/translation.service";
import { RouteLocalizationPipe } from "src/app/pipes/route-localization.pipe";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { SharedService } from "src/app/services/shared.service";

@Component({
  selector: "app-lubricants",
  templateUrl: "./lubricants.component.html",
  styleUrls: ["./lubricants.component.scss"],
})
export class LubricantsComponent {
  lang: string = "en";
  isLoadingEnabled: boolean = true;
  isSliderLoadingEnabled: boolean = true;
  data: any = {};
  carousel: any = [];
  breadCrumb: any = [
    {
      title: "E_SERVICES_SECTION.PRODUCT_SERVICES",
      path: "/product-and-service",
    },
    {
      title: "BREADCRUMB.LUBRICANTS",
      path: "/lubricants",
    },
  ];
  products: any = [];

  lubricantsData: any = {
  };
  relatedContents: any;

  constructor(
    private translate: TranslateService,
    private TranslationService: TranslationService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private router: Router,
    private routeLocalizationPipe: RouteLocalizationPipe,
    private sharedService: SharedService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit(): void {
    this.getCarousel();
    // this.getSlider();
    this.getFeatured();
  }

  getSlider() {
    this.isSliderLoadingEnabled = true;
    this.multimediaService.getLubricants({ LubricantLandingId: GUID.woqod.lubricant.landing }).subscribe((response) => {
      this.carousel = (response || []).map((item: any) => {
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
      this.updateMetaData();
      this.isSliderLoadingEnabled = false;
    });
  }

  getCarousel() {
    this.multimediaService.getLubricantsCarsoul().subscribe((response) => {
      this.products = (response || []).map((item: any) => {
        return {
          link: item.pageURL || '',
          title: {
            en: item.nameEN,
            ar: item.nameAR,
          },
          desc: {
            en: item.descriptionEN,
            ar: item.descriptionAR,
          },
          img: this.sharedService.isValidImage(item.productionAreaImageID) || this.sharedService.isValidImage(item.mobileImageID) || this.sharedService.isValidImage(item.tumbnailImageID),
        };
      });
    });
  }

  getFeatured() {
    this.isLoadingEnabled = false;
    this.multimediaService.getLubricantsMeta({ LubricantLandingId: GUID.woqod.lubricant.landing }).subscribe((response) => {
      this.getSlider();
      this.data = {
        title: {
          en: response.titleEN,
          ar: response.titleAR,
        },
        description: {
          en: response.descriptionEN,
          ar: response.descriptionAR,
        },
        areaOneTitle: {
          en: response.area1TitleEN,
          ar: response.area1TitleAR,
        },
        areaOneDescription: {
          en: response.area1TextEN,
          ar: response.area1TextAR,
        },
        areaTwoTitle: {
          en: response.area2TitleEN,
          ar: response.area2TitleAR,
        },
        keywords: [],
      }
      this.lubricantsData = {
        title: {
          en: response.area3TitleEN,
          ar: response.area3TitleAR,
        },
        desc: {
          en: response.area3TextEN,
          ar: response.area3TextAR,
        },
        btnText: {
          en: response.area3BtnTextEN,
          ar: response.area3BtnTextAR,
        },
        link: { en: response.area3BtnURL, ar: response.area3BtnURL },
        img: this.sharedService.isValidImage(response.productionAreaArea3Image) || this.sharedService.isValidImage(response.area3Image) || this.sharedService.isValidImage(response.mobileArea3Image),
      };
      this.updateBreadCrumb();
    });

    this.isLoadingEnabled = true;
  }

  updateBreadCrumb() {
    this.breadCrumb[1].title = this.data.title[this.lang];
  }
  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Student Opportunities | Woqod",
      description:
        this.data.description[this.lang] || "Student Opportunities | Woqod",
      keywords: this.data.keywords || ["Woqod", "Student Opportunities"],
      img: this.carousel[0].image
    });
  }

  onClickEmiter(index: number) {
    if (this.products?.[index]?.link) this.router.navigateByUrl(this.routeLocalizationPipe.transform(this.products[index].link));
  }

}
