import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { TranslationService } from 'src/app/i18n/translation.service';

@Component({
  selector: 'app-become-a-retail-supplier',
  templateUrl: './become-a-retail-supplier.component.html',
  styleUrls: ['./become-a-retail-supplier.component.scss']
})
export class BecomeARetailSupplierComponent {
  carousel: any = [];
  isLoadingEnabled: boolean = true;
  lang: string = "en";
  data: any = null;
  breadCrumb: any = [
    {
      title: 'BREADCRUMB.BECOME_A_SUPPLIER',
      path: '/become-a-supplier'
    }
  ];

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();

  }

  ngOnInit(): void {
    setTimeout(() => {
      const token = isPlatformBrowser(this.platformId) ? localStorage.getItem('token') : null;
      if (!token && typeof window !== 'undefined') {
        const loginBtn = document.getElementById("login-btn");
        if (loginBtn) loginBtn.click();
      }
    });
    this.getData();
  }

  getData() {
    this.multimediaService.getBecomeASupplierMeta().subscribe((response) => {
      this.data = {
        title: {
          en: response.titleEN,
          ar: response.titleAR
        },
        description: {
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
        details: {
          en: response.detailsEN,
          ar: response.detailsAR
        },
        img: response.imageId,
        keywords: []
      };
      this.updateBreadCrumb();
      this.carousel = this.data.img ? [
        {
          image: this.data.img,
          video: null,
          title: this.data.title,
          description: this.data.description,
          link: "",
          paddingBottom: 'pb-[61px]',
        }
      ] : [];
      this.updateMetaData();
    });
  }

  updateBreadCrumb() {
    this.breadCrumb[0].title = this.data.title[this.lang];
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Become a supplier | Woqod",
      description: this.data.description[this.lang] || "Become a supplier | Woqod",
      keywords: this.data.keywords || ["Woqod", "Become a supplier"],
      img: this.data.img
    });
  }

}
