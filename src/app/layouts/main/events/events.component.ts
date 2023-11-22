import { Component } from '@angular/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { FormatDateToApiFormatPipe } from 'src/app/pipes/format-date-to-api-format.pipe';
import { TranslationService } from 'src/app/i18n/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  lang: string = "en";
  isLoadingEnabled: boolean = true;
  dateFrom: Date | null = null;
  dateTo: Date | null = null;
  category: string | null = null;
  cards: any = {
    pagination: {
      pageSize: 9,
      pageIndex: 1,
      totalCount: 0
    },
    data: []
  };

  constructor(
    private formatDateToApiFormatPipe: FormatDateToApiFormatPipe,
    private translate: TranslateService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private sharedService: SharedService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit(): void {
    this.getNewsListing();
  }

  getNewsListing() {
    this.isLoadingEnabled = true;
    this.cards.data = [];
    let payload = {
      pageSize: this.cards.pagination.pageSize,
      pageIndex: this.cards.pagination.pageIndex,
      orderBy: 'FromDate DESC'
    };

    if (this.dateFrom) Object.assign(payload, { dtFrom: this.formatDateToApiFormatPipe.transform(this.dateFrom) });
    if (this.dateTo) Object.assign(payload, { dtTo: this.formatDateToApiFormatPipe.transform(this.dateTo) });
    if (this.category) Object.assign(payload, { categoryId: this.category });

    this.multimediaService.getEventsListing(payload).subscribe((response) => {
      this.cards.pagination.totalCount = response.totalCount;
      this.cards.data = response.pageItems.map((item: any) => {
        return {
          link: item.pageURL || '',
          image: this.sharedService.isValidImage(item.productionAreaImageID),
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          category: {
            en: item.categoryNameEN,
            ar: item.categoryNameAR
          },
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          location: item.location,
          dates: {
            leftDate: {
              text: 'MEDIA_CENTER.START_DATE',
              date: item.fromDate ? new Date(item.fromDate) : null
            },
            rightDate: {
              text: 'MEDIA_CENTER.END_DATE',
              date: item.toDate ? new Date(item.toDate) : null
            }
          }
        }
      });
      this.isLoadingEnabled = false;
    });
  }

  filterSubmit(data: any) {
    this.cards.pagination.pageIndex = 1;
    this.dateFrom = data.date.from;
    this.dateTo = data.date.to;
    this.category = data.category;
    this.getNewsListing();
  }

  changePage(pageNo: number) {
    this.cards.pagination.pageIndex = pageNo;
    this.getNewsListing();
  }

}
