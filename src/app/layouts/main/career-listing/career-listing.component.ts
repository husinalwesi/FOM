import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-career-listing',
  templateUrl: './career-listing.component.html',
  styleUrls: ['./career-listing.component.scss']
})
export class CareerListingComponent {
  private routerEventsSubscription: Subscription;
  isModalEnabled1: boolean = false;
  breadCrumb: any = [
    {
      title: 'BREADCRUMB.CAREERS',
      path: '/careers'
    },
    {
      title: 'BREADCRUMB.CAREERS',
      path: '/careers'
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
      title: "News Details | Woqod",
      description: "News Details | Woqod",
      keywords: ["Woqod 1", "Woqod 2"]
    });
  }

  // ngOnInit(): void {
  //   this.getData();
  // }

  getData() {
    this.id = this.route.snapshot.paramMap.get('ID');
    this.isLoadingEnabled = true;
    this.multimediaService.getCareerDetail({ id: this.id }).subscribe((response) => {
      this.data = {
        id: this.id,
        title: {
          en: response.titleEN,
          ar: response.titleAR
        },
        description: {
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
        jobcode: {
          en: response.jobCodeEN,
          ar: response.jobCodeAR
        },
        currentlocation: {
          en: response.currentLocationEN,
          ar: response.currentLocationAR
        },
        details: {
          en: response.detailEN,
          ar: response.detailAR
        },
        requirement: {
          en: response.requirementEN,
          ar: response.requirementAR
        },
        sub: response.subsidiaries,
        department: response.department,
        city: {
          en: response.cityEN,
          ar: response.cityAR,
        },
        state: {
          en: response.state_ProvinceEN,
          ar: response.state_ProvinceAR,
        },
        country: {
          en: response.countryEN,
          ar: response.countryAR,
        },
        zip: {
          en: response.zip_Postal_codeEN,
          ar: response.zip_Postal_codeAR,
        },
        tags: {
          en: response.tagsEN,
          ar: response.tagsAR,
        },
        salaryTo: response.salaryTo,
        salaryFrom: response.salaryFrom,
        date: new Date(response.modifiedOn),
        industry: {
          en: response.industryNameEN || '-',
          ar: response.industryNameAR || '-'
        }
      };
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
      img: '', // Meta Image By Ammar
    });
  }

  ngOnDestroy() {
    // Unsubscribe from router events to prevent memory leaks
    this.routerEventsSubscription.unsubscribe();
  }

}
