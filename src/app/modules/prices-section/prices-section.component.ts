import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';

@Component({
  selector: 'app-prices-section',
  templateUrl: './prices-section.component.html',
  styleUrls: ['./prices-section.component.scss']
})
export class PricesSectionComponent {
  @Input() lang: string = "en";
  @Input() data: any;
  isModalEnabled: boolean = false;
  selectedItem: any;

  constructor(
    private multimediaService: MultimediaService,
    private cdk: ChangeDetectorRef
  ) { }

  itemClick(item: any) {
    this.selectedItem = item;
    this.getDetails(this.selectedItem.id);
  }

  getDetails(categoryID: string) {
    let payload = { PageSize: 100, PageNumber: 1 };
    if (categoryID) Object.assign(payload, { CategoryID: categoryID });

    this.multimediaService.getAutoCareSubServicesPricingCategory(payload).subscribe((response) => {
      this.selectedItem.table.tbody = (response.pageItems || []).map((item: any) => {
        return [
          {
            en: item.titleEN,
            ar: item.titleAR
          },
          '120.00'
        ]
      });
      this.isModalEnabled = true;
    });
  }

  viewAll() {
    this.getDetails('');
  }

}
