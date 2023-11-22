import { Component } from '@angular/core';
import { FormatDateToApiFormatPipe } from 'src/app/pipes/format-date-to-api-format.pipe';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-media-center',
  templateUrl: './media-center.component.html',
  styleUrls: ['./media-center.component.scss']
})
export class MediaCenterComponent {
  selectedYear: number = new Date().getFullYear();
  isLoadingEnabled: boolean = true;
  cards: any = {
    pagination: {
      pageSize: 9,
      pageIndex: 1,
      totalCount: 0
    },
    data: []
  };
  constructor(
    private multimediaService: MultimediaService,
    private formatDateToApiFormatPipe: FormatDateToApiFormatPipe,
    private sharedService: SharedService
  ) {
  }

  ngOnInit(): void {
    this.getNewsListing();
  }

  getNewsListing() {
    this.isLoadingEnabled = true;
    this.cards.data = [];
    const payload = {
      pageSize: this.cards.pagination.pageSize,
      pageIndex: this.cards.pagination.pageIndex,
      fromDate: this.formatDateToApiFormatPipe.transform(new Date(this.selectedYear, 0, 1)),
      toDate: this.formatDateToApiFormatPipe.transform(new Date(this.selectedYear, 11, 31)),
      orderBy: 'ModifiedOn DESC'
    };
    this.multimediaService.getNewsListing(payload).subscribe((response) => {
      this.cards.pagination.totalCount = response.totalCount;
      this.cards.data = (response.pageItems || []).map((item: any) => {
        return {
          link: item.pageURL || '',
          image: this.sharedService.isValidImage(item?.productionAreaImageID),
          // || this.sharedService.isValidImage(item?.imageID) || this.sharedService.isValidImage(item?.mobileImageID)
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          category: null,
          description: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          location: null,
          dates: {
            leftDate: null,
            rightDate: {
              text: 'MEDIA_CENTER.PUBLISHED',
              date: item.modifiedOn ? new Date(item.modifiedOn) : null
            }
          }
        }
      });
      this.isLoadingEnabled = false;
    });
  }

  changePage(pageNo: number) {
    this.cards.pagination.pageIndex = pageNo;
    this.getNewsListing();
  }

  selectYear(year: number) {
    this.selectedYear = year;
    this.getNewsListing();
  }

}
