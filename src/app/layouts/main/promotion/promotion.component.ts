import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { SharedService } from 'src/app/services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent {
  private routerEventsSubscription: Subscription;
  isPromotionsLoadingEnabled: boolean = true;
  promotionList: any = {
    pagination: {
      pageSize: 0,
      pageIndex: 0,
      totalCount: 0
    },
    data: []
  };

  carousel: any = [];
  breadCrumb: any = [
    {
      title: 'BREADCRUMB.PROMOTIONS',
      path: '/promotions'
    },
    {
      title: '',
      path: ''
    }
  ];
  lang: string = "en";
  isLoadingEnabled: boolean = true;
  id: string | null = "";
  data: any = null;

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private route: ActivatedRoute,
    private router: Router,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private routeLocalizationPipe: RouteLocalizationPipe,
    private sharedService: SharedService
    ,
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
    this.routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getData();
      }
    });
  }

  ngOnInit(): void {
  }

  getData() {
    this.id = this.route.snapshot.paramMap.get('ID');
    this.getMeta();
  }

  ngOnDestroy() {
    // Unsubscribe from router events to prevent memory leaks
    this.routerEventsSubscription.unsubscribe();
  }

  getMeta() {
    this.isLoadingEnabled = true;
    this.multimediaService.getPromotionDetail({ pageURL: '/promotions/detailed/' + this.id }).subscribe((response) => {
      if (!response) {
        this.router.navigate([this.routeLocalizationPipe.transform('/error/404')], { replaceUrl: true })
        return;
      }
      this.getRelatedPromotions(response.offersAndPromotionsID);
      this.data = {
        title: {
          en: response.titleEN,
          ar: response.titleAR
        },
        description: {
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
        body: {
          en: response.detailsEN,
          ar: response.detailsAR
        },
        image: this.lang === 'en' ? response.webImageEN : response.webImageAR,
        mobileImage: this.lang === 'en' ? response.mobileImageEN : response.mobileImageAR,
        startDate: response.startDate ? new Date(response.startDate) : null,
        endDate: response.endDate ? new Date(response.endDate) : null,
        location: response.extenalLink,
        locationText: {
          en: response.locationNameEN,
          ar: response.locationNameAR
        }
        // "startDate": "2021-08-22T00:00:00",
        // "endDate": "2021-08-23T00:00:00",

      };

      this.updateBreadCrumb();
      this.updateMeta();

      const condition = this.lang === 'en' ? this.sharedService.isValidImage(response.webImageEN) || this.sharedService.isValidImage(response.mobileImageEN) : this.sharedService.isValidImage(response.webImageAR) || this.sharedService.isValidImage(response.mobileImageAR);
      this.carousel = condition ? [
        {
          image: this.lang === 'en' ? response.webImageEN : response.webImageAR,
          mobileImage: this.lang === 'en' ? response.mobileImageEN : response.mobileImageAR,
          video: null,
          title: this.data.title,
          description: this.data.description,
          link: "",
          paddingBottom: 'pb-[61px]',
        }
      ] : [];

      this.isLoadingEnabled = false;

    },

      (error) => {
        this.router.navigate([this.routeLocalizationPipe.transform('/error/404')], { replaceUrl: true })
      }
    );
  }


  updateMeta() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Promotion Details | Woqod",
      description: this.data.description[this.lang] || "Promotion Details | Woqod",
      keywords: ["Woqod", "Promotion Details"],
      img: this.data.img
      // img: ''
    });
  }

  updateBreadCrumb() {
    this.breadCrumb[1].title = this.data.title[this.lang];
  }

  getRelatedPromotions(id: string) {
    this.isPromotionsLoadingEnabled = true;
    this.multimediaService.getRelatedPromotionsList({ id: id }).subscribe((response) => {
      this.promotionList = (response || []).map((item: any) => {
        return {
          id: item.offersAndPromotionsID,
          date: item.modifiedOn ? new Date(item.modifiedOn) : null,
          img: this.sharedService.isValidImage(item.productionAreaImageID) || (this.lang === 'en' ? this.sharedService.isValidImage(item.webImageEN) || this.sharedService.isValidImage(item.mobileImageEN) : this.sharedService.isValidImage(item.webImageAR) || this.sharedService.isValidImage(item.mobileImageAR)),
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          desc: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          link: item.pageURL || '',
        }
      });
      this.isPromotionsLoadingEnabled = false;
    });
  }
  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }
}
