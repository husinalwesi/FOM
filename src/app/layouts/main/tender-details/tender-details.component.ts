import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tender-details',
  templateUrl: './tender-details.component.html',
  styleUrls: ['./tender-details.component.scss']
})
export class TenderDetailsComponent {
  private routerEventsSubscription: Subscription;
  isModalEnabled1: boolean = false;
  breadCrumb: any = [
    {
      title: 'BREADCRUMB.TENDER_AND_SUPPLIER',
      path: '/tenders-and-supplier'
    },
    {
      title: 'BREADCRUMB.TENDER_DETAILS',
      path: '/'
    }
  ];
  lang: string = "en";
  isLoadingEnabled: boolean = true;
  id: string | null = "";
  data: any = null;
  Document: any = [];

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private route: ActivatedRoute,
    private router: Router,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private routeLocalizationPipe: RouteLocalizationPipe,
    @Inject(PLATFORM_ID) private platformId: Object
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
  // getTenderDetail
  getData() {
    this.id = this.route.snapshot.paramMap.get('ID');
    this.isLoadingEnabled = true;
    this.multimediaService.getTenderDetail({ URL: '/tenders-and-supplier/detailed/' + this.id }).subscribe((response) => {
      if (!response) {
        this.router.navigate([this.routeLocalizationPipe.transform('/error/404')], { replaceUrl: true })
        return;
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
        scopeOfWork: {
          en: response.scopeOfWorkEN,
          ar: response.scopeOfWorkAR
        },
        details: {
          en: response.detailsEN,
          ar: response.detailsAR
        },
        category: {
          en: response.categoryNameEN,
          ar: response.categoryNameAR
        },
        sNumber: response.serialNumber,
        tenderNumber: response.tenderNumber,
        date: response.closingDate ? new Date(response.closingDate) : null,
        lastdate: response.lastCollectionDate ? new Date(response.lastCollectionDate) : null,
        fee: response.fee
      };
      const token = isPlatformBrowser(this.platformId) ? localStorage.getItem('token') : null;
      if (token) {
        this.Document = (response.tenderDocuments || []).map((item: any) => {
          return {
            title: item.fileName,
            file: item.fileId,
          };
        }
        );
      }

      this.updateBreadCrumb();
      this.updateMetaData();
      this.isLoadingEnabled = false;
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
      img: '',
    });
  }
  ngOnDestroy() {
    // Unsubscribe from router events to prevent memory leaks
    this.routerEventsSubscription.unsubscribe();
  }

}


