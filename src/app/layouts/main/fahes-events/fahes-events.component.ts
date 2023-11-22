import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { FormatDateToApiFormatPipe } from 'src/app/pipes/format-date-to-api-format.pipe';
// import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { TranslationService } from "src/app/i18n/translation.service";

@Component({
  selector: 'app-fahes-events',
  templateUrl: './fahes-events.component.html',
  styleUrls: ['./fahes-events.component.scss']
})
export class FahesEventsComponent {
  isLoadingEnabled: boolean = true;
  events: any = {
    pagination: {
      pageSize: 3,
      pageIndex: 1,
      totalCount: 0
    },
    data: []
  };
  dateFrom: any;
  dateTo: any;
  lang: string = 'en';
  constructor(
    private translate: TranslateService,
    private multimediaService: MultimediaService,
    private formatDateToApiFormatPipe: FormatDateToApiFormatPipe,
    private TranslationService: TranslationService,
  ) {
    this.lang = this.TranslationService.getSelectedLanguage()
  }

  ngOnInit(): void {
    this.getFahesEvents();
  }

  getFahesEvents() {
    this.isLoadingEnabled = true;
    let payload = {
      pageSize: this.events.pagination.pageSize,
      pageNumber: this.events.pagination.pageIndex,
    };
    if (this.dateFrom) Object.assign(payload, { dtFrom: this.formatDateToApiFormatPipe.transform(this.dateFrom) });
    if (this.dateTo) Object.assign(payload, { dtTo: this.formatDateToApiFormatPipe.transform(this.dateTo) });

    this.multimediaService.getFahesEvents(payload).subscribe((response) => {
      this.events.pagination.totalCount = response.totalCount;
      this.events.data = (response.pageItems || []).map((item: any) => {
        return {
          img: item.imageID,
          date: item.publishedOn ? new Date(item.publishedOn) : null,
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR,
          },
          location: item.location,
          link: `/fahes/media-center/event/${item.eventDetailsID}`
        }
      });
      this.isLoadingEnabled = false;
    });
  }

  changeDateFrom(event: any) {
    this.events.pagination.pageIndex = 1;
    this.dateFrom = event;
    this.getFahesEvents();
  }

  changeDateTo(event: any) {
    this.events.pagination.pageIndex = 1;
    this.dateTo = event;
    this.getFahesEvents();
  }

  changePage(pageNo: number) {
    this.events.pagination.pageIndex = pageNo;
    this.getFahesEvents();
  }

}
