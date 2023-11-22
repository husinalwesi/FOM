import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-product-tab',
  templateUrl: './product-tab.component.html',
  styleUrls: ['./product-tab.component.scss']
})
export class ProductTabComponent {
  isShowMoreEnabled: boolean = false;
  @Input() products: any = null;
  @Input() lang: string = 'en';
  originalShowItemCount = 3;
  showItemCount = 3;
  loadMoreButtonTextKey = 'SHARED.LOAD';
  showLessButtonTextKey = 'SHARED.LESS';
  showAllItems: boolean = false;
  constructor(private sharedService: SharedService){}
  loadMore() {
    this.isShowMoreEnabled = !this.isShowMoreEnabled;
  }
  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }

}
