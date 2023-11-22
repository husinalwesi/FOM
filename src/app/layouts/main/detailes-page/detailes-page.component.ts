import { Component } from '@angular/core';
import { TranslationService } from 'src/app/i18n/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { LoadAssetsService } from 'src/app/load-assets.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detailes-page',
  templateUrl: './detailes-page.component.html',
  styleUrls: ['./detailes-page.component.scss']
})
export class DetailesPageComponent {
  private routerEventsSubscription: Subscription;
  breadCrumb: any = [
    {
      title: 'BREADCRUMB.MEDIA_CENTER',
      path: '/fahes/media-center'
    },
    {
      title: 'BREADCRUMB.MEDIA_CENTER',
      path: ''
    }
  ];
  lang: string = "en";
  isLoadingEnabled: boolean = true;
  id: string | null = "";
  data: any = null;

  constructor(
    private translate: TranslateService,
    private TranslationService: TranslationService,
    private loadAssetsService: LoadAssetsService,
    private metaTagsService: MetaTagsService,
    private route: ActivatedRoute,
    private router: Router,
    private multimediaService: MultimediaService,
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
    // this.id = this.route.snapshot.paramMap.get('ID');
    this.loadAssetsService.loadCss('assets/css/carousel.css', 'carousel-default');

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

  getMetaData() {
    this.isLoadingEnabled = true;
    this.multimediaService.getFahesEventDetails({ id: this.id }).subscribe((response) => {
      this.data = {
        title: {
          en: response.titleEN,
          ar: response.titleAR
        },
        description: {
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
        // body: {
        //   en: response.bodyEN,
        //   ar: response.bodyAR
        // },
        img: response.imageID,
        date: new Date(response.modifiedOn)
      };
      this.updateBreadCrumb();
      this.updateMetaData();
      this.isLoadingEnabled = false;
    });
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
      title: this.data.title[this.lang] || "Event Details | Fahes",
      description: this.data.description[this.lang] || "Event Details | Fahes",
      keywords: this.data.keywords || ["Fahes", "Event Details"],
      img: this.data.img
    });
  }

  ngOnDestroy() {
    // Unsubscribe from router events to prevent memory leaks
    this.routerEventsSubscription.unsubscribe();
  }

}

