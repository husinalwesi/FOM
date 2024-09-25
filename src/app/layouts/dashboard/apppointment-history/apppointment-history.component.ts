import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';

import { isPlatformBrowser } from '@angular/common';
import { TranslationService } from "src/app/i18n/translation.service";

@Component({
  selector: 'app-apppointment-history',
  templateUrl: './apppointment-history.component.html',
  styleUrls: ['./apppointment-history.component.scss']
})
export class ApppointmentHistoryComponent {
  detailedReport: any = null;
  keyword: string = '';
  ddl: any = {
    selected: null,
    placeholder: 'Vehicles Plate Types',
    list: []
  }

  lang: string = 'en';
  isModalEnabled1: boolean = false;
  selectedStep = 'Upcoming';
  list: any = [
    {
      title: 'DASHBOARD.UPCOMING',
      key: 'Upcoming'
    },
    {
      title: 'DASHBOARD.COMPLETED',
      key: 'Completed'
    },
    {
      title: 'DASHBOARD.CANCELLED',
      key: 'Cancelled'
    },
  ];

  data: any = {
    pagination: {
      pageSize: 10,
      pageIndex: 1,
      totalCount: 0
    },
    data: []
  };

  constructor(
    private translate: TranslateService,
    private TranslationService: TranslationService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.lang = this.TranslationService.getSelectedLanguage()

    this.metaTagsService.updateMetaTags({
      title: "Apppointment History Page | Woqod",
      description: "Apppointment History Page | Woqod",
      keywords: ["Woqod 1", "Woqod 2"]
    });
  }

  ngOnInit(): void {
    this.GetSiteUserVehiclesPlateTypes();
    this.getDashboardAppointmentHistory();
  }

  GetSiteUserVehiclesPlateTypes() {
    this.multimediaService.GetSiteUserVehiclesPlateTypes({}).subscribe((response) => {
      this.ddl.list = (response || []).map((item: any) => {
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

  getDashboardAppointmentHistory() {
    const token = isPlatformBrowser(this.platformId) ? localStorage.getItem('token') : '';

    let payload = {
      // UserID: userID,
      BearerToken: token,
      pageSize: this.data.pagination.pageSize,
      PageNumber: this.data.pagination.pageIndex,
      Status: this.selectedStep === 'Upcoming' ? 0 : this.selectedStep === 'Completed' ? 1 : 2,
    };

    if (this.keyword) Object.assign(payload, { searchterm: this.keyword });
    if (this.ddl.selected) Object.assign(payload, { PlateType: this.ddl.selected.key });

    this.multimediaService.getDashboardAppointmentHistory(payload).subscribe((response) => {
      this.data.pagination.totalCount = response.totalCount || 1000;
      this.data.data = (response || []).map((item: any) => {
        return {
          id: item.appointmentID,
          date: item.date ? new Date(item.date) : null,
          scheduledTime: item.scheduledTime,
          plateNumber: item.plateNumber,
          service: {
            en: item.serviceEN,
            ar: item.serviceAR
          },
          status: {
            value: item.status,
            text: {
              en: item.statusTextEN,
              ar: item.statusTextAR
            }
          },
          location: {
            en: item.locationEN,
            ar: item.locationAR
          }
        }
      });
    });
  }

  changePage(pageNo: number) {
    this.data.pagination.pageIndex = pageNo;
    this.getDashboardAppointmentHistory();
  }

  changeTab(tabKey: string) {
    this.selectedStep = tabKey;
    this.data.pagination.pageIndex = 1;
    this.getDashboardAppointmentHistory();
  }

  changeDDL(event: any) {
    this.ddl.selected = event;
    this.data.pagination.pageIndex = 1;
    this.getDashboardAppointmentHistory();
  }

  changeKeyword(event: any) {
    this.keyword = event;
    this.data.pagination.pageIndex = 1;
    this.getDashboardAppointmentHistory();
  }

  viewReport(id: string) {
    this.multimediaService.getDashboardAppointmentHistoryByID({ ID: id }).subscribe((response) => {
      // console.log(response);
      this.isModalEnabled1 = true;
      this.detailedReport = response;
    });
  }

}
