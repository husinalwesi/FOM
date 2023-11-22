import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "src/app/i18n/translation.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { ActivatedRoute } from '@angular/router';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-payment-of-wallet',
  templateUrl: './payment-of-wallet.component.html',
  styleUrls: ['./payment-of-wallet.component.scss']
})
export class PaymentOfWalletComponent {
  lang: string = 'en';
  amount: number = 0;
  cyberSourceResponse: any;
  qpResponse: any;
  paymentType: string = 'CyberSource';

  isSubmitted: boolean = false;

  termsConditions: any = {
    title: {
      en: 'I agree with payment <a href="/pages/TopupTermsAndCondition" style="color:red !important">Terms and Conditions</a>',
      ar: 'I agree with payment <a href="/pages/TopupTermsAndCondition">Terms and Conditions</a>'
    },
    name: 'termsConditions',
    value: false
  };



  constructor(
    private translate: TranslateService,
    private TranslationService: TranslationService,
    private route: ActivatedRoute,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private sharedService: SharedService,
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();

    this.metaTagsService.updateMetaTags({
      title: "Checkout | Woqod",
      description: "Checkout | Woqod",
      keywords: ["Woqod 1", "Woqod 2"]
    });

  }

  ngOnInit(): void {
    this.amount = +this.route.snapshot.queryParams?.amount || 0;
  }

  toPayment() {
    this.isSubmitted = true;
    if (this.termsConditions.value) {
      // this.sharedService.enableFullLoader();

      if (this.paymentType === 'CyberSource') {
        this.multimediaService.getPaymentData({ amount: this.amount }, 'woqod').subscribe((response) => {
          this.cyberSourceResponse = response;
        });
      } else if (this.paymentType === 'QPay') {

        this.multimediaService.getPaymentDataQP({ amount: this.amount }, 'woqod').subscribe((response) => {
          this.qpResponse = response;
        });

      }

    }
  }
}
