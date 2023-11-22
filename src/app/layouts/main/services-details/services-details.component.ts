import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.scss']
})
export class ServicesDetailsComponent {
  private routerEventsSubscription: Subscription;
  textWithImage = {}
  bottomSection: any = {};
  carousel: any = [];
  breadCrumb: any = [
    {
      title: 'BREADCRUMB.SERVICES',
      path: '/'
    },
    {
      title: 'Level 2',
      path: '/'
    },
  ];
  lang: string = "en";
  isLoadingEnabled: boolean = true;
  metaData: any = {
    title: {
      en: 'Service Details',
      ar: 'Service Details'
    },
    description: {
      en: 'Service Details page as content page',
      ar: 'Service Details page as content page'
    },
    keywords: []
  };
  data: any = null;
  teamMembers: any = [];
  pageURL: string | null = "";
  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private router: Router,
    private route: ActivatedRoute,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
    // this.pageURL = this.route.snapshot.paramMap.get('pageURL');

    this.routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // this.pageURL = this.route.snapshot.paramMap.get('pageURL');
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
    this.pageURL = this.route.snapshot.paramMap.get('pageURL');
    this.isLoadingEnabled = true;
    this.multimediaService.getServiceDetail({ pageURL: '/fahes/service-details/' + this.pageURL }).subscribe((response) => {
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
      }
      this.bottomSection = {//null
        title: {
          en: response.bookAppointmentTextEN,
          ar: response.bookAppointmentTextAR,
        },
        btnText: {
          en: response.button1TextEN,
          ar: response.button1TextAR,
        },
        href: response.pageURL || '',
        btnText2: {
          en: response.button2TextEN,
          ar: response.button2TextAR,
        },
        href2: '/fahes/service-inspection'
      }
      this.textWithImage = {//null
        box: {
          en: response.bodyBoxEN,
          ar: response.bodyBoxAR,
        },
        img: response.bodyImageID,
      }
      this.updateBreadCrumb()

      this.carousel = this.data.img
        ? [
          {
            image: this.data.img,
            video: null,
            title: this.data.title,
            description: this.data.description,
            link: "",
            paddingBottom: "pb-[61px]",
          },
        ]
        : [];;
      this.updateMetaData();
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
