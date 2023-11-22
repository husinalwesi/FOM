import { Component } from '@angular/core';
import { TranslationService } from 'src/app/i18n/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fahes-news-detailed',
  templateUrl: './fahes-news-detailed.component.html',
  styleUrls: ['./fahes-news-detailed.component.scss']
})

export class FahesNewsDetailedComponent {
  private routerEventsSubscription: Subscription;
  relatedNews: any = {
    data: []
  };
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
  isRelatedLoadingEnabled: boolean = true;
  id: string | null = "";
  data: any = null;

  constructor(
    private translate: TranslateService,
    private TranslationService: TranslationService,
    private metaTagsService: MetaTagsService,
    private route: ActivatedRoute,
    private router: Router,
    private multimediaService: MultimediaService,
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

  getRelatedNews() {
    this.isRelatedLoadingEnabled = true;
    this.multimediaService.getRelatedNewsFahes({ id: this.id }).subscribe((response) => {
      this.relatedNews.data = (response || []).map((item: any) => {
        return {
          link: `/fahes/media-center/news/${item.fahesNewsDetailsID}`,
          img: item.imageID,
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          location: null,
          date: item.newsDate ? new Date(item.newsDate) : null
        }
      });
      this.isRelatedLoadingEnabled = false;
    });
  }

  getMetaData() {
    this.isLoadingEnabled = true;
    this.multimediaService.getFahesNewsDetails({ id: this.id }).subscribe((response) => {
      if (!response) return;
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
    this.getRelatedNews();
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

  ngOnDestroy() {
    // Unsubscribe from router events to prevent memory leaks
    this.routerEventsSubscription.unsubscribe();
  }

}

