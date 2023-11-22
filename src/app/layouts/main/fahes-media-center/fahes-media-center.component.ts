import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";

@Component({
  selector: 'app-fahes-media-center',
  templateUrl: './fahes-media-center.component.html',
  styleUrls: ['./fahes-media-center.component.scss']
})
export class FahesMediaCenterComponent {
  lang: string = "en";
  news: any = [];
  slidesStore: any = [];

  constructor(
    private translate: TranslateService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit(): void {
    this.getNews();
    this.getMilestones();
  }

  getNews() {
    this.multimediaService.getFahesNews().subscribe((response) => {
      this.news = (response || []).map((item: any) => {
        return {
          id: item.fahesNewsDetailsID,
          date: item.newsDate ? new Date(item.newsDate) : null,
          img: item.imageID,
          category: {
            en: item.categoryNameEn,
            ar: item.categoryNameAr,
          },
          title: {
            en: item.titleEN,
            ar: item.titleAR,
          },
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR,
          },
          link: `/fahes/media-center/news/${item.fahesNewsDetailsID}`
        }
      });
    });
  }

  getMilestones() {
    this.multimediaService.getMilestones().subscribe((response) => {
      this.slidesStore = (response || []).map((item: any) => {
        return {
          image: item.imageID,
          year: item.year,
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          }
        }
      });
    });
  }

}
