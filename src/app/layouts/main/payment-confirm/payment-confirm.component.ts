import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "src/app/i18n/translation.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { ActivatedRoute, Router } from '@angular/router';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';

@Component({
  selector: 'app-payment-confirm',
  templateUrl: './payment-confirm.component.html',
  styleUrls: ['./payment-confirm.component.scss']
})
export class PaymentConfirmComponent {
  lang: string = 'en';
  isLoadingEnabled: boolean = true;
  isSuccess: boolean = false;
  data: any = {
    trID: '',
    date: new Date(),
    paymentMethod: '',
    amount: 0,
    // extraAmount: 0,
    // totalWallet: 0,
    reason: ''
  };

  userWalletAmount: any = ''; // Declare a variable to store the fetched data

  constructor(
    private translate: TranslateService,
    private TranslationService: TranslationService,
    private route: ActivatedRoute,
    private router: Router,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private routeLocalizationPipe: RouteLocalizationPipe
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();

    this.metaTagsService.updateMetaTags({
      title: "Payment | Woqod",
      description: "Payment | Woqod",
      keywords: ["Woqod 1", "Woqod 2"]
    });

    // this.total = this.route.snapshot.queryParams?.amount || '';

  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    let isFahesPage = false;
    if (typeof window !== 'undefined') {
      const url = window.location.href;
      if (url.indexOf("fahes/") !== -1) {
        isFahesPage = true;
      }
    }
    let trID = this.route.snapshot.queryParams?.tid;
    if (!trID) this.router.navigate([this.routeLocalizationPipe.transform('')], { replaceUrl: true })

    this.isLoadingEnabled = true;
    this.multimediaService.getTransactionByID({ transactionId: trID }, isFahesPage).subscribe((response) => {
      if (!response) {
        this.router.navigate([this.routeLocalizationPipe.transform('/error/404')], { replaceUrl: true })
        return;
      }

      // {"isSuccess":true,"amount":"1"}
      this.isSuccess = response?.isSuccess || false;
      this.data = {
        trID: trID,
        // date: new Date(),
        date: response?.date ? new Date(response?.date) : null,
        paymentMethod: response?.type || '',
        // paymentMethod: 'Static',
        // 
        amount: response?.amount || 0,
        // amount: response?.amount || 0,
        // totalWallet: 1000,
        // 
        reason: ''
      };


      // const applications = response?.applicationInformation?.applications || [];
      // if (applications.length > 0 && applications.every((item: any) => +item.rCode === 1)) {
      //   this.isSuccess = true;
      //   this.data = {
      //     trID: trID,
      //     date: new Date(response.submitTimeUTC),
      //     paymentMethod: response.paymentInformation.paymentType.type,
      //     amount: response.orderInformation.amountDetails.totalAmount,
      //     extraAmount: response.orderInformation.amountDetails.totalAmount,
      //     totalWallet: 1000,
      //     // 
      //     reason: ''
      //   };
      // } else {
      //   this.isSuccess = false;
      //   this.data = {
      //     trID: '',
      //     date: new Date(),
      //     paymentMethod: '',
      //     amount: 0,
      //     extraAmount: 0,
      //     totalWallet: 0,
      //     // 
      //     reason: response.errorInformation.message
      //   };
      // }
      this.getSiteUserWalletAmmount();
    });
  }


  // toLocalZone(submitTimeUTC: any) {

  //   // Convert UTC time to a Date object
  //   const utcDate = new Date(submitTimeUTC);

  //   // Specify your local time zone (e.g., "America/New_York")
  //   const localTimeZone = "Your/Local/Timezone"; // Replace with your actual time zone

  //   // Create a formatter for the local time zone
  //   const formatter = new Intl.DateTimeFormat('en-US', {
  //     year: 'numeric',
  //     month: 'numeric',
  //     day: 'numeric',
  //     hour: 'numeric',
  //     minute: 'numeric',
  //     second: 'numeric',
  //     timeZone: localTimeZone
  //   });

  //   // Format the date and time in the local time zone
  //   const localTime = formatter.format(utcDate);

  //   return localTime;
  // }

  userWalletAmmount: any = '';

  getSiteUserWalletAmmount() {
    this.multimediaService.getSiteUserWalletAmmount({}).subscribe((response) => {
      this.userWalletAmmount = response;
      this.isLoadingEnabled = false;


      if (localStorage.getItem('mobileToken')) {
        localStorage.removeItem('mobileToken');
      }

    });
  }


}
