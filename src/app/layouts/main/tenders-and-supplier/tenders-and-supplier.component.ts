import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { TranslationService } from "src/app/i18n/translation.service";
import { ScrollService } from "src/app/services/scroll.service";
// import { PlaceholderImgService } from "src/app/services/placeholder-img.service";
import { DatePipe } from "@angular/common";
import { FormatDateToApiFormatPipe } from "src/app/pipes/format-date-to-api-format.pipe";
import { SharedService } from "src/app/services/shared.service";

@Component({
  selector: "app-tenders-and-supplier",
  templateUrl: "./tenders-and-supplier.component.html",
  styleUrls: ["./tenders-and-supplier.component.scss"],
})
export class TendersAndSupplierComponent {
  activeButton: string = "open";
  carousel: any = [];
  search: string = "";
  breadCrumb: any = [
    {
      title: "BREADCRUMB.TENDER_AND_SUPPLIER",
      path: "/tenders-and-supplier",
    },
  ];
  isTenderLoadingEnabled: boolean = true;
  isLoadingEnabled: boolean = true;
  isSliderLoadingEnabled: boolean = true;
  area2Articles: any = null;
  dateFrom: any;
  dateTo: any;
  dateFrom2: any;
  dateTo2: any;
  lang: string = "en";
  data: any = null;
  table: any = {
    thead: [
      // "TINDER.SR_NO",
      // "TINDER.SERIEL_NUMBER",
      "TENDER_DETAILS.TENDER_NUMBER",
      "TINDER.DESCRIPTION",
      "TINDER.LAST_COLLECTION_DATE",
      "TINDER.BOND",
      "TINDER.FEE",
      "TINDER.CATEGORY",
      "",
    ],
    tbody: [],
  };

  becomeSupplier: any = [];

  locationDDL: any = {
    selected: null,
    placeholder: "photos",
    list: [
      {
        key: "photos",
        title: {
          en: "photos",
          ar: "photos",
        },
      },
      {
        key: "Galleries",
        title: {
          en: "Galleries",
          ar: "Galleries",
        },
      },
      {
        key: "videos",
        title: {
          en: "videos",
          ar: "videos",
        },
      },
    ],
  };
  tenderSt: any = null;
  faqs: any = [];
  tenderContentPages: any = [];
  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private scrollService: ScrollService,
    private formatDateToApiFormatPipe: FormatDateToApiFormatPipe,
    private datePipe: DatePipe,
    private sharedService: SharedService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  onClickFire() {
    // alert(123);
  }
  showTenderSupplierTable: boolean = true;

  onShowTableChange(newValue: boolean) {
    this.showTenderSupplierTable = newValue;
  }
  showTenderSupplierTable2: boolean = true;

  onShowTableChange2(newValue: boolean) {
    this.showTenderSupplierTable2 = newValue;
  }
  ngOnInit(): void {
    this.getMetaTender();
    this.getTenders(); //dummy data should be changed
    this.getBecomeaSupplierSection(); //dummy data should be changed
    this.getTenderStatus(); //dummy data should be changed
  }

  getMetaTender() {
    this.isSliderLoadingEnabled = true;
    this.multimediaService
      .getContentPageByIDetaData("tender-landing")
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
          mobileImage: response.mobileImageID,
          keywords: [],

          area1: {
            en: response.contentDescriptionEN,
            ar: response.contentDescriptionAR,
          },
          area2: {
            en: response.contentDescription2EN,
            ar: response.contentDescription2AR,
          },
        };
        this.updateBreadCrumb();
        this.carousel = this.sharedService.isValidImage(this.data.img) || this.sharedService.isValidImage(this.data.mobileImageID)
          ? [
            {
              image: this.data.img,
              mobileImage: this.data.mobileImage,
              video: null,
              title: this.data.title,
              description: this.data.description,
              link: "",
              paddingBottom: "pb-[61px]",
            },
          ]
          : [];
        this.tenderContentPages = (response.tenderContentPages || []).map(
          (item: any) => {
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
              img: item.iconID,
            };
          }
        );
        response.tenderContentPages;
        this.faqs = (response.tenderFAQs || []).map((item: any) => {
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
        response.tenderFAQs;
        this.updateMetaData();
        this.isSliderLoadingEnabled = false;
      });
  }
  LatestData: any = {
    pagination: {
      pageIndex: 1,
      pageSize: 5,
      totalCount: 0,
    },
    thead: [
      // "TINDER.TENDER_TITLE",
      "TENDER_DETAILS.TENDER_NUMBER",
      "TINDER.DESCRIPTION",
      "TINDER.LAST_COLLECTION_DATE",
      "TINDER.BOND",
      "TINDER.FEE",
      "TINDER.INFORMATION",
      "TINDER.CATEGORY",
      "",
    ],
    tbody: [],
  };
  getBecomeaSupplierSection() {
    this.multimediaService
      .getTenderBecomeASupplier()
      .subscribe((response) => {
        this.becomeSupplier = [
          {
            image: response.infoBox1BackgroundImageID,
            icon: response.infoBox1IconID,
            title: {
              en: response.infoBox1TitleEN,
              ar: response.infoBox1TitleAR,
            },
            desc: {
              en: response.infoBox1DescriptionEN,
              ar: response.infoBox1DescriptionAR,
            },
            btn: {
              text: {
                en: response.infoBox1ButtonTextEN,
                ar: response.infoBox1ButtonTextAR,
              },
              modal: 'supplier'
              // link: {
              //   en: response.infoBox1ButtonURLEN,
              //   ar: response.infoBox1ButtonURLAR,
              // },
            },
          },
          {
            image: response.infoBox2BackgroundImageID,
            icon: response.infoBox2IconID,
            title: {
              en: response.infoBox2TitleEN,
              ar: response.infoBox2TitleAR,
            },
            desc: {
              en: response.infoBox2DescriptionEN,
              ar: response.infoBox2DescriptionAR,
            },
            btn: {
              text: {
                en: response.infoBox2ButtonTextEN,
                ar: response.infoBox2ButtonTextAR,
              },
              // modal: 'request-tenders'
              link: {
                en: response.infoBox2ButtonURLEN,
                ar: response.infoBox2ButtonURLAR,
              },
            },
          },
        ]
      });
  }
  getTenderStatus() {
    this.isLoadingEnabled = true;
    let payload = {
      PageSize: this.LatestData.pagination.pageSize,
      PageIndex: this.LatestData.pagination.pageIndex,
      TenderStatus:
        this.activeButton === "open"
          ? 0
          : this.activeButton === "closed"
            ? 1
            : 2,
    };
    if (this.search) Object.assign(payload, { searchTerm: this.search });

    if (this.dateFrom2)
      Object.assign(payload, {
        dtClosingFrom: this.formatDateToApiFormatPipe.transform(this.dateFrom2),
      });
    if (this.dateTo2)
      Object.assign(payload, {
        dtClosingTo: this.formatDateToApiFormatPipe.transform(this.dateTo2),
      });
    this.isTenderLoadingEnabled = true;
    this.multimediaService.getTenderStatus(payload).subscribe((response) => {
      this.LatestData.pagination.totalCount = response.totalCount;
      this.LatestData.tbody = (response.pageItems || []).map((item: any) => {
        return Object.values([
          // {

          //   // value: {
          //   //   en: item.titleEN || "-",
          //   //   ar: item.titleAR || "-",
          //   // },
          // //   class: "normal",
          // //   button: null,
          // },
          {
            awardTable: {
              // title: {
              //   en: item.titleEN || "-",
              //   ar: item.titleAR || "-",
              // },
              s_nu: item.serialNumber,
              successful: item.assginTo,
              link: item.pageURL || '',
            },
            download: {
              canDownload: item.canDownload || false,
              file: item.tenderDocumentID,
            },
            tenderStatus: item.tenderStatus,
            value: item.tenderNumber,
            link: item.pageURL || '',
            class: "normal",
            button: null,
          },
          {
            value: {
              en: item.descriptionEN || "-",
              ar: item.descriptionAR || "-",
            },
            class: "normal",
            button: null,
          },
          {
            value: item.lastCollectionDate
              ? this.datePipe.transform(item.lastCollectionDate, "dd-MM-YYYY")
              : "-",
            class: "normal",
            button: null,
          },
          {
            value: item.tenderBond,
            class: "normal",
            button: null,
          },
          {
            value: item.fee || "-",
            class: "normal",
            button: null,
          },
          {
            value: {
              en: item.detailsEN || "-",
              ar: item.detailsAR || "-",
            },
            class: "normal",
            button: null,
            popUp: true,
          },
          {
            value: {
              en: item.categoryNameEN || "-",
              ar: item.categoryNameAR || "-",
            },
            class: "normal",
            button: null,
          },
          {
            value: item.tenderCategoryID || "-",
            class: "normal",
            button: {
              text: "TINDER.REQUEST",
              link: item.pageURL || '',
            },
          },
        ]);
      });

      // this.isTenderLoadingEnabled = false;
      this.isLoadingEnabled = false;
    });
  }

  getTenders() {
    let payload = {};
    if (this.dateFrom)
      Object.assign(payload, {
        dtFrom: this.formatDateToApiFormatPipe.transform(this.dateFrom),
      });
    if (this.dateTo)
      Object.assign(payload, {
        dtTo: this.formatDateToApiFormatPipe.transform(this.dateTo),
      });
    this.isTenderLoadingEnabled = true;
    this.multimediaService.getTendersTable(payload).subscribe((response) => {
      this.table.tbody = (response || []).map((item: any) => {
        return Object.values([
          // {
          //   value: "",
          //   class: "normal",
          //   button: null,
          // },
          // {
          // value: item.serialNumber || "-",
          //   class: "tender-id",
          //   // link: item.pageURL || '',
          //   button: null,
          // },
          {
            value: item.tenderNumber || "-",
            class: "tender-id",
            // link: item.pageURL || '',
            button: null,
          },
          {
            value: {
              en: item.descriptionEN || "-",
              ar: item.descriptionAR || "-",
            },
            class: "normal",
            button: null,
          },
          {
            value: item.lastCollectionDate
              ? this.datePipe.transform(item.lastCollectionDate, "dd-MM-YYYY")
              : "-",
            class: "normal",
            button: null,
          },
          {
            value: item.tenderBond || "-",
            class: "normal",
            button: null,
          },
          {
            value: item.fee || "-",
            class: "normal",
            button: null,
          },
          {
            value: {
              en: item.categoryNameEN || "-",
              ar: item.categoryNameAR || "-",
            },
            class: "normal",
            button: null,
          },
          {
            value: "",
            class: "normal",
            button: {
              // text: "TINDER.REQUEST",
              text: "TINDER.DETAIL",
              link: item.pageURL || '',
            },
          },
        ]);
      });
      this.isTenderLoadingEnabled = false;
    });
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Home page | Woqod",
      description: this.data.description[this.lang] || "Home page | Woqod",
      keywords: this.data.keywords || ["Woqod", "Home page"],
      img: this.data.img
    });
  }

  changePage(pageNo: number) {
    this.LatestData.pagination.pageIndex = pageNo;
    this.getTenderStatus();
  }

  UpdateDateFrom(event: any) {
    this.LatestData.pagination.pageIndex = 1;
    this.dateFrom = event;
    this.getTenders();
  }
  UpdateDateTo(event: any) {
    this.dateTo = event;
    this.getTenders();
  }
  UpdateDateFromAll(event: any) {
    this.LatestData.pagination.pageIndex = 1;
    this.dateFrom2 = event;
    this.getTenderStatus();
  }
  UpdateDateToAll(event: any) {
    // this.LatestData.pagination.pageIndex = 1;
    this.dateTo2 = event;
    this.getTenderStatus();
  }

  updateBreadCrumb() {
    this.breadCrumb[0].title = this.data.title[this.lang];
  }

  searchChange(search: string) {
    this.LatestData.pagination.pageIndex = 1;
    this.search = search;
    this.getTenderStatus();
  }

  activeTabChange(event: any) {
    this.activeButton = event;
    this.LatestData.pagination.pageIndex = 1;
    this.getTenderStatus();
  }
}
