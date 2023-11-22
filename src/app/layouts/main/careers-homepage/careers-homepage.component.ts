import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { ResizeService } from "src/app/services/resize.service";
import { Router } from '@angular/router';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';

@Component({
  selector: "app-careers-homepage",
  templateUrl: "./careers-homepage.component.html",
  styleUrls: ["./careers-homepage.component.scss"],
})
export class CareersHomepageComponent {
  showAnswer = false;
  area3Title: any = {
    en: '',
    ar: ''
  };
  items: any = null;
  area2Articles: any = null;
  area3Articles: any = null;
  contentBox: any = null;
  careerJobs: any = null;
  lang: string = "en";
  faqs: any = null;
  jobs: any = [];
  ourValues: any = [];
  meetOurTeam: any = [];
  tags: any = [];

  carousel: any = [];
  breadCrumb: any = [
    {
      title: "BREADCRUMB.CAREERS",
      path: "/careers",
    },
  ];
  isLoadingEnabled: boolean = true;
  isSliderLoadingEnabled: boolean = true;
  data: any = null;
  bullets: any = null;
  areaOne: any = null;
  areaTwo: any = null;

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private resizeService: ResizeService,
    private router: Router,
    private routeLocalizationPipe: RouteLocalizationPipe,
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }
  ViewAllJobs() {
    if (this.lang === 'en') {
      this.router.navigateByUrl(this.routeLocalizationPipe.transform(`/en/careers/view-all-jobs`));
    }
    else {
      if (typeof window !== 'undefined') {
        window.location.href = '/en/careers/view-all-jobs'
      }
    }
  }
  ngOnInit(): void {
    this.getData();
    this.getBreadCrumbData();
    this.getAreaOne();
    this.getAreaTwo();
    this.getAreaThree();
    this.getFaqs();
    this.getCareerJobs();
  }

  getBreadCrumbData() {
    this.isLoadingEnabled = true;
    this.multimediaService.getCareerTitle().subscribe((response) => {
      this.area3Title = {
        en: response.workingAtWoqodEN,
        ar: response.workingAtWoqodAR,
      };
      this.contentBox = {
        title: {
          en: response.contentBoxOneEN,
          ar: response.contentBoxOneAR,
        },
      };
      this.data = {
        title: {
          en: response.titleEN,
          ar: response.titleAR,
        },
        description: {
          en: response.descriptionEN,
          ar: response.descriptionAR,
        },
        image: response.mainImageID,
        mobileImage: response.mobileImageID
      };
      this.getData();
      this.updateBreadCrumb();
      this.isLoadingEnabled = false;
    });
  }


  getData() {
    this.isSliderLoadingEnabled = true;
    this.multimediaService.getCareerHome().subscribe((response) => {
      this.carousel = (response || []).map((item: any) => {
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
      if (this.carousel.length == 0) {
        this.carousel = [{
          image: this.data?.image,
          mobileImage: this.data?.mobileImage,
          video: null,
          title: {
            en: this.data.title.en,
            ar: this.data.title.ar
          },
          description: {
            en: this.data.description.en,
            ar: this.data.description.ar
          },
          link: "",
          paddingBottom: 'pb-[61px]',
        }]
      }
      this.updateMetaData();
      this.isSliderLoadingEnabled = false;
    });
  }
  getAreaOne() {
    this.isLoadingEnabled = true;
    this.multimediaService.getCareerLandingAreaOne().subscribe((response) => {
      this.items = (response || []).map((item: any) => {
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
        };
      });
    });
  }

  getAreaThree() {
    this.isLoadingEnabled = true;
    this.multimediaService.getCareerLandingAreaThree().subscribe((response) => {
      this.area3Articles = (response || []).map((item: any) => {
        return {
          subTitle: {
            en: item.titleEN,
            ar: item.titleAR,
          },
          btnText: {
            en: item.descriptionEN,
            ar: item.descriptionAR,
          },
          link: item.pageURL || "",
          img: item.productionAreaImageID,
        };
      });
    });
  }
  getAreaTwo() {
    this.isLoadingEnabled = true;
    this.multimediaService.getCareerLandingAreaTwo().subscribe((response) => {
      this.area2Articles = (response || []).map((item: any) => {
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
        };
      });
    });
  }
  getFaqs() {
    this.isLoadingEnabled = true;
    this.multimediaService.getCareerFaqs({ PageIndex: 1, PageSize: 10 }).subscribe((response) => {
      this.faqs = (response.pageItems || []).map((item: any) => {
        return {
          title: {
            en: item.questionEN,
            ar: item.questionAR,
          },
          body: {
            en: item.answerEN,
            ar: item.answerAR,
          },
        };
      });
    });
  }
  getCareerJobs() {
    this.isLoadingEnabled = true;
    this.multimediaService.getCareerJobs().subscribe((response) => {
      this.jobs = (response.pageItems || []).map((item: any) => {
        return {
          id: item.careersJobsDetailsID,
          title: {
            en: item.titleEN,
            ar: item.titleAR,
          },
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR,
          },
          location: {
            en: item.currentLocationEN,
            ar: item.currentLocationAR,
          },
          jobType: {
            en: item.jobCodeEN,
            ar: item.jobCodeAR,
          },
          date: item.deadLineDate ? new Date(item.deadLineDate) : null,
        };
      });
    });
  }
  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data?.title[this.lang] || "Career Home-Page | Woqod",
      description:
        this.data?.description[this.lang] || "Career Home-Page | Woqod",
      keywords: this.data?.keywords || ["Woqod", "Career Home-Page"],
      img: this.carousel[0]?.image || '',
    });
  }

  updateBreadCrumb() {
    this.breadCrumb[0].title = this.data.title[this.lang];
  }
}
