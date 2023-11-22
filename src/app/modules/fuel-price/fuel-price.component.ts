import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "src/app/i18n/translation.service";
import { MultimediaService } from "src/app/services/apis/multimedia.service";

@Component({
  selector: 'app-fuel-price',
  templateUrl: './fuel-price.component.html',
  styleUrls: ['./fuel-price.component.scss']
})
export class FuelPriceComponent implements OnInit {
  data: any[] = [];
  fuelTypes: string[] = [];
  months: any = {}

  isLoadingEnabled: boolean = true;
  dataOfTable: any = [];
  fuelTypesAR: any = [];
  years: string | null = "";
  isSubmitted: boolean = false;
  lang: string = 'en';
  // selectedYear: string = '2023';
  YearsDDL: any = {
    selected: null,
    placeholder: "",
    list: [],
  };

  constructor(
    private translate: TranslateService,
    private multimediaService: MultimediaService,
    private TranslationService: TranslationService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  ngOnInit(): void {
    this.setYears();
  }
  // getYears
  setYears() {
    this.multimediaService.getYears().subscribe((response) => {
      this.YearsDDL.list = (response || []).map((item: any) => {
        const year = item.historyYears;
        return {
          key: year,
          title: {
            en: year,
            ar: year,
          },
        }
      });

      let cYear = new Date().getFullYear();

      if (this.YearsDDL.list.length > 0) {
        this.YearsDDL.selected = this.YearsDDL.list.find((item: any) => +item.key === +cYear) || this.YearsDDL.list[0];
        this.getContentPage();
      }
    });
  }

  getContentPage() {
    this.isLoadingEnabled = true;
    this.multimediaService.getFuelPrices({ Year: this.YearsDDL.selected?.key || '' }).subscribe((response) => {
      // this.dataOfTable
      const data = (response || []).map((item: any) => {
        const date = item.date ? new Date(item.date) : null;
        return {

          // "date": "2023-09-01T00:00:00",
          // "dateFrom": "2023-09-01T00:00:00",
          // "dateTo": "2023-09-30T00:00:00",
          // "fuelTypeAr": "البنزين الممتاز 90 أوكتان",
          // "fuelTypeEn": "Premium 91 R",
          // "price": "1.90",
          // "month": "September",
          // "day": "01"

          date: date,
          month: date ? date.getMonth() : null,
          fuelType: {
            en: item.fuelTypeEn || '-',
            ar: item.fuelTypeAr || '-',
          },
          price: item.price || 0,
        };
      });

      this.extractFuelTypesAndMonths(data);
      this.data = data;
      this.fuelTypesAR = this.getTranslationForAll();
      // console.log(response);
      this.isLoadingEnabled = false;
    });
  }

  private extractFuelTypesAndMonths(data: any): void {
    // Extract unique fuel types and months from the data
    const data2 = [...new Set(data.map((item: any) => item.fuelType[this.lang]))];
    // console.log(data2);

    this.fuelTypes = this.reorderFuelType(data2);
    // console.log(this.fuelTypes);

    this.months = {
      en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      ar: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
    };
  }

  reorderFuelType(data: any) {
    // hisham said to keep it static
    // console.log(data);

    // 
    // 
    // 
    return [
      "Super 95 R",
      "Premium 91 R",
      "DIESEL"
    ];
    // let temp = [];
    // if (data?.[1]) temp.push(data?.[1]);
    // if (data?.[0]) temp.push(data?.[0]);
    // if (data?.[2]) temp.push(data?.[2]);
    // return temp;
  }

  getTranslationFromResponse(keyword: string) {
    const data = this.data.find((item: any) => item.fuelType.en === keyword);
    return data?.fuelType?.[this.lang] || '';
  }

  getTranslationForAll() {
    return this.fuelTypes.map((item: any) => {
      return {
        en: item,
        ar: this.getTranslationFromResponse(item)
      }
    });
  }

  getPriceForMonthAndFuelType(monthIndex: number, fuelType: string): string | undefined {
    const matchingItem = this.data.find(item => item.month === monthIndex && item.fuelType['en'] === fuelType);
    return matchingItem ? matchingItem.price : undefined;
  }


  yearChange(option: any) {
    this.YearsDDL.selected = option;
    this.getContentPage();
  }
}
