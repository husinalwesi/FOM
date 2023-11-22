import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { FormatDateToApiFormatPipe } from 'src/app/pipes/format-date-to-api-format.pipe';
import { SharedService } from 'src/app/services/shared.service';
import { ResizeService } from 'src/app/services/resize.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {
  filters: any = null;
  // 
  carousel: any = [];
  breadCrumb: any = [
    {
      title: 'BREADCRUMB.PROMOTIONS',
      path: '/promotions'
    }
  ];
  lang: string = "en";
  isLoadingEnabled: boolean = true;
  isSliderLoadingEnabled: boolean = true;
  data: any = null;

  promotionList: any = {
    pagination: {
      pageSize: 6,
      pageIndex: 1,
      totalCount: 0
    },
    data: []
  };

  promotionCategoryDDL: any = {
    selected: null,
    placeholder: 'SHARED.CHOOSE_ONE',
    list: []
  };

  // promotionCategoryList: any = [];

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private formatDateToApiFormatPipe: FormatDateToApiFormatPipe,
    private sharedService: SharedService,
    private resizeService: ResizeService,
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit(): void {
    this.getData();
    this.getPromotionFeaturedItems();
    this.getPromotionsList();
    this.getPromotionCategories();
  }

  getPromotionCategories() {
    this.multimediaService.getPromotionCategories().subscribe((response) => {
      this.promotionCategoryDDL.list = (response || []).map((item: any) => {
        return {
          key: item.detailesId,
          title: {
            en: item.nameEn,
            ar: item.nameAr
          },
          icon: item.iconId
        }
      });
    });
  }

  getPromotionsList() {
    this.isLoadingEnabled = true;
    // this.promotionList.data = [];
    let payload = {
      pageSize: this.promotionList.pagination.pageSize,
      pageNumber: this.promotionList.pagination.pageIndex,
      orderBy: 'ModifiedOn DESC'
    };


    if (this.promotionCategoryDDL.selected?.key) Object.assign(payload, { categoryID: this.promotionCategoryDDL.selected.key });
    if (this.filters?.date?.from) Object.assign(payload, { fromDate: this.formatDateToApiFormatPipe.transform(this.filters?.date?.from) });
    if (this.filters?.date?.to) Object.assign(payload, { toDate: this.formatDateToApiFormatPipe.transform(this.filters?.date?.to) });

    if (this.filters?.promotionStatus) Object.assign(payload, { promotionStatus: this.filters?.promotionStatus.key });
    if (this.filters?.location) Object.assign(payload, { location: this.filters?.location.key });

    this.multimediaService.getPromotionsList(payload).subscribe((response) => {
      this.promotionList.pagination.totalCount = response.totalCount;
      this.promotionList.data = (response.pageItems || []).map((item: any) => {
        return {
          id: item.offersAndPromotionsID,
          date: item.modifiedOn,
          img: this.sharedService.isValidImage(item.productionAreaImageID) || (this.lang === 'en' ? this.sharedService.isValidImage(item.webImageEN) || this.sharedService.isValidImage(item.mobileImageEN) : this.sharedService.isValidImage(item.webImageAR) || this.sharedService.isValidImage(item.mobileImageAR)),
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          desc: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          link: item.pageURL || '',
        }
      });
      this.isLoadingEnabled = false;
    }, (error) => {
      this.isLoadingEnabled = false;
    })
  }

  getPromotionFeaturedItems() {
    this.isSliderLoadingEnabled = true;
    this.multimediaService.getPromotionFeaturedItems().subscribe((response) => {
      this.carousel = (response || []).map((item: any) => {
        return {
          image: this.lang === 'en' ? item.webImageEN : item.webImageAR,
          mobileImage: this.lang === 'en' ? item.mobileImageEN : item.mobileImageAR,
          video: null,
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          link: item.pageURL || '',
          paddingBottom: 'pb-[61px]',
        }
      });
      if (this.carousel.length === 0) {
        this.carousel = [{
          image: this.data.img,
          mobileImage: this.data.img,
          video: null,
          title: this.data.title,
          description: this.data.description,
          link: "",
          paddingBottom: 'pb-[61px]',
        }]
      }
      this.updateMetaData();
      this.isSliderLoadingEnabled = false;
    });
  }

  getData() {
    this.multimediaService.getContentPageByIDetaData('promotions').subscribe((response) => {
      this.getPromotionFeaturedItems();
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
        img: this.resizeService.isMobile() ? response.mobileImageID : response.bannerImageID,
      };
      this.updateBreadCrumb();
      this.getPromotionFeaturedItems()
    });
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data?.title?.[this.lang] || "Promotions | Woqod",
      description: this.data?.description?.[this.lang] || "Promotions | Woqod",
      keywords: this.data?.keywords || ["Woqod", "Promotions"],
      img: this.carousel[0]?.image || '',
    });
  }

  changePage(pageNo: number) {
    this.promotionList.pagination.pageIndex = pageNo;
    this.getPromotionsList();
  }

  filterSubmit(data: any) {
    // console.log();

    if (data?.promotionCategory?.key) this.promotionCategoryDDL.selected = this.promotionCategoryDDL.list.find((item: any) => item.key === data.promotionCategory?.key);
    // 

    this.filters = data;
    this.promotionList.pagination.pageIndex = 1;
    this.getPromotionsList();
  }

  updateBreadCrumb() {
    this.breadCrumb[0].title = this.data.title[this.lang];
  }

  onClickEmiter(key: string) {
    this.promotionCategoryDDL.selected = this.promotionCategoryDDL.list.find((item: any) => item.key === key);
    this.promotionList.pagination.pageIndex = 1;
    this.getPromotionsList();
  }

}
