import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { GUID } from "src/app/const/guid";

@Component({
  selector: 'app-success-payment-tab',
  templateUrl: './success-payment-tab.component.html',
  styleUrls: ['./success-payment-tab.component.scss']
})
export class SuccessPaymentTabComponent {
  @Input() lang: string = 'en';
  isLoadingEnabled: boolean = false;
  @Input() data: any = null;
  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
  ) {
  }
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    // this.isLoadingEnabled = true;
    this.multimediaService.getStaticMessage({ ID: GUID.woqod.success.payment }).subscribe((response) => {
      this.data = {
        title: {
          en: response.titleEN,
          ar: response.titleAR
        },
        description: {
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
      };
      // this.isLoadingEnabled = false;
    });
  }
}
