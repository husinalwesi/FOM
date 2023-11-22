import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { log } from "console";
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";

@Component({
  selector: "app-faqs",
  templateUrl: "./faqs.component.html",
  styleUrls: ["./faqs.component.scss"],
})
export class FaqsComponent {
  title: string = 'FAQ.ALL_CATEGORY';
  selectedTags: any = {};
  tags: any = {
    en: [],
    ar: [],
  };
  data: any = null;
  lang: string = "en";
  // items: any = [];
  items: any = {
    pagination: {
      pageSize: 10,
      pageIndex: 1,
      totalCount: 0
    },
    data: []
  };
  breadCrumb: any = [
    {
      title: "BREADCRUMB.FAQ",
      path: "/auto-care-service",
    },
  ];
  titlePage: string = "SHARED.HOW_HELP";

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  valueItem: any = [];
  search: string = '';
  faqs: any = [];
  keyword: string = '';
  isLoadingEnabled: boolean = true;

  ngOnInit(): void {
    this.getMetaData();
    this.getDetails();
    this.getFAQCategories();
    this.getSubSites();
  }



  getDetails() {
    this.isLoadingEnabled = true;
    let payload: any = {
      pageIndex: this.items.pagination.pageIndex,
      pageSize: this.items.pagination.pageSize,
      searchTerm: this.search
    };
    if (this.keyword) Object.assign(payload, { searchTerm: this.keyword });

    if (this.selectedTags['en'] && this.selectedTags['en'].length > 0) Object.assign(payload, { CategoryID: this.selectedTags['en'][0] });

    const selectedCategory = this.valueItem.filter(
      (item: any) => item.isSelected
    );
    // console.log(selectedCategory);

    if (selectedCategory.length > 0) {
      Object.assign(payload, { CategoryID: selectedCategory[0].id });
    }

    this.multimediaService.getFAQ(payload).subscribe((response) => {
      this.items.pagination.totalCount = response.totalCount;

      this.items.data = (response.pageItems || []).map((item: any) => {
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
      this.isLoadingEnabled = false;
    });
  }

  changeKeyword(keyword: string) {
    this.keyword = keyword;
    this.getDetails();
  }
  tagsSelectionChange(selections: any) {
    this.selectedTags = selections;
    this.getDetails();
  }

  getMetaData() {
    this.multimediaService
      .getContentPageByIDetaData("faq")
      .subscribe((response) => {
        if (response && response.length > 0) {
          // this.getPromotions(response[0].autoCarePagesID);
          this.data = {
            title: {
              en: response[0].titleEN,
              ar: response[0].titleAR,
            },
            description: {
              en: response[0].descriptionEN,
              ar: response[0].descriptionAR,
            },
            keywords: [],
          };
          this.updateBreadCrumb();
          this.updateMetaData();
        }
      });
  }

  updateBreadCrumb() {
    this.breadCrumb[0].title = this.data.title[this.lang];
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Woqod Faqs | Woqod",
      description:
        this.data.description[this.lang] || "Woqod Faqs | Woqod",
      keywords: this.data.keywords || ["Woqod", "Woqod Faqs"],
      img: '',
    });
  }

  toggleCard(data: any) {
    this.valueItem = data;
    this.getDetails();
  }

  getFAQCategories() {
    this.multimediaService.getFAQCategories().subscribe((response) => {
      this.tags.en = (response || []).map((item: any) => {
        return {
          id: item.detailesId,
          title: item.nameEn,
          isSelected: false,
        };
      });

      this.tags.ar = (response || []).map((item: any) => {
        return {
          id: item.detailesId,
          title: item.nameAr,
          isSelected: false,
        };
      });
    });
  }

  getSubSites() {
    this.multimediaService.getSubSitesList().subscribe((response) => {
      const responseArray = Array.isArray(response) ? response : [response];
      this.valueItem = (responseArray || []).map((item: any) => {
        return {
          id: item.stickyIconsSubsitesListID,
          isSelected: false,
          subTitle: {
            en: item.subsiteTitleEN,
            ar: item.subsiteTitleAR,
          },
          description: {
            en: "",
            ar: "",
          },
          svg: item.subsiteIconImageID,
          url: item.subsiteURL || '',
        };
      });
    });
  }
  changePage(pageNo: number) {
    this.items.pagination.pageIndex = pageNo;
    this.getDetails();
  }
}
