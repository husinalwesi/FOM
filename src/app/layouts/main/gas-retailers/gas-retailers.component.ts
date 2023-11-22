import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "src/app/i18n/translation.service";
import { SharedService } from 'src/app/services/shared.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-gas-retailers',
  templateUrl: './gas-retailers.component.html',
  styleUrls: ['./gas-retailers.component.scss']
})
export class GasRetailersComponent {
  data: any = {};
  carousel: any = [];
  isBrowser: boolean = false;
  breadCrumb: any = [
    {
      title: "E_SERVICES_SECTION.PRODUCT_SERVICES",
      path: "/product-and-service",
    },
    {
      title: "BREADCRUMB.SHAFAF",
      path: "/shafaf",
    },
    {
      title: "BREADCRUMB.SHAFAF",
      path: "/shafaf",
    },
  ];
  lang: string = "en";
  isLoadingEnabled: boolean = true;
  isSliderLoadingEnabled: boolean = true;
  metaData: any = {
    title: {
      en: '',
      ar: ''
    },
    description: {
      en: '',
      ar: ''
    },
  };

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private sharedService: SharedService,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    // this.updateMetaData();
    this.lang = this.TranslationService.getSelectedLanguage();
  }
  LatestData: any = {
    pagination: {
      pageSize: 8,
      pageIndex: 1,
      totalCount: 0
    },
    thead: [
      "TINDER.VENDOR_NAME",
      "TINDER.ADDRESS",
      "TINDER.CONTACT_NAME",
      "TINDER.CONTACT",
      ""
    ],
    tbody: [],
  };
  ngOnInit(): void {
    this.getData();
    this.getDataOfTable();

  }

  getDataOfTable() {
    this.isLoadingEnabled = true;
    let payload = {
      pageSize: this.LatestData.pagination.pageSize,
      pageNumber: this.LatestData.pagination.pageIndex,
      orderBy: 'ModifiedOn DESC'
    };
    this.multimediaService.getSuperMarketRetailersTable(payload).subscribe((response) => {
      this.LatestData.pagination.totalCount = response.totalCount;
      this.LatestData.tbody = (response.pageItems || []).map((item: any) => {
        return Object.values([
          {
            value: {
              en: item.titleEN || "-",
              ar: item.titleAR || "-",
            },
            class: "normal",
          },
          {
            value: {
              en: item.addressEN || "-",
              ar: item.addressAR || "-",
            },
            class: "normal",
          },
          {
            value: {
              en: item.contactNameEN || "-",
              ar: item.contactNameAR || "-",
            },
            class: "normal",
          },
          {
            value: {
              en: item.contactNumber || "-",
              ar: item.contactNumber || "-",
            },
            class: "normal",
          },
          {
            value: "",
            class: "normal",
            setting: {
              svg: 'assets/svgs/arrow.svg',
              id: 12345,
              link: item.website
            },
          },
        ]);
      });
      this.isLoadingEnabled = false;
    });
  }
  getData() {
    this.isSliderLoadingEnabled = true;
    this.multimediaService
      .getSuperMarketReatilMeta()
      .subscribe((response) => {
        this.data = {
          title: {
            en: response.titleEN,
            ar: response.titleAR,
          },
          description: {
            en: response.descriptionEN,
            ar: response.descriptionAR,
          },
          img: response.imageID,
          keywords: [],
        };
        this.metaData = {
          title: {
            en: response.area1TitleEN,
            ar: response.area1TitleAR
          },
          description: {
            en: response.area1DescriptionEN,
            ar: response.area1DescriptionAR
          },
        };
        this.updateBreadCrumb();
        this.carousel = this.data.img
          ? [
            {
              image: this.data.img,
              video: null,
              title: this.data.title,
              description: this.data.description,
              link: "",
              paddingBottom: "pb-[61px]",
            },
          ]
          : [];
        this.updateMetaData();
        this.isSliderLoadingEnabled = false;
      });
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Super Market List | Woqod",
      description:
        this.data.description[this.lang] || "Super Market List | Woqod",
      keywords: this.data.keywords || ["Woqod", "Super Market List"],
      img: this.data.img
    });
  }

  updateBreadCrumb() {
    this.breadCrumb[2].title = this.data.title[this.lang];
  }

  changePage(pageNo: number) {
    this.LatestData.pagination.pageIndex = pageNo;
    this.getDataOfTable();
    this.getData();
  }
  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }
}
