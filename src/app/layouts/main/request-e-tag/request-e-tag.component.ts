import { isPlatformBrowser } from "@angular/common";
import { Component, Inject, Input, PLATFORM_ID } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { RouteLocalizationPipe } from "src/app/pipes/route-localization.pipe";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { v4 as uuidv4 } from "uuid";
import { TranslationService } from "src/app/i18n/translation.service";

@Component({
  selector: "app-request-e-tag",
  templateUrl: "./request-e-tag.component.html",
  styleUrls: ["./request-e-tag.component.scss"],
})
export class RequestETagComponent {
  id: string | null = "";
  lang: string = "en";
  data: any = {};
  breadCrumb: any = [
    {
      title: "BREADCRUMB.REQUEST_E_TAG",
      path: "/request-e-tag",
    },
    // {
    //   title: "KENAR.RENT_SHOP",
    //   path: "/kenar-shop/rent-shop",
    // },
  ];
  selectedStep: string = "generalDetails";
  isPaymentSuccessEnabled: boolean = false;
  steps: any = [
    {
      key: "generalDetails",
      text: "STEPS.GENERAL_DETAILS",
    },
    {
      key: "vehicleDetails",
      text: "STEPS.VEHICLE_DETAILS",
    },
    {
      key: "bookAppointment",
      text: "STEPS.BOOK_APPOINTMENT",
    },
    {
      key: "TermsConditions",
      text: "STEPS.TERMS_AND_CONDITIONS",
    },
    {
      key: "payment",
      text: "STEPS.PAYMENT",
    },
  ];
  constructor(
    private translate: TranslateService,
    private TranslationService: TranslationService,
    private metaTagsService: MetaTagsService,
    private route: ActivatedRoute,
    private multimediaService: MultimediaService,
    private router: Router,
    private routeLocalizationPipe: RouteLocalizationPipe,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.id = this.route.snapshot.paramMap.get("ID");
    this.lang = this.TranslationService.getSelectedLanguage();
    this.metaTagsService.updateMetaTags({
      title: "Request E Tag | Woqod",
      description: "Request E Tag | Woqod",
      keywords: ["Woqod 1", "Woqod 2"],
      img: ''
    });
  }

  nextStep(data: any) {
    if (
      this.selectedStep === "generalDetails" ||
      this.selectedStep === "vehicleDetails" ||
      this.selectedStep === "bookAppointment" ||
      this.selectedStep === "TermsConditions" ||
      this.selectedStep === "payment"
    ) {
      this.data[this.selectedStep] = data;
    }

    if (data.isSaveForLater) {
      const formData = JSON.stringify(this.data);
      if (isPlatformBrowser(this.platformId))
        localStorage.setItem('etagForm', formData);
      // redirect..
      alert('the form saved for later, once you revisit the page you will see the form pre filled with your data, but you will lose the files :(');
      this.router.navigateByUrl(this.routeLocalizationPipe.transform(''));
      // 
    } else {
      if (this.selectedStep === "generalDetails") {
        let formData = new FormData();

        formData.append("nameEN", this.data.generalDetails.name);
        formData.append("nameAR", this.data.generalDetails.nameAR);
        formData.append("email", this.data.generalDetails.email);
        formData.append("QID", this.data.generalDetails.qid);
        formData.append("zoneNumber", this.data.generalDetails.zoneNumber);
        formData.append("streetNumber", this.data.generalDetails.streetNumber);
        formData.append("buildingNumber", this.data.generalDetails.building);
        formData.append("unit", this.data.generalDetails.unit);
        formData.append("TagsQuantity", this.data.generalDetails.numberOfTag);
        formData.append("QIDId", this.data.generalDetails.qidFile);

        // let formData = {
        //   nameEN: this.data.generalDetails.name,//
        //   nameAR: this.data.generalDetails.nameAR,//
        //   email: this.data.generalDetails.email,//
        //   QID: this.data.generalDetails.qid,//
        //   // mobileNumber: this.data.generalDetails.mobileNumber, ????
        //   zoneNumber: this.data.generalDetails.zoneNumber,//
        //   streetNumber: this.data.generalDetails.streetNumber,//
        //   buildingNumber: this.data.generalDetails.building,//
        //   unit: this.data.generalDetails.unit,//

        //   TagsQuantity: this.data.generalDetails.numberOfTag,//
        //   // pdBox: this.data.generalDetails.poBox,
        //   // faxNumber: this.data.generalDetails.faxNumber,
        //   // qidId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        //   QIDId: this.data.generalDetails.qidFile,//file
        //   // estimaraID: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        //   // createdBy: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        //   // modifiedBy: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        //   requestVehiclesList: []
        // };
        this.multimediaService
          .requestEtagGenralInformation(formData)
          .subscribe((response) => {
            if (isPlatformBrowser(this.platformId))
              localStorage.removeItem('etagForm');
            console.log(response);
            this.isPaymentSuccessEnabled = true;
            this.selectedStep = 'payment';
          });
      }
    }


    //
    // if (this.selectedStep === 'vehicleDetails') this.selectedStep = 'vehicleDetails';
    // else if (this.selectedStep === 'vehicleDetails') this.selectedStep = 'bookAppointment';
    // else if (this.selectedStep === 'bookAppointment') this.selectedStep = 'TermsConditions';
    // else if (this.selectedStep === 'TermsConditions') this.selectedStep = 'payment';
    // else if (this.selectedStep === 'generalDetails') {

    // }
  }

  prevStep() {
    // if (this.selectedStep === 'submission') this.selectedStep = 'attachments';
    // else if (this.selectedStep === 'attachments') this.selectedStep = 'businessInformation';
    // else if (this.selectedStep === 'businessInformation') this.selectedStep = 'personalInformation';
    // else if (this.selectedStep === 'personalInformation') this.selectedStep = 'shopInformation';
  }
}
