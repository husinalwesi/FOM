import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";

@Component({
  selector: 'app-fahes-faqs',
  templateUrl: './fahes-faqs.component.html',
  styleUrls: ['./fahes-faqs.component.scss']
})
export class FahesFaqsComponent {
  keyword: string = '';
  selectedTags: any = {};
  tags: any = {
    en: [],
    ar: []
  };
  data: any = null;
  lang: string = "en";
  items: any = [];
  breadCrumb: any = [
    {
      title: 'BREADCRUMB.FAQ',
      path: '/auto-care-service'
    }
  ];
  titlePage: string = 'SHARED.HOW_HELP';

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  valueItem: any = [{}];
  faqs: any = [];
  ngOnInit(): void {
    this.getMetaData();
    this.getDetails();
    this.getFAQCategories();
  }

  tagsSelectionChange(selections: any) {
    this.selectedTags = selections;
    this.getDetails();
  }

  getDetails() {
    let payload = {
      pageIndex: 1,
      pageSize: 100
    };

    if (this.keyword) Object.assign(payload, { searchTerm: this.keyword });
    if (this.selectedTags['en'] && this.selectedTags['en'].length > 0) Object.assign(payload, { CategoryID: this.selectedTags['en'][0] });
    this.multimediaService
      .getFahesFaq(payload)
      .subscribe((response) => {
        this.items = (response || []).map((item: any) => {
          return {
            title: {
              en: item.questionEN,
              ar: item.questionAR
            },
            body: {
              en: item.answerEN,
              ar: item.answerAR
            },
          }
        });
      });
  }
  getMetaData() {
    this.multimediaService.getContentPageByIDetaData('fahes-faq').subscribe((response) => {
      if (response && response.length > 0) {
        // this.getPromotions(response[0].autoCarePagesID);
        this.data = {
          title: {
            en: response[0].titleEN,
            ar: response[0].titleAR
          },
          description: {
            en: response[0].descriptionEN,
            ar: response[0].descriptionAR
          },
          keywords: []
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
      title: this.data.title[this.lang] || "Auto Care Service | Woqod",
      description: this.data.description[this.lang] || "Auto Care Service | Woqod",
      keywords: this.data.keywords || ["Woqod", "Auto Care Service"],
      img: '', // Meta Image By Ammar
    });
  }

  getFAQCategories() {
    this.multimediaService.getFahesFAQCategories().subscribe((response) => {
      this.tags.en = (response || []).map((item: any) => {
        return {
          id: item.detailesId,
          title: item.nameEn,
          isSelected: false
        }
      });

      this.tags.ar = (response || []).map((item: any) => {
        return {
          id: item.detailesId,
          title: item.nameAr,
          isSelected: false
        }
      });

    });
  }

  changeKeyword(keyword: string) {
    this.keyword = keyword;
    this.getDetails();
  }

}