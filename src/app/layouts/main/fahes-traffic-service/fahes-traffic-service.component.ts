import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-fahes-traffic-service',
  templateUrl: './fahes-traffic-service.component.html',
  styleUrls: ['./fahes-traffic-service.component.scss']
})
export class FahesTrafficServiceComponent {
  isLoadingEnabled: boolean = true;
  isSliderLoadingEnabled: boolean = true;
  backgroundImageUrl: string = "assets/images/png/bg-about.webp";

  filterDDL: any = {
    selected: null,
    placeholder: '',
    list: [
      {
        key: 'TitleAR desc',
        title: {
          en: 'FILTER_DDL.TITLE_DESC',
          ar: 'FILTER_DDL.TITLE_DESC'
        }
      },
      {
        key: 'TitleAR asc',
        title: {
          en: 'FILTER_DDL.TITLE_ASC',
          ar: 'FILTER_DDL.TITLE_ASC'
        }
      },
      {
        key: 'TitleEN desc',
        title: {
          en: 'FILTER_DDL.TITLE_DESC',
          ar: 'FILTER_DDL.TITLE_DESC'
        }
      },
      {
        key: 'TitleEN asc',
        title: {
          en: 'FILTER_DDL.TITLE_ASC',
          ar: 'FILTER_DDL.TITLE_ASC'
        }
      },
      {
        key: 'ContactNameAR desc',
        title: {
          en: 'FILTER_DDL.CONTACT_NAME_DESC',
          ar: 'FILTER_DDL.CONTACT_NAME_DESC'
        }
      },
      {
        key: 'ContactNameAR asc',
        title: {
          en: 'FILTER_DDL.CONTACT_NAME',
          ar: 'FILTER_DDL.CONTACT_NAME'
        }
      },
      {
        key: 'ContactNameEN desc',
        title: {
          en: 'FILTER_DDL.CONTACT_NAME_DESC',
          ar: 'FILTER_DDL.CONTACT_NAME_DESC'
        }
      },
      {
        key: 'ContactNameEN asc',
        title: {
          en: 'FILTER_DDL.CONTACT_NAME',
          ar: 'FILTER_DDL.CONTACT_NAME'
        }
      },
      {
        key: 'AddressAR desc',
        title: {
          en: 'FILTER_DDL.ADDRESS_DESC',
          ar: 'FILTER_DDL.ADDRESS_DESC'
        }
      },
      {
        key: 'AddressAR asc',
        title: {
          en: 'FILTER_DDL.ADDRESS',
          ar: 'FILTER_DDL.ADDRESS'
        }
      },
      {
        key: 'AddressEN desc',
        title: {
          en: 'FILTER_DDL.ADDRESS_DESC',
          ar: 'FILTER_DDL.ADDRESS_DESC'
        }
      },
      {
        key: 'AddressEN asc',
        title: {
          en: 'FILTER_DDL.ADDRESS',
          ar: 'FILTER_DDL.ADDRESS'
        }
      },
      {
        key: 'StationNameAR desc',
        title: {
          en: 'FILTER_DDL.STATION_DESC',
          ar: 'FILTER_DDL.STATION_DESC'
        }
      },
      {
        key: 'StationNameAR asc',
        title: {
          en: 'FILTER_DDL.STATION',
          ar: 'FILTER_DDL.STATION'
        }
      },
      {
        key: 'StationNameEN desc',
        title: {
          en: 'FILTER_DDL.STATION_DESC',
          ar: 'FILTER_DDL.STATION_DESC'
        }
      },
      {
        key: 'StationNameEN asc',
        title: {
          en: 'FILTER_DDL.STATION',
          ar: 'FILTER_DDL.STATION'
        }
      },
      {
        key: 'ContactNumber asc',
        title: {
          en: 'FILTER_DDL.CONTACT_NUMBER',
          ar: 'FILTER_DDL.CONTACT_NUMBER'
        }
      },
      {
        key: 'ContactNumber desc',
        title: {
          en: 'FILTER_DDL.CONTACT_NUMBER_DESC',
          ar: 'FILTER_DDL.CONTACT_NUMBER_DESC'
        }
      },
    ]
  };

  bullets: any = []
  dataLast: any = {}
  carousel: any = [];
  areaThreeDetails = {};
  breadCrumb: any = [
    {
      title: "BREADCRUMB.FAHES_CONTACT_US",
      path: "/fahes/contact-us",
    },
  ];
  table: any = {

    pagination: {
      pageSize: 1,
      pageIndex: 1,
      totalCount: 0
    },
    thead: [
      "SHOP.STATION_NAME",
      "SHOP.INSURANCE",
      "TINDER.ADDRESS",
      "TINDER.CONTACT_NAME",
      "TINDER.CONTACT",
      ""
    ],
    tbody: [],
  };
  search: string = '';
  locationDDL: any = {
    selected: null,
    placeholder: 'E_TAG.STATION',
    list: [
      {
        key: 'Station',
        title: {
          en: 'E_TAG.STATION',
          ar: 'E_TAG.STATION'
        }
      },
    ]
  };
  lang: string = "en";
  data: any = null;
  areaTwoDetails: any = null;
  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private sharedService: SharedService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit(): void {
    this.getData();
    this.getDataOfTable();
    // this.getData2();

  }

  getData() {
    this.isSliderLoadingEnabled = true;
    this.multimediaService
      .getFahesTrafficService("")
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
          img: response.bannerImageID,
        };
        this.areaTwoDetails = {
          title: {
            en: response.area1TitleEN || '_',
            ar: response.area1TitleAR,
          },
          description: {
            en: response.area1DescriptionEN,
            ar: response.area1DescriptionAR,
          },
          image: response.area1ImageID,
          link: response.area1FileID,
          fileName: response.area1FileName,
        };
        this.areaThreeDetails = {
          title: {
            en: response.area2DescriptionEN,
            ar: response.area2DescriptionAR,
          },
          btnText: {
            en: response.area2ButtonTextEN,
            ar: response.area2ButtonTextAR,
          },
          href: response.area2ButtonURL
        };
        this.dataLast = {
          areaThreeTitle: {
            en: response.area3TitleEN,
            ar: response.area3TitleAR,
          },
          areaThreeDescription: {
            en: response.area3DescriptionEN,
            ar: response.area3DescriptionAR,
          },
        }
        this.bullets = (response.fahesBullets || []).map((item: any) => {
          return {
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

          }
        });


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
  getDataOfTable() {
    this.isLoadingEnabled = true;
    let payload = {
      PageSize: this.table.pagination.pageSize,
      PageNumber: this.table.pagination.pageIndex,
    };
    if (this.search) Object.assign(payload, { searchTerm: this.search });
    if (this.filterDDL.selected) Object.assign(payload, { orderBy: this.filterDDL.selected.key });
    this.multimediaService.getTrafficeServiceTable(payload).subscribe((response) => {
      this.table.pagination.totalCount = response.totalCount;
      this.table.tbody = (response.pageItems || []).map((item: any) => {
        return Object.values([
          {
            value: {
              en: item.stationNameEN || "-",
              ar: item.stationNameAR || "-",
            },
            class: "normal",
          },
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
  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "traffic Service | Woqod",
      description: this.data.description[this.lang] || "traffic Service | Woqod",
      keywords: this.data.keywords || ["Woqod", "traffic Service"],
      img: this.data.img
    });
  }

  updateBreadCrumb() {
    this.breadCrumb[0].title = this.data.title[this.lang];
  }
  locationChange(option: any) {
    this.locationDDL.selected = option;
  }
  searchChange(search: string) {
    this.table.pagination.pageIndex = 1;
    this.search = search;
    this.getDataOfTable();
  }
  changePage(pageNo: number) {
    this.table.pagination.pageIndex = pageNo;
    this.getDataOfTable();
    this.getData();
  }

  filterChange(option: any) {
    this.filterDDL.selected = option;
    this.getDataOfTable();
  }
  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }
}

