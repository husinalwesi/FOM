import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GUID } from 'src/app/const/guid';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';

@Component({
  selector: 'app-leasing-property',
  templateUrl: './leasing-property.component.html',
  styleUrls: ['./leasing-property.component.scss']
})
export class LeasingPropertyComponent {
  locationsDDL: any = {
    selected: null,
    placeholder: 'PROMOTION_FILTER.LOCATION',
    list: []
  };

  stationDDL: any = {
    selected: null,
    placeholder: 'PETROL_STATION.PETROL_STATION',
    list: [
      {
        key: 'All',
        title: {
          en: 'Food',
          ar: 'Food'
        }
      },
      {
        key: 'p c 2',
        title: {
          en: 'Nonfood',
          ar: 'Nonfood'
        }
      },
      {
        key: 'p c 3',
        title: {
          en: 'Others',
          ar: 'Others'
        }
      },
    ]
  };

  orderbyDDL: any = {
    selected: {
      key: 'DeadLine Asc',
      title: {
        en: 'SERVICE_INSPESTION.SORT',
        ar: 'SERVICE_INSPESTION.SORT'
      }
    },
    placeholder: '',
    list: [
      {
        key: 'DeadLine Asc',
        title: {
          en: 'PLACEHOLDER.DEADLINE',
          ar: 'PLACEHOLDER.DEADLINE'
        }
      },
      {
        key: 'ModifiedOn DESC',
        title: {
          en: 'PLACEHOLDER.LASTEST_ADDED',
          ar: 'PLACEHOLDER.LASTEST_ADDED'
        }
      },
      {
        key: 'ShopSize Asc',
        title: {
          en: 'PLACEHOLDER.SIZE_ASC',
          ar: 'PLACEHOLDER.SIZE_ASC'
        }
      },
      {
        key: 'ShopSize Desc',
        title: {
          en: 'PLACEHOLDER.SIZE_DESC',
          ar: 'PLACEHOLDER.SIZE_DESC'
        }
      },
    ]
  };

  @Input() mainData: any;
  @Input() lang: string = 'en';
  isLoadingEnabled: boolean = true;
  title: string = '';
  leasingProperties: any = {
    pagination: {
      pageSize: 16,
      pageIndex: 1,
      totalCount: 0
    },
    data: []
  };

  constructor(
    private multimediaService: MultimediaService,
    private router: Router,
    private routeLocalizationPipe: RouteLocalizationPipe,
  ) {
  }

  ngOnInit(): void {
    this.getKenarProperties();
    this.getPromotionLocations();
    this.getStations();
  }

  getPromotionLocations() {
    this.multimediaService.getPromotionLocations().subscribe((response) => {
      this.locationsDDL.list = (response || []).map((item: any) => {
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

  getStations() {
    this.multimediaService.getStations({ mainId: GUID.woqod.lookUps.stations }).subscribe((response) => {
      this.stationDDL.list = (response || []).map((item: any) => {
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
  extractCoordinates(longitudeLatitude: string) {
    try {
      const parsedData = JSON.parse(longitudeLatitude);
      return `${parsedData.lat},${parsedData.lng}`;
    } catch (error) {
      // console.error("Error parsing longitudeLatitude:", error);
      return "0,0"; // Default value when parsing fails
    }
  }
  getKenarProperties() {
    this.isLoadingEnabled = true;
    let payload = {
      pageSize: this.leasingProperties.pagination.pageSize,
      pageNumber: this.leasingProperties.pagination.pageIndex
    };

    if (this.title) Object.assign(payload, { searchTerm: this.title });
    if (this.orderbyDDL.selected) Object.assign(payload, { orderBy: this.orderbyDDL.selected.key });
    if (this.stationDDL.selected) Object.assign(payload, { StationID: this.stationDDL.selected.key });
    if (this.locationsDDL.selected) Object.assign(payload, { Location: this.locationsDDL.selected.key });

    this.multimediaService.getKenarProperties(payload).subscribe((response) => {
      this.leasingProperties.pagination.totalCount = response.totalCount;
      this.leasingProperties.data = (response.pageItems || []).map((item: any) => {
        return {
          id: item.kenarPropertiesID,
          location: {
            en: item.nameEN,
            ar: item.nameAR
          },
          locationUrl: this.extractCoordinates(item.latLong),
          deadline: item.deadLine ? new Date(item.deadLine) : null,
          isSelected: false
        }
      });
      this.isLoadingEnabled = false;
    });
  }

  changePage(pageNo: number) {
    this.leasingProperties.pagination.pageIndex = pageNo;
    this.getKenarProperties();
  }

  submitIntrest() {
    if (!this.isValidForm()) return;
    const selection = this.getSelectedLeasingProperties().map((item: any) => item.id)[0];
    this.router.navigateByUrl(this.routeLocalizationPipe.transform(`/kenar-shop/rent-shop/${selection}`));
  }

  getSelectedLeasingProperties() {
    return this.leasingProperties.data.filter((item: any) => item.isSelected) || [];
  }

  searchByTitle() {
    this.leasingProperties.pagination.pageIndex = 1;
    this.getKenarProperties();
  }

  locationChange(event: any) {
    this.locationsDDL.selected = event;
    // 
    this.leasingProperties.pagination.pageIndex = 1;
    this.getKenarProperties();
  }

  stationChange(event: any) {
    this.stationDDL.selected = event;
    // 
    this.leasingProperties.pagination.pageIndex = 1;
    this.getKenarProperties();
  }

  orderChange(event: any) {
    this.orderbyDDL.selected = event;
    // 
    this.leasingProperties.pagination.pageIndex = 1;
    this.getKenarProperties();
  }

  isValidForm() {
    return this.getSelectedLeasingProperties().length > 0;
  }

  toggleStore(dataItem: any) {
    dataItem.isSelected = !dataItem.isSelected;

    this.submitIntrest();


    // (click)="submitIntrest()" [isDisabled]="!isValidForm()"

    // for (let index = 0; index < this.leasingProperties.data.length; index++) {
    //   if (this.leasingProperties.data[index].id !== dataItem.id) {
    //     this.leasingProperties.data[index].isSelected = false;
    //   }
    // }

  }

}
