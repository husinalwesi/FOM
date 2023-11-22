import { Component, Input, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/i18n/translation.service';
import { SharedService } from 'src/app/services/shared.service';
import { ResizeService } from 'src/app/services/resize.service';
import { GUID } from "src/app/const/guid";
@Component({
  selector: 'app-card-w-category',
  templateUrl: './card-w-category.component.html',
  styleUrls: ['./card-w-category.component.scss']
})
export class CardWCategoryComponent {
  lang: string = "en";
  @Input() data: any;
  @Input() bgColor: string = '#CBCBCB5E'
  @Input() titleColor: string = '#006120'

  defaultImage: string = GUID.empty;

  height: number = 0;
  @ViewChild('card', { static: false }) card: any;

  constructor(
    private translate: TranslateService,
    private translationService: TranslationService,
    private sharedService: SharedService,
    private resizeService: ResizeService
  ) {
    this.lang = this.translationService.getSelectedLanguage();
  }
  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }

  ngAfterViewInit(): void {
    this.updateCarouselConfig();
    this.resizeService.screenWidthChange$.subscribe(data => this.updateCarouselConfig());
  }

  updateCarouselConfig() {
    if (this.card) {
      if (typeof window !== 'undefined') {
        const ratio: number = 440 / 270;
        this.height = this.card.nativeElement.offsetWidth / ratio;
      }
    }
  }

}
