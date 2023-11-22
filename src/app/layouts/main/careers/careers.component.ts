import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { TranslationService } from 'src/app/i18n/translation.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
  filters: any;
  carousel: any = [];
  breadCrumb: any = [
    {
      title: 'BREADCRUMB.CAREERS',
      path: '/careers'
    }
  ];
  lang: string = "en";
  isLoadingEnabled: boolean = true;
  data: any = null;

  careers: any = {
    pagination: {
      pageSize: 7,
      pageIndex: 1,
      totalCount: 100//make it 0
    },
    data: []
  };

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit(): void {
    this.getData();
  }


  getData() {
    this.getMetaData();
    this.getHeroCarouselData();
    this.getJobs();
  }

  getJobs() {
    let payload = {
      pageSize: this.careers.pagination.pageSize,
      pageIndex: this.careers.pagination.pageIndex,
    };
    if (this.filters && this.filters.codes && this.filters.codes.length > 0) Object.assign(payload, { jobCode: this.filters.codes[0].title.en });
    if (this.filters && this.filters.location) Object.assign(payload, { currentLocation: this.filters.location.key });
    if (this.filters && this.filters.department) Object.assign(payload, { currentDepartment: this.filters.department.key });
    if (this.filters?.keyword) Object.assign(payload, { keyword: this.filters.keyword });

    if (this.filters?.salaryRange?.min) Object.assign(payload, { salaryFrom: this.filters?.salaryRange?.min });
    if (this.filters?.salaryRange?.max) Object.assign(payload, { salaryTo: this.filters?.salaryRange?.max });


    if (this.filters?.tags && this.filters?.tags.length > 0) Object.assign(payload, { tags: this.filters?.tags.toString() });

    this.multimediaService.getJobs(payload).subscribe((response) => {
      this.careers.pagination.totalCount = response.totalCount;
      const today = new Date();
      this.careers.data = (response.pageItems || []).map((item: any) => {
        return {
          id: item.careersJobsDetailsID,
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          location: {
            en: item.currentLocationEN,
            ar: item.currentLocationAR
          },
          jobType: {
            en: item.jobCodeEN,
            ar: item.jobCodeAR
          },
          date: item.deadLineDate ? new Date(item.deadLineDate) : null
        };
      }).filter((item: any) => item.date && item.date > today);
    });
  }

  getMetaData() {
    this.multimediaService.getContentPageByIDetaData('careers').subscribe((response) => {

      this.data = {
        title: {
          en: response.titleEN,
          ar: response.titleAR
        },
        description: {
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
        keywords: [],
        image: response.mainImageID,
        mobileImage: response.mobileImageID
      };
      this.getHeroCarouselData()
      this.updateBreadCrumb();
    });
  }

  updateBreadCrumb() {
    this.breadCrumb[0].title = this.data.title[this.lang];
  }

  getHeroCarouselData() {
    this.isLoadingEnabled = true;
    this.multimediaService.getCareersCarouselData().subscribe((response) => {
      this.carousel = (response || []).map((item: any) => {
        return {
          image: item.imageFileId,
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
      this.isLoadingEnabled = false;
      this.updateMetaData()
    });
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Why Woqod | Woqod",
      description: this.data.description[this.lang] || "Why Woqod | Woqod",
      keywords: this.data.keywords || ["Woqod", "Why Woqod"],
      img: this.carousel[0]?.image || '',
    });
  }

  changePage(pageNo: number) {
    this.careers.pagination.pageIndex = pageNo;
    this.getJobs();
  }

  filterSubmit(data: any) {
    this.filters = data;
    this.careers.pagination.pageIndex = 1;
    this.getJobs();
  }

}
