import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { Store } from '@ngrx/store';
import { selectVisitedNews } from 'src/app/store/news/news.selectors';
import { getVisitedNews } from 'src/app/store/news/news.action';
import { SharedService } from 'src/app/services/shared.service';
import { ResizeService } from 'src/app/services/resize.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent {
  private routerEventsSubscription: Subscription;
  relatedTitle = "MEDIA_CENTER.RELATED_NEWS"
  relatedNews: any = {
    data: []
  };
  isZoomed: boolean = false;
  selectedImage: string = '';
  isModalEnabled: boolean = false;
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
  isRelatedLoadingEnabled: boolean = true;
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
    private store: Store,
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

  getRelatedNews(id: string) {
    this.isRelatedLoadingEnabled = true;
    this.multimediaService.getRelatedNews({ id: id }).subscribe((response) => {
      this.relatedNews.data = (response || []).slice(0, 9).map((item: any) => {
        return {
          link: item.pageURL || '',
          image: this.sharedService.isValidImage(item.productionAreaImageID) || this.sharedService.isValidImage(item.imageID) || this.sharedService.isValidImage(item.mobileImageID),
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          category: {
            en: null,
            ar: null
          },
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          location: null,
          dates: {
            leftDate: null,
            rightDate: {
              text: 'MEDIA_CENTER.PUBLISHED',
              date: item.modifiedOn ? new Date(item.modifiedOn) : null
            }
          }
        }
      });
      this.isRelatedLoadingEnabled = false;
    });
  }

  getMetaData() {
    this.isLoadingEnabled = true;
    this.multimediaService.getNewsDetail({ PageURL: '/media-center/news-and-announcements/detailed/' + this.id }).subscribe((response) => {
      if (!response) {
        this.router.navigate([this.routeLocalizationPipe.transform('/error/404')], { replaceUrl: true })
        return;
      }
      this.getRelatedNews(response.newsDetailsID);
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
          en: response.bodyEN,
          ar: response.bodyAR
        },
        img: this.sharedService.isValidImage(response.productionAreaImageID),
        // img: this.sharedService.isValidImage(response.productionAreaImageID) || this.sharedService.isValidImage(response.imageID) || this.sharedService.isValidImage(response.mobileImageID),
        // img: this.resizeService.isMobile() ? this.sharedService.isValidImage(response.mobileImageID) || this.sharedService.isValidImage(response.imageID) : this.sharedService.isValidImage(response.imageID) || this.sharedService.isValidImage(response.mobileImageID),
        date: new Date(response.modifiedOn)
      };
      setTimeout(() => {
        this.updateCarouselConfig();
      });
      this.updateBreadCrumb();
      this.updateMetaData();
      this.isLoadingEnabled = false;
      this.store.select(selectVisitedNews).subscribe((news) => {
        let id = Date.parse(this.data.date).toString()
        if (news.length > 0) {
          if (news.every((item: any) => item !== id)) {
            news = [...news, id]
            this.store.dispatch(getVisitedNews({ news: news }))
          }
        } else {
          this.store.dispatch(getVisitedNews({ news: [id.toString()] }))
        }
      })
    },
      (error) => {
        this.router.navigate([this.routeLocalizationPipe.transform('/error/404')], { replaceUrl: true })
      }
    );
  }

  getData() {
    this.id = this.route.snapshot.paramMap.get('ID');
    this.getMetaData();
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

  heightMain: number = 0;

  @ViewChild('card') card!: ElementRef;


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
