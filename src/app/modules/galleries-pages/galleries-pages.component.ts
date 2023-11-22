import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-galleries-pages',
  templateUrl: './galleries-pages.component.html',
  styleUrls: ['./galleries-pages.component.scss']
})
export class GalleriesPagesComponent {
  @Input() data: any;
  @Input() lang: string = 'en';
  @Input() pagesLayout: string = 'row' // row or gallery
  constructor(private sharedService: SharedService){}
  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }
}
