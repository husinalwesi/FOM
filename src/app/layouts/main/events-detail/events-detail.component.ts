import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { SharedService } from 'src/app/services/shared.service';
import { ResizeService } from 'src/app/services/resize.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.scss']
})
export class EventsDetailComponent {
  private routerEventsSubscription: Subscription;
  relatedTitle = "MEDIA_CENTER.RELATED_EVENTS"
  carousel: any = [];
  heightMain: number = 0;
  isZoomed: boolean = false;

  @ViewChild('card') card!: ElementRef;
  breadCrumb: any = [
    {
      title: 'BREADCRUMB.MEDIA_CENTER',
      path: '/media-center'
    },
    {
      title: 'BREADCRUMB.MEDIA_CENTER',
      path: '/media-center'
    }
  ];
  lang: string = "en";
  isLoadingEnabled: boolean = true;
  id: string | null = "";
  data: any = null;
  relatedNews: any = {
    data: []
  };
  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private route: ActivatedRoute,
    private router: Router,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private routeLocalizationPipe: RouteLocalizationPipe,
    private sharedService: SharedService,
    private resizeService: ResizeService,
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
    // this.id = this.route.snapshot.paramMap.get('ID');

    this.routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // this.id = this.route.snapshot.paramMap.get('ID');
        this.getData();
      }
    });
  }

  // ngOnInit(): void {
  //   this.getData();
  // }

  getData() {
    this.id = this.route.snapshot.paramMap.get('ID');
    this.isLoadingEnabled = true;
    this.multimediaService.getEventDetail({ pageURL: '/media-center/events/detailed/' + this.id }).subscribe((response) => {
      if (!response) {
        this.router.navigate([this.routeLocalizationPipe.transform('/error/404')], { replaceUrl: true })
      }
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
          en: response.detailEN,
          ar: response.detailAR
        },
        // img: this.sharedService.isValidImage(response.productionAreaImageID) || this.sharedService.isValidImage(response.imageID) || this.sharedService.isValidImage(response.mobileImageID),
        img: this.sharedService.isValidImage(response.productionAreaImageID),
        // img: this.resizeService.isMobile() ? this.sharedService.isValidImage(response.mobileImageID) || this.sharedService.isValidImage(response.imageID) : this.sharedService.isValidImage(response.imageID) || this.sharedService.isValidImage(response.mobileImageID),
        date: response.publishedOn ? new Date(response.publishedOn) : null,
        location: response.location,

        startDate: response.fromDate ? new Date(response.fromDate) : null,
        endDate: response.toDate ? new Date(response.toDate) : null,
      };
      this.relatedNews.data = (response.relatedEventDetails || []).map((item: any) => {
        return {
          link: item.pageURL || '',
          image: this.sharedService.isValidImage(item.productionAreaImageID) || this.sharedService.isValidImage(item.imageID) || this.sharedService.isValidImage(item.mobileImageID),
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          category: {
            en: item.categoryNameEN,
            ar: item.categoryNameAR
          },
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          location: item.location,
          dates: {
            leftDate: {
              text: 'MEDIA_CENTER.PUBLISHED',
              date: item.fromDate ? new Date(item.fromDate) : null
            },
            rightDate: {
              text: 'MEDIA_CENTER.PUBLISHED',
              date: item.toDate ? new Date(item.toDate) : null
            }
          }
        }
      });
      this.updateBreadCrumb();
      this.updateMetaData();
      this.isLoadingEnabled = false;
      setTimeout(() => {
        this.updateCarouselConfig();
      });
    },
      (error) => {
        this.router.navigate([this.routeLocalizationPipe.transform('/error/404')], { replaceUrl: true })
      }
    );
  }

  updateBreadCrumb() {
    this.breadCrumb[1].title = this.data.title[this.lang];
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "News Details | Woqod",
      description: this.data.description[this.lang] || "News Details | Woqod",
      keywords: this.data.keywords || ["Woqod", "News Details"],
      img: this.data.img
    });
  }
  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }

  ngAfterViewInit(): void {
    this.resizeService.screenWidthChange$.subscribe(data => this.updateCarouselConfig());
    this.resizeService.screenWidthChange$.subscribe(data => this.mobileResize());
  }

  updateCarouselConfig() {
    if (typeof window !== 'undefined') {
      const ratio: number = 440 / 270;
      this.heightMain = (this.card?.nativeElement?.offsetWidth || 0) / ratio;
    }
  }

  viewImage() {
    if (this.resizeService.isDesktop()) {
      this.isZoomed = !this.isZoomed;
      setTimeout(() => {
        this.updateCarouselConfig();
      });
    }
  }

  mobileResize() {
    if (!this.resizeService.isDesktop()) {
      this.isZoomed = false;
      setTimeout(() => {
        this.updateCarouselConfig();
      });
    }
  }

  ngOnDestroy() {
    // Unsubscribe from router events to prevent memory leaks
    this.routerEventsSubscription.unsubscribe();
  }

}
