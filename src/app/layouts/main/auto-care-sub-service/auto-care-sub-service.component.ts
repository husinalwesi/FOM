import { Component } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { TranslationService } from "src/app/i18n/translation.service";
import { RouteLocalizationPipe } from "src/app/pipes/route-localization.pipe";
import { SharedService } from "src/app/services/shared.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-auto-care-sub-service",
  templateUrl: "./auto-care-sub-service.component.html",
  styleUrls: ["./auto-care-sub-service.component.scss"],
})
export class AutoCareSubServiceComponent {
  private routerEventsSubscription: Subscription;
  showPriceSection: boolean = false;
  carousel: any = [];
  story: any = {
    title: {
      en: '',
      ar: ''
    },
    desc: {
      en: '',
      ar: ''
    }
  };
  breadCrumb: any = [
    {
      title: "E_SERVICES_SECTION.PRODUCT_SERVICES",
      path: "/product-and-service",
    },
    {
      title: "BREADCRUMB.AUTO_CARE_SERVICE",
      path: "/auto-care-service",
    },
    {
      title: "",
      path: "",
    },
  ];
  lang: string = "en";
  isLoadingEnabled: boolean = true;
  id: string | null = "";
  data: any = null;

  txtData: any = {
    body1: {
      en: ``,
      ar: "",
    },
    body2: {
      en: ``,
      ar: "",
    },
  };

  prices: any = [];

  promotions: any = [];

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private route: ActivatedRoute,
    private router: Router,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private routeLocalizationPipe: RouteLocalizationPipe,
    private sharedService: SharedService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
    // this.id = this.route.snapshot.paramMap.get("ID");
    this.routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // this.id = this.route.snapshot.paramMap.get('ID');
        this.getData();
      }
    });
  }

  getData() {
    this.id = this.route.snapshot.paramMap.get('ID');
    this.isLoadingEnabled = true;
    this.multimediaService
      .getAutoCareSubService({ URL: "/auto-care-service/detailed/" + this.id })
      .subscribe((response) => {
        if (!response) {
          this.router.navigate([this.routeLocalizationPipe.transform('/error/404')], { replaceUrl: true })
          return;
        }

        this.story = {
          title: {
            en: response?.headerTitleEN,
            ar: response?.headerTitleAR
          },
          desc: {
            en: response?.headerDescriptionEN,
            ar: response?.headerDescriptionAR
          }
        };

        this.showPriceSection = response?.showPrices || false;
        this.data = {
          title: {
            en: response.titleEN,
            ar: response.titleAR,
          },
          description: {
            en: response.descriptionEN,
            ar: response.descriptionAR,
          },
          image: response.mainImageID,
          mobileImage: response.mobileImageID,
          keywords: [],
        };
        this.carousel = [
          {
            image: this.sharedService.isValidImage(response.mainVideoID) ? null : response.mainImageID,
            mobileImage: this.sharedService.isValidImage(response.mainVideoID) ? null : response.mobileImageID,
            video: response.mainVideoID,
            title: {
              en: response.titleEN,
              ar: response.titleAR,
            },
            description: {
              en: response.descriptionEN,
              ar: response.descriptionAR,
            },
            link: "",
            paddingBottom: "pb-[61px]",
          },
        ];
        this.updateBreadCrumb();
        this.updateMetaData();
        this.txtData = {
          body1: {
            en: response.contentBox1EN,
            ar: response.contentBox1AR,
          },
          body2: {
            en: response.contentBox2EN,
            ar: response.contentBox2AR,
          },
        };
        this.promotions = (response.offersAndPromotionsData || []).map(
          (item: any) => {
            return {
              link: item.pageURL || "",
              img: this.sharedService.isValidImage(item.productionAreaImageID) || (this.lang === 'en' ? this.sharedService.isValidImage(item.webImageEN) || this.sharedService.isValidImage(item.mobileImageEN) : this.sharedService.isValidImage(item.webImageAR) || this.sharedService.isValidImage(item.mobileImageAR)),
            };
          }
        );
        this.isLoadingEnabled = false;
      },
        (error) => {
          this.router.navigate([this.routeLocalizationPipe.transform('/error/404')], { replaceUrl: true })
        }
      );
  }

  ngOnInit(): void {
    // this.getData();
    this.getPricesCategory();
  }

  getPricesCategory() {
    this.multimediaService
      .getAutoCareSubServicesPricingCategory({ PageSize: 12, PageNumber: 1 })
      .subscribe((response) => {
        this.prices = (response.pageItems || []).map((item: any) => {
          return {
            id: item.autoCareSubServicesPricingCategoryID,
            // icon: item.iconID,
            icon: "assets/svgs/customer-service.svg",
            title: {
              en: item.titleEN,
              ar: item.titleAR,
            },
            desc: {
              en: item.descriptionEN,
              ar: item.descriptionAR,
            },
            table: {
              thead: "",
              tbody: [],
            },
          };
        });
      });
  }

  updateBreadCrumb() {
    this.breadCrumb[2].title = this.data.title[this.lang];
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Auto Care Sub Service | Woqod",
      description:
        this.data.description[this.lang] || "Auto Care Sub Service | Woqod",
      keywords: this.data.keywords || ["Woqod", "Auto Care Sub Service"],
      img: this.data.image
    });
  }

  ngOnDestroy() {
    // Unsubscribe from router events to prevent memory leaks
    this.routerEventsSubscription.unsubscribe();
  }

}
