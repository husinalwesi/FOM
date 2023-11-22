import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { GUID } from "src/app/const/guid";
@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent {
  private routerEventsSubscription: Subscription;

  showStory: boolean = false;
  relatedContents: any = [];
  relatedCareer: any = [];
  files: any = [];
  carousel: any = [];
  breadCrumb: any = [];
  lang: string = "en";
  isLoadingEnabled: boolean = true;
  metaData: any = {
    title: {
      en: '',
      ar: ''
    },
    description: {
      en: '',
      ar: ''
    },
    btnText: {
      en: '',
      ar: ''
    },
    keywords: []
  };

  bullets: any = [];

  body: any = {
    en: ``,
    ar: ``,
  };
  teamMembers: any = [];
  ourStoryCorporate: any = [];
  pageKey: string = '';
  pageKeyBreadcrumb: string = '';
  level1: string = '';
  level2: string = '';

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private route: ActivatedRoute,
    private TranslationService: TranslationService,
    private router: Router,
    private routeLocalizationPipe: RouteLocalizationPipe,
    private sharedService: SharedService
  ) {
    this.sharedService.enableFullLoader();
    // this.definePage();
    this.lang = this.TranslationService.getSelectedLanguage();
    this.routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // this.definePage();
        this.getData();
      }
    });
  }

  ngOnDestroy() {
    // Unsubscribe from router events to prevent memory leaks
    this.routerEventsSubscription.unsubscribe();
  }

  definePage() {
    const path = this.router.url.indexOf('/') !== -1 ? this.router.url.split("/") : '';
    if (path?.[1] === 'en' || path?.[1] === 'ar') {
      this.level1 = path?.[2];
      const rest: any = path.slice(3);
      this.level2 = rest.join("/");
      this.pageKey = decodeURI(`/${(this.level1)}/${(this.level2)}`);
      this.pageKeyBreadcrumb = decodeURI(`${(this.level1)}/${(this.level2)}`);
    }
  }


  // ngOnInit(): void {
  //   this.getData();
  // }

  getData() {
    this.definePage();
    this.sharedService.enableFullLoader();
    this.isLoadingEnabled = true;
    if (this.level1 === 'corporate-social-responsibility') {
      this.multimediaService.getContentPageByURLCSR({ pageURL: this.pageKey }).subscribe((response) => {
        if (!response || response?.contentPagesID === GUID.empty) {
          this.sharedService.disableFullLoader();
          this.router.navigate([this.routeLocalizationPipe.transform('/error/404')], { replaceUrl: true })
          return;
        }

        if (this.sharedService.isValidImage(response.imageID)) this.carousel = [
          {
            image: response.imageID,
            // mobileImage: response.mobileImageID,
            video: null,
            title: {
              en: response.titleEN,
              ar: response.titleAR
            },
            description: {
              en: response.descriptionEN,
              ar: response.descriptionAR
            },
            link: "",
            paddingBottom: 'pb-[61px]',
          }
        ];

        this.metaData = {
          title: {
            en: response.titleEN,
            ar: response.titleAR
          },
          description: {
            en: response.descriptionEN,
            ar: response.descriptionAR
          },
          keywords: [],
          img: response.imageID
        };
        this.ourStoryCorporate = {
          title: {
            en: response.areaOneTitleEN,
            ar: response.areaOneTitleAR
          },
          description: {
            en: response.areaOneDescriptionEN,
            ar: response.areaOneDescriptionAR
          },
          keywords: [],
          img: response.imageID,
          titleArea2: {
            en: response.areaTwoTitleEN || 'ABOUT_US.RLEATED_CONTENT',
            ar: response.areaTwoTitleAR || 'ABOUT_US.RLEATED_CONTENT',
          }
        }
        this.relatedContents = (response.eventsList || []).map((item: any) => {
          return {
            link: item.pageURL || '',
            image: this.sharedService.isValidImage(item.productionAreaImageID) || this.sharedService.isValidImage(item.imageID) || this.sharedService.isValidImage(item.mobileImageID),
            video: null,
            title: {
              en: item.titleEN,
              ar: item.titleAR
            },
            category: {//
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
                text: 'MEDIA_CENTER.START_DATE',
                date: item.fromDate ? new Date(item.fromDate) : null
              },
              rightDate: {
                text: 'MEDIA_CENTER.END_DATE',
                date: item.toDate ? new Date(item.toDate) : null
              }
            }
          }
        });

        this.updateMetaData();
        this.updateBreadCrumb();
        this.isLoadingEnabled = false;
        this.sharedService.disableFullLoader();
      },
        (error) => {
          this.sharedService.disableFullLoader();
          this.router.navigate([this.routeLocalizationPipe.transform('/error/404')], { replaceUrl: true })
        }
      );
    } else {
      this.multimediaService.getContentPageByURL({ pageURL: this.pageKey }).subscribe((response) => {
        if (!response || response?.contentPagesID === GUID.empty) {
          this.sharedService.disableFullLoader();
          this.router.navigate([this.routeLocalizationPipe.transform('/error/404')], { replaceUrl: true })
          return;
        }
        if ((response.relatedImages || []).length > 0) {
          this.carousel = (response.relatedImages || []).filter((item: any) => this.sharedService.isValidImage(item.imageFileId) || this.sharedService.isValidImage(item.mobileImageID)).map((item: any) => {
            return {
              image: item.imageFileId,
              mobileImage: item.mobileImageID,
              video: null,
              title: {
                en: item.titleEN,
                ar: item.titleAR
              },
              description: {
                en: item.descriptionEN,
                ar: item.descriptionAR
              },
              link: "",
              paddingBottom: 'pb-[61px]',
            }
          });
          this.showStory = true;
        } else {
          if (this.sharedService.isValidImage(response.imageId) || this.sharedService.isValidImage(response.mobileImageID)) this.carousel = [
            {
              image: response.imageId,
              mobileImage: response.mobileImageID,
              video: null,
              title: {
                en: response.titleEN,
                ar: response.titleAR
              },
              description: {
                en: response.descriptionEN,
                ar: response.descriptionAR
              },
              link: "",
              paddingBottom: 'pb-[61px]',
            }
          ];
        }

        this.metaData = {
          title: {
            en: response.titleEN,
            ar: response.titleAR
          },
          description: {
            en: response.descriptionEN,
            ar: response.descriptionAR
          },
          btnText: {
            en: response.btnTxtEN,
            ar: response.btnTxtAR
          },
          keywords: [],
          img: this.carousel?.[0]?.image
        };

        if (response?.bodyEN || response?.bodyAR) {
          this.body = {
            en: response?.bodyEN || '',
            ar: response?.bodyAR || '',
          };
        } else if (response?.detailsEN || response?.detailsAR) {
          this.body = {
            en: response?.detailsEN || '',
            ar: response?.detailsAR || '',
          };
        } else {
          this.body = {
            en: response?.detailEN || '',
            ar: response?.detailAR || '',
          };
        }

        if (this.level1 === 'careers') {
          this.relatedCareer = (response.relatedPages || []).map((item: any) => {
            return {
              title: {
                en: item.titleEN,
                ar: item.titleAR,
              },
              desc: {
                en: item.descriptionEN,
                ar: item.descriptionAR,
              },
              link: item.pageURL || "",
              img: item.mainIconID,
            }
          });
        } else {
          this.relatedContents = (response.relatedPages || []).map((item: any) => {
            return {
              link: item.pageURL || '',
              image: this.sharedService.isValidImage(item.productionAreaImageID) || this.sharedService.isValidImage(item.imageId) || this.sharedService.isValidImage(item.mobileImageID),
              video: null,
              title: {
                en: item.titleEN,
                ar: item.titleAR
              },
              description: {
                en: item.descriptionEN,
                ar: item.descriptionAR
              },
              paddingBottom: 'pb-[61px]',
              dates: {
                leftDate: null,
                rightDate: null
              }
            }
          });
        }

        this.bullets = (response.bulletsList || []).map((item: any) => {
          return {
            subTitle: {
              en: item.titleEN,
              ar: item.titleAR,
            },
            description: {
              en: item.descriptionEN,
              ar: item.descriptionAR,
            },
            svg: item.iconID,
          }
        });

        this.files = (response.relatedWoqodfiles || []).map((item: any) => {
          return {
            file: item.fileObjectID,
            icon: 'assets/images/pdf-new.webp',
            title: {
              en: item.titleEN,
              ar: item.titleAR
            }
          }
        });
        this.teamMembers = (response.teamMembersList || []).map((item: any) => {
          return {
            title: {
              en: item.nameEN,
              ar: item.nameAR
            },
            desc: {
              en: item.positionEN,
              ar: item.positionAR
            },
            description: {
              en: item.descriptionEN,
              ar: item.descriptionAR
            },
            img: item.imageID,
          }
        });

        this.updateMetaData();
        this.updateBreadCrumb();
        this.isLoadingEnabled = false;
        this.sharedService.disableFullLoader();
      },
        (error) => {
          this.sharedService.disableFullLoader();
          this.router.navigate([this.routeLocalizationPipe.transform('/error/404')], { replaceUrl: true })
        }
      );
    }
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.metaData.title[this.lang],
      description: this.metaData.description[this.lang],
      keywords: this.metaData.keywords,
      img: this.metaData.img,
    });
  }

  updateBreadCrumb() {
    const level1 = this.level1 || '';
    const pages = [
      {
        key: 'business-continuity-management',
        translate: 'BREADCRUMB.BUSINESS_CONTINUITY_MANAGEMENT',
        url: '/business-continuity-management'
      },
      {
        key: 'enterprise-risk-management',
        translate: 'BREADCRUMB.ENTERPRISE_RISK_MANAGEMENT',
        url: '/enterprise-risk-management'
      },
      {
        key: 'tenders-and-supplier',
        translate: 'BREADCRUMB.TENDER_AND_SUPPLIER',
        url: '/tenders-and-supplier'
      },
      {
        key: 'careers',
        translate: 'BREADCRUMB.CAREERS',
        url: '/careers'
      },
      {
        key: 'investor-relation',
        translate: 'BREADCRUMB.BUSINESS_CONTINUITY_MANAGEMENT',
        url: '#'
      },
      {
        key: 'pages',
        translate: 'BREADCRUMB.PAGES',
        url: '#'
      },
      {
        key: 'corporate-social-responsibility',
        translate: 'BREADCRUMB.CORPORATE_SOCIAL_RESPONSIBILITY',
        url: '/corporate-social-responsibility'
      },
    ];

    const level1Breadcrumb = pages.find(page => page.key === level1);

    this.breadCrumb = [];
    if (level1Breadcrumb) this.breadCrumb.push({
      title: level1Breadcrumb.translate,
      path: level1Breadcrumb.url
    });


    this.breadCrumb.push({
      title: this.metaData.title[this.lang],
      path: '/'
    });

  }


}
