import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MultimediaService } from "src/app/services/apis/multimedia.service";

@Component({
  selector: 'app-rent-shop-information',
  templateUrl: './rent-shop-information.component.html',
  styleUrls: ['./rent-shop-information.component.scss']
})
export class RentShopInformationComponent {
  @Input() stationData: any = null;
  @Input() lang: string = 'en';
  @Input() isFormEnabled: boolean = false;
  @Input() stationName: any = null;
  date: Date = new Date();
  @Output() nextStep: EventEmitter<any> = new EventEmitter();

  formData: any = {
    StationName: '',
    NumberOfApplicants: '',
    Shoppre: '',
    ShopSize: '',
  };
  isSubmitted: boolean = false;
  numberOfShop: any = {
    selected: null,
    placeholder: "SHOP.NUMBER_OF_SHOPS",
    list: [],
  };

  constructor(private multimediaService: MultimediaService) { }
  onSubmit(form: any) {
    this.isSubmitted = true;
    if (form.valid && this.numberOfShop.selected) {
      let data = { ...this.formData, ...{ numberOfShopsRequired: this.numberOfShop.selected } };
      data.Shoppre = this.stationData.shopRent;
      data.ShopSize = this.stationData.shopSize;
      data.NumberOfApplicants = this.stationData.noOfApplicants;
      this.nextStep.emit(data);


    }
  }
  ngOnInit(): void {

    this.getNumberOfShopList();
  }
  getNumberOfShopList() {
    this.multimediaService.getNumberOfShopRList().subscribe((response) => {
      this.numberOfShop.list = (response || []).map((item: any) => {
        return {
          key: item.detailesId,
          title: {
            en: item.nameEn,
            ar: item.nameAr,
          },
        };
      });
    });
  }
  tempChange(option: any) {
    this.numberOfShop.selected = option;
  }

  back() {
    history.back();
  }

}
