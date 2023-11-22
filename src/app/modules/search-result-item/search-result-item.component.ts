import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent {
  @Input() lang: string = "en";
  @Input() data: any;
  constructor(private sharedService: SharedService){}
  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }
}
