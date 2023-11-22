import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { TranslationService } from 'src/app/i18n/translation.service';

@Component({
  selector: 'app-fahes-media-center-wrapper',
  templateUrl: './fahes-media-center-wrapper.component.html',
  styleUrls: ['./fahes-media-center-wrapper.component.scss']
})
export class FahesMediaCenterWrapperComponent {
  carousel: any = [];
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
    keywords: {
      en: [],
      ar: []
    }
  };
  breadCrumb: any = [];
  data: any = [];
  selectedTab: string = "";
  constructor(
    private router: Router,
    private multimediaService: MultimediaService,
    private metaTagsService: MetaTagsService,
    private translate: TranslateService,
    private TranslationService: TranslationService,
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit() {
    this.enablingSelectedTabLogic();
  }

  getLandingDetails() {
    this.multimediaService.getFahesMultimediaLanding().subscribe((response) => {
      this.data = {
        title: {
          en: response.titleEN,
          ar: response.titleAR
        },
        description: {
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
        keywords: []
      };
      this.carousel = [
        {
          image: response.imageID,
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
      this.updateMetaData();
      this.isLoadingEnabled = false;
    });
  }

  getHeroData() {
    this.multimediaService.getFahesNewsLanding().subscribe((response) => {
      this.data = {
        title: {
          en: response.titleEN,
          ar: response.titleAR
        },
        description: {
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
        keywords: []
      };
      this.carousel = (response.newsDetailsList || []).map((item: any) => {
        return {
          image: item.imageID,
          video: null,
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          link: `/fahes/media-center/news/${item.fahesNewsDetailsID}`,
          paddingBottom: 'pb-[61px]',
        }
      });
      this.updateMetaData();
      this.isLoadingEnabled = false;
    });
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Media Center | Woqod",
      description: this.data.description[this.lang] || "Media Center | Woqod",
      keywords: [] || ["Woqod", "Media Center"],
      img: this.carousel[0].image,
    });
  }

  enablingSelectedTabLogic() {
    const url = this.router.url;
    this.setSelectedTab(url);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const path = event?.urlAfterRedirects;
        this.setSelectedTab(path);
      }
    });
  }


  getData() {
    this.getMetaByPage();
  }

  getMetaByPage() {
    this.isLoadingEnabled = true;
    if (this.selectedTab === "news-and-announcements") this.getHeroData();
    else this.getLandingDetails();
  }

  setSelectedTab(path: string) {
    // TO DO.. validation for splitting the string 
    this.selectedTab = path.split("/")[4];
    this.getData();
  }
}
