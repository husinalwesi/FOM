import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() pickerType: string = "calendar";
  @Output() filterSubmit: EventEmitter<any> = new EventEmitter();
  dateFrom: Date | null = null;
  dateTo: Date | null = null;
  eventCategory: string = "";
  @Input() lang: string = "en";
  eventCategoryDDL: any = {
    selected: null,
    placeholder: 'SHARED.CHOOSE_ONE',
    list: []
  };

  constructor(
    private multimediaService: MultimediaService,
  ) { }

  ngOnInit(): void {
    this.getPromotionCategories();
  }

  onSubmit(form: any) {
    this.filterSubmit.emit({
      date: {
        from: this.dateFrom,
        to: this.dateTo
      },
      category: this.eventCategory
    });
  }

  getPromotionCategories() {
    this.multimediaService.getEventCategories().subscribe((response) => {
      this.eventCategoryDDL.list = (response || []).map((item: any) => {
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
