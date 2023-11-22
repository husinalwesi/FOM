import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { RouteLocalizationPipe } from "src/app/pipes/route-localization.pipe";
import { SharedService } from "src/app/services/shared.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent {
  private routerEventsSubscription: Subscription;
  carousel: any = [];
  breadCrumb: any = [
    {
      title: "E_SERVICES_SECTION.PRODUCT_SERVICES",
      path: "/product-and-service",
    },
    {
      title: "",
      path: "",
    },
  ];
  area7Title: any = {
    en: "Related Services",
    ar: "الخدمات ذات الصلة",
  };
  fahesStroy: any = {};
  bullets: any = [];
  lang: string = "en";
  isLoadingEnabled: boolean = true;
  isSliderLoadingEnabled: boolean = true;
  data: any = null;
  teamMembers: any = [];
  id: string | null = "";

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private router: Router,
    private route: ActivatedRoute,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private routeLocalizationPipe: RouteLocalizationPipe,
    private sharedService: SharedService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
    // this.id = this.route.snapshot.paramMap.get('ID');

    this.routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // this.id = this.route.snapshot.paramMap.get('ID');
        this.getData();
      }
    });

    this.metaTagsService.updateMetaTags({
      title: "Tender Details| Woqod",
      description: "Tender Details| Woqod",
      keywords: ["Woqod 1", "Woqod 2"]
    });
  }

  // ngOnInit(): void {
  //   this.getData();
  // }

  getData() {
    this.id = this.route.snapshot.paramMap.get('ID');
    this.isSliderLoadingEnabled = true;
    this.multimediaService.getProductDetail({ PageURL: '/product-and-service/product/' + this.id }).subscribe((response) => {
      if (!response) {
        this.router.navigate([this.routeLocalizationPipe.transform('/error/404')], { replaceUrl: true })
        return;
      }
      this.getBullets(response.woqodProductID);
      this.data = {
        title: {
          en: response.titleEN,
          ar: response.titleAR
        },
        description: {
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
        img: response.imageID,
        mobileImage: response.mobileImageID,
        details: {
          en: response.detailsEN,
          ar: response.detailsAR,
        }
      }
      this.fahesStroy = {
        title: {
          en: response.contractInitTextEN,
          ar: response.contractInitTextAR,
        },
        btnText: {
          en: response.contractInitBtnTextEN,
          ar: response.contractInitBtnTextAR,
        },
        href: response.contractInitBtnURL || '',
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
        : [];;
      this.updateMetaData();
      this.isSliderLoadingEnabled = false;
    },
      (error) => {
        this.router.navigate([this.routeLocalizationPipe.transform('/error/404')], { replaceUrl: true })
      }
    );
  }
  getBullets(id: string) {
    this.isLoadingEnabled = true;
    this.multimediaService.getProductBulletsDetail({ id: id }).subscribe((response) => {
      this.bullets = (response || []).map((item: any) => {
        return {
          description: {
            en: item.titleEN,
            ar: item.titleAR,
          },
          svg: item.iconID,
          keywords: [],

        }
      })
      this.isLoadingEnabled = false;
    });
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
      img: this.data.img
    });
  }

  ngOnDestroy() {
    // Unsubscribe from router events to prevent memory leaks
    this.routerEventsSubscription.unsubscribe();
  }

}
