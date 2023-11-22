import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { ResizeService } from 'src/app/services/resize.service';
import { TranslationService } from 'src/app/i18n/translation.service';

@Component({
  selector: 'app-filter-promotions',
  templateUrl: './filter-promotions.component.html',
  styleUrls: ['./filter-promotions.component.scss']
})
export class FilterPromotionsComponent {
  @Output() filterSubmit: EventEmitter<any> = new EventEmitter();
  dateFrom: Date | null = null;
  dateTo: Date | null = null;
  lang: string = "en";
  promotionCategoryDDLSelected: any = {};
  // @Input() promotionCategoryList: any = [];
  @Input() promotionCategoryDDL: any = {
    selected: null,
    placeholder: 'SHARED.CHOOSE_ONE',
    list: []
  };
  promotionStatusDDL: any = {
    selected: null,
    placeholder: 'SHARED.CHOOSE_ONE',
    list: []
  };
  locationDDL: any = {
    selected: null,
    placeholder: 'SHARED.CHOOSE_ONE',
    list: []
  };
  top: number = 0;
  constructor(
    private resizeService: ResizeService,
    private translate: TranslateService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['promotionCategoryList']?.currentValue) this.promotionCategoryDDL.list = this.promotionCategoryList;
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.getPromotionLocations();
    this.getPromotionStatuses();
  }

  getPromotionLocations() {
    this.multimediaService.getPromotionLocations().subscribe((response) => {
      this.locationDDL.list = (response || []).map((item: any) => {
        return {
          key: item.detailesId,
          title: {
            en: item.nameEn,
            ar: item.nameAr
          }
        }
      });
    });
  }

  getPromotionStatuses() {
    this.multimediaService.getPromotionStatuses().subscribe((response) => {
      this.promotionStatusDDL.list = (response || []).map((item: any) => {
        return {
          key: item.detailesId,
          title: {
            en: item.nameEn,
            ar: item.nameAr
          }
        }
      });
    });
  }

  ngAfterViewInit(): void {
    this.resizeService.screenWidthChange$.subscribe(data => {
      if (data.isChanged) this.updateSticky();
    });
    setTimeout(() => {
      this.updateSticky();
    });
  }

  updateSticky() {
    if (typeof window !== 'undefined') {
      if (this.resizeService.isDesktop()) {
        let header: any = document.querySelector("header");
        if (!header) return;
        let headerHeight = header.offsetHeight;
        this.top = headerHeight;
      } else {
        this.top = 0;
      }
    }
  }

  onSubmit(form: any) {
    // console.log(this.promotionCategoryDDLSelected);
    this.filterSubmit.emit({
      date: {
        from: this.dateFrom,
        to: this.dateTo
      },
      promotionCategory: this.promotionCategoryDDLSelected,
      promotionStatus: this.promotionStatusDDL.selected,
      location: this.locationDDL.selected
    });
  }

  promotionCategoryChange(option: any) {
    this.promotionCategoryDDLSelected = option;
    // this.promotionCategoryDDL.selected = option;
  }

  promotionStatusChange(option: any) {
    this.promotionStatusDDL.selected = option;
  }

  locationChange(option: any) {
    this.locationDDL.selected = option;
  }

}
