import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { ResizeService } from 'src/app/services/resize.service';
@Component({
  selector: 'app-kenar-shops',
  templateUrl: './kenar-shops.component.html',
  styleUrls: ['./kenar-shops.component.scss']
})
export class KenarShopsComponent {
  carousel: any = [];
  showKenarProperties: boolean = true;
  secondSection: any = {};
  firstSection: any = {};
  breadCrumb: any = [
    {
      title: "E_SERVICES_SECTION.PRODUCT_SERVICES",
      path: "/product-and-service",
    },
    {
      title: 'BREADCRUMB.KENAR_SHOP',
      path: '/kenar-shop'
    }
  ];
  lang: string = "en";
  isLoadingEnabled: boolean = true;
  isSliderLoadingEnabled: boolean = true;
  data: any = null;

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private resizeService: ResizeService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.isLoadingEnabled = true;
    this.multimediaService.getContentPageByIDetaData('kenar-landing').subscribe((response) => {
      this.getKenarHeroSlider();
      this.showKenarProperties = response.showKenarProperties || false;
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
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
        img: response.mainImageID,
        keywords: []
      };
      this.updateBreadCrumb();

      this.firstSection = {
        title: {
          en: response.area1TitleEN,
          ar: response.area1TitleAR
        },
        desc: {
          en: response.area1ContentBoxEN,
          ar: response.area1ContentBoxAR
        },
        image: response.productionAreaArea1Image,
        link: response.area1Url
      };

      this.secondSection = {
        title: {
          en: response.area2TitleEN,
          ar: response.area2TitleAR
        },
        desc: {
          en: response.area2ContentBoxEN,
          ar: response.area2ContentBoxAR
        },
        content: {
          en: response.area3ContentBoxEN,
          ar: response.area3ContentBoxAR
        },
      };
      this.isLoadingEnabled = false;
    });
  }

  updateBreadCrumb() {
    this.breadCrumb[1].title = this.data.title[this.lang];
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Kenar Shop | Woqod",
      description: this.data.description[this.lang] || "Kenar Shop | Woqod",
      keywords: this.data.keywords || ["Woqod", "Kenar Shop"],
      img: this.carousel[0]?.image || '',
    });
  }

  getKenarHeroSlider() {
    this.isSliderLoadingEnabled = true;
    this.multimediaService.getKenarHeroSlider().subscribe((response) => {
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
          link: ``,
          paddingBottom: 'pb-[61px]',
        }
      });
      this.isSliderLoadingEnabled = false;
      this.updateMetaData();
    });
  }

}
