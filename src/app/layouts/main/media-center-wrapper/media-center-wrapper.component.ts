import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IHeroBG } from 'src/app/modules/hero-bg-half/hero-bg-half.component';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-media-center-wrapper',
  templateUrl: './media-center-wrapper.component.html',
  styleUrls: ['./media-center-wrapper.component.scss']
})
export class MediaCenterWrapperComponent {
  lang: string = "en";
  isSliderLoadingEnabled: boolean = true;
  mainImage: string = '';
  metaData: any = {
    title: {
      en: '',
      ar: ''
    },
    description: {
      en: '',
      ar: ''
    },
    keywords: {
      en: [],
      ar: []
    }
  };
  breadCrumb: any = [];
  data: any = [];
  events: IHeroBG[] = [];
  selectedTab: string = "";
  constructor(
    private router: Router,
    private multimediaService: MultimediaService,
    private metaTagsService: MetaTagsService,
    private translate: TranslateService,
    private TranslationService: TranslationService,
    private sharedService: SharedService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit() {
    this.enablingSelectedTabLogic();
  }

  getNewsBanner() {
    this.multimediaService.getNewsBanner().subscribe((response) => {
      this.data = (response || []).map((item: any) => {
        return {
          image: item.imageID,
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
          link: item.pageURL || '',
          paddingBottom: 'pb-[61px]',
        }
      });
      this.mainImage = (response || [])?.[0]?.imageID;
      this.updateMetaData();
      this.isSliderLoadingEnabled = false;
    });
  }
  getEventsBanner() {
    this.multimediaService.getEventsBanner().subscribe((response) => {
      this.data = (response || []).map((item: any) => {
        return {
          image: item.imageID,
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
          link: item.pageURL || '',
          paddingBottom: 'pb-[61px]',
        }
      });
      this.isSliderLoadingEnabled = false;
    });
  }

  getMetaDataApiResponse() {
    if (this.selectedTab === "news-and-announcements") return this.multimediaService.getNewsLanding();
    else if (this.selectedTab === "multimedia") return this.multimediaService.getMultimediaLanding();
    else return this.multimediaService.getEventsLanding();
  }

  getMetaData() {
    this.getMetaDataApiResponse().subscribe((response) => {
      const responseObj = Array.isArray(response) ? response[0] : response;
      this.metaData = {
        title: {
          en: responseObj.titleEN,
          ar: responseObj.titleAR
        },
        description: {
          en: responseObj.descriptionEN,
          ar: responseObj.descriptionAR
        },
        keywords: [],

      };
      if (this.selectedTab === "multimedia") {
        this.data = this.sharedService.isValidImage(responseObj.imageID) || this.sharedService.isValidImage(responseObj.mobileImageID) ? [
          {
            image: responseObj.imageID,
            mobileImage: responseObj.mobileImageID,
            video: null,
            title: {
              en: responseObj.titleEN,
              ar: responseObj.titleAR
            },
            description: {
              en: responseObj.descriptionEN,
              ar: responseObj.descriptionAR
            },
            link: '',
            paddingBottom: 'pb-[61px]',
            titleSize: null,
            descSize: null,
          }
        ] : [];
        this.isSliderLoadingEnabled = false;
      }
      if (this.selectedTab === "multimedia" || this.selectedTab === "events") {
        this.mainImage = responseObj.imageID;
        this.updateMetaData();
      }
    });
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.metaData.title[this.lang] || "Media Center | Woqod",
      description: this.metaData.description[this.lang] || "Media Center | Woqod",
      keywords: this.metaData.keywords[this.lang] || ["Woqod", "Media Center"],
      img: this.mainImage,
    });
  }

  enablingSelectedTabLogic() {
    const url = this.router.url;
    this.setSelectedTab(url);
    this.setBreadcrumb(url);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const path = event?.urlAfterRedirects;
        this.setSelectedTab(path);
        this.setBreadcrumb(path);
      }
    });
  }

  setBreadcrumb(path: string) {
    let pathArr = path.split('/');
    let correctPath = pathArr.slice(3);

    this.breadCrumb = [//always it will be there
      {
        title: 'BREADCRUMB.MEDIA_CENTER',
        path: '/media-center'
      },
      {
        title: `BREADCRUMB.${correctPath && correctPath.length > 0 ? correctPath[0].toUpperCase().replaceAll("-", "_") : ''}`,
        path: `/media-center/${correctPath && correctPath.length > 0 ? correctPath[0] : ''}`
      }
    ];

    if (correctPath.length > 1) {
      this.breadCrumb.push({
        title: `BREADCRUMB.${correctPath[1].toUpperCase().replaceAll("-", "_")}`,
        path: `/media-center/${correctPath[0]}/${correctPath[1]}`
      });
    }
  }

  getData() {
    this.isSliderLoadingEnabled = true;
    this.getMetaData();
    if (this.selectedTab === "news-and-announcements") this.getNewsBanner();//
    if (this.selectedTab === "events") this.getEventsBanner();
  }

  setSelectedTab(path: string) {
    // TO DO.. validation for splitting the string 
    this.selectedTab = path.split("/")[3];
    this.getData();
  }

}
