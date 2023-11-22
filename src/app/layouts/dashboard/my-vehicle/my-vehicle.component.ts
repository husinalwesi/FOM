import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { selectUserData } from 'src/app/store/user/user.selectors';
import { TranslationService } from "src/app/i18n/translation.service";

@Component({
  selector: 'app-my-vehicle',
  templateUrl: './my-vehicle.component.html',
  styleUrls: ['./my-vehicle.component.scss']
})
export class MyVehicleComponent {
  keyword: string = '';
  ddl: any = {
    selected: null,
    placeholder: 'Vehicles Plate Types',
    list: []
  }

  lang: string = 'en';


  isLoadingEnabled: boolean = true;
  cards: any = {
    pagination: {
      pageSize: 6,
      pageIndex: 1,
      totalCount: 0
    },
    data: []
  };

  constructor(
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService,
    private store: Store,
  ) {
    this.lang = this.TranslationService.getSelectedLanguage()
    this.metaTagsService.updateMetaTags({
      title: "MyVehicle | Woqod",
      description: "MyVehicle | Woqod",
      keywords: ["Woqod 1", "Woqod 2"]
    });
  }

  changePage(pageNo: number) {
    this.cards.pagination.pageIndex = pageNo;
    this.getMyVehicle();
  }


  ngOnInit(): void {
    this.GetSiteUserVehiclesPlateTypes();
    this.getMyVehicle();
  }

  getMyVehicle() {
    this.isLoadingEnabled = true;
    // let userDetails: any = localStorage.getItem('userDetails');
    // userDetails = userDetails ? JSON.parse(userDetails) : null;

    let userDetails: any = this.store.select(selectUserData).subscribe(data => {
      return data
    })

    const userID = userDetails?.siteUsersID || '';

    let payload = {
      UserID: userID,
      pageSize: this.cards.pagination.pageSize,
      PageNumber: this.cards.pagination.pageIndex,
    };


    this.multimediaService.getMyVehicle(payload).subscribe((response) => {
      this.cards.pagination.totalCount = response.totalCount;
      this.cards.data = (response.pageItems || []).map((item: any) => {
        return {
          plateNumber: item.numberPlate,
          plateType: {
            en: item.plateTypeEN,
            ar: item.plateTypeAR
          },
          vehicleMake: item.vehicleMake,
          vehicleModel: item.vehicleModel,
          Manufacture: item.manufacturer,
          ownerName: item.siteUsersID,
          fahasStatus: item.fahesStatus || false
        }
      });
      this.isLoadingEnabled = false;
    });
  }

  changeDDL(event: any) {
    this.ddl.selected = event;
    this.cards.pagination.pageIndex = 1;
    this.getMyVehicle();
  }

  changeKeyword(event: any) {
    this.keyword = event;
    this.cards.pagination.pageIndex = 1;
    this.getMyVehicle();
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

}
