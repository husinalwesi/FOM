import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-our-leadership',
  templateUrl: './our-leadership.component.html',
  styleUrls: ['./our-leadership.component.scss']
})
export class OurLeadershipComponent {
  data: any;
  id: any = '';
  lang: string = 'en';
  breadCrumb: any = [
    {
      title: 'BREADCRUMB.ABOUT_US',
      path: '/about-us'
    },
    {
      title: 'BREADCRUMB.ABOUT_US',
      path: '/about-us'
    }
  ];

  teamMembers: any = [];
  leaderships: any = [];
  showFullDescription: boolean = false;

  private routerEventsSubscription: Subscription;

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private route: ActivatedRoute,
    private router: Router,
    private routeLocalizationPipe: RouteLocalizationPipe,
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();

    this.routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getData();
      }
    });


  }

  // ngOnInit(): void {
  //   this.getData();
  // }

  getData() {
    this.getMetaData();
  }


  // Function to toggle the showFullDescription property
  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
  }
  remainingTeamMembers: any = '';

  getMetaData() {
    this.id = this.route.snapshot.paramMap.get('ID');
    this.multimediaService.getOurLeaderShip({ PageURL: `/about-us/leadership/detailed/${this.id}` }).subscribe((response) => {
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
        img: response.imageID,
        hasLeader: response.hasLeader
      };
      this.leaderships = (response.contentPagesData || []).map((item: any) => {
        return {
          link: item.pageURL || '',
          image: item.imageId,
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          category: null,
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          dates: {
            leftDate: null,
            rightDate: null
          }
        }
      });
      this.teamMembers = (response.members || []).map((item: any) => {
        return {
          id: item.boardDirectorMembersID,
          title: {
            en: item.nameEN,
            ar: item.nameAR
          },
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR,
          },
          desc: {
            en: item.positionEN,
            ar: item.positionAR
          },
          img: item.imageID,
        }
      });
      this.remainingTeamMembers = this.teamMembers.slice(1);
      this.updateBreadCrumb();
      this.updateMetaData();
      // this.isLoadingEnabled = false;
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
      title: this.data.title[this.lang] || "About us | Woqod",
      description: this.data.description[this.lang] || "About us | Woqod",
      keywords: this.data.keywords || ["Woqod", "About us"],
      img: this.data.img
    });
  }

  ngOnDestroy() {
    // Unsubscribe from router events to prevent memory leaks
    this.routerEventsSubscription.unsubscribe();
  }

}
