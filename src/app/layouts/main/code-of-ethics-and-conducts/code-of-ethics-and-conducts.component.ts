import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/i18n/translation.service';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';

@Component({
  selector: 'app-code-of-ethics-and-conducts',
  templateUrl: './code-of-ethics-and-conducts.component.html',
  styleUrls: ['./code-of-ethics-and-conducts.component.scss']
})
export class CodeOfEthicsAndConductsComponent {
  lang: string = "en";
  bullets: any = null;
  isLoadingEnabled: boolean = true;
  item: any = [];
  data: any = null;
  breadCrumb: any = [
    {
      title: 'BREADCRUMB.CODE_OF_ETHICS',
      path: '/code-of-ethics-and-conducts'
    }
  ];

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
    this.getBullets();
  }

  getData() {
    this.multimediaService.getCodeOfEthics('fahes/code-of-ethics-and-conducts').subscribe((response) => {
      this.data = {
        title: {
          en: response.titleEN,
          ar: response.titleAR
        },
        description: {
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
        body: {
          en: response.bodyEN,
          ar: response.bodyAR
        },
        img: response.imageID,
        keywords: []
      };
      this.updateBreadCrumb();
      this.updateMetaData();
    });
  }
  getBullets() {

    this.multimediaService
      .getBulletsCodeOf("fahes/fahes-about-us")
      .subscribe((response) => {
        this.bullets = response.map((item: any) => ({
          title: {
            en: item.titleEN,
            ar: item.titleAR,
          },
          desc: {
            en: item.descriptionEN,
            ar: item.descriptionAR,
          },
          svg: item.iconID,
          keywords: [],

        }));

        this.isLoadingEnabled = false;
      });
  }
  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Code Of Ethics-and-Conducts | Woqod",
      description: this.data.description[this.lang] || "Code Of Ethics-and-Conducts | Woqod",
      keywords: this.data.keywords || ["Woqod", "Code Of Ethics-and-Conducts"],
      img: this.data.img
    });
  }
  updateBreadCrumb() {
    this.breadCrumb[0].title = this.data.title[this.lang];
  }

}
