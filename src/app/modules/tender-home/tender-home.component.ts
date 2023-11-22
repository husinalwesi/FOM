import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-tender-home',
  templateUrl: './tender-home.component.html',
  styleUrls: ['./tender-home.component.scss']
})
export class TenderHomeComponent {
  @Input() table: any = null;
  @Input() lang: string = 'en';
  constructor(private sharedService: SharedService){}
  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }
}
