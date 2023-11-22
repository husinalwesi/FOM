import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormatDateToApiFormatPipe } from 'src/app/pipes/format-date-to-api-format.pipe';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { v4 as uuidv4 } from 'uuid';
import { TranslationService } from 'src/app/i18n/translation.service';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { SharedService } from 'src/app/services/shared.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUserData } from 'src/app/store/user/user.selectors';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-rent-shop-pop-up',
  templateUrl: './rent-shop-pop-up.component.html',
  styleUrls: ['./rent-shop-pop-up.component.scss']
})
export class RentShopPopUpComponent {
  private routerEventsSubscription: Subscription;
  stationName: any = {
    selected: null,
    placeholder: 'Station Name',
    list: []
  }
  id: string | null = "";
  stationData: any = null;
  PropertyId: any = [];
  lang: string = "en";
  data: any = {};
  userDetails: any = null;
  breadCrumb: any = [
    {
      title: 'BREADCRUMB.KENAR_SHOP',
      path: '/kenar-shop'
    },
    {
      title: 'KENAR.RENT_SHOP',
      path: '/rent-shop'
    }
  ];
  selectedStep: string = "shopInformation";
  isPaymentSuccessEnabled: boolean = false;
  steps: any = [
    {
      key: 'shopInformation',
      text: 'STEPS.SHOP_INFORMATION'
    },
    {
      key: 'personalInformation',
      text: 'STEPS.PERSONAL_INFORMATION'
    },
    {
      key: 'businessInformation',
      text: 'STEPS.BUSINESS_INFORMATION'
    },
    {
      key: 'attachments',
      text: 'STEPS.ATTACHMENTS'
    },
    {
      key: 'submission',
      text: 'STEPS.SUBMISSION'
    }
  ];
  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private route: ActivatedRoute,
    private multimediaService: MultimediaService,
    private formatDateToApiFormatPipe: FormatDateToApiFormatPipe,
    private TranslationService: TranslationService,
    private router: Router,
    private routeLocalizationPipe: RouteLocalizationPipe,
    private sharedService: SharedService,
    private store: Store,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
    // this.id = this.route.snapshot.paramMap.get('ID');
    this.getUserDetails();
    this.routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // this.id = this.route.snapshot.paramMap.get('ID');
        this.getData();
        // this.getKenarPropertyId();
        // this.getKenarPropertyByID();
      }
    });
    // this.translate.onLangChange.subscribe(data => {
    //   setTimeout(() => {
    //     this.metaTagsService.updateMetaTags({
    //       title: "Rent Shop | Woqod",
    //       description: "Rent Shop | Woqod",
    //       keywords: ["Woqod 1", "Woqod 2"],
    //       img: ''
    //     });
    //   });
    // });

    this.metaTagsService.updateMetaTags({
      title: "Rent Shop | Woqod",
      description: "Rent Shop | Woqod",
      keywords: ["Woqod 1", "Woqod 2"],
      img: ''
    });
  }
  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   this.getKenarPropertyId();
  //   this.getKenarPropertyByID();
  // }

  getData() {
    this.id = this.route.snapshot.paramMap.get('ID');
    this.getKenarPropertyId();
    this.getKenarPropertyByID();
  }

  getUserDetails() {
    let userDetails: any = isPlatformBrowser(this.platformId) ? localStorage.getItem('userDetails') : null;

    this.store.select(selectUserData).subscribe(data => {
      if (data) {
        this.userDetails = data
      } else {
        this.userDetails = userDetails ? JSON.parse(userDetails) : null;
      }
    });
  }

  getKenarPropertyId() {
    this.multimediaService.getPropertyId({ PropertyId: this.id }).subscribe((response) => {
      this.PropertyId = (response || []).map((item: any, index: number) => {
        return {
          title: {
            en: item.titleEN,
            ar: item.titleAR,
          },
          content: {
            en: item.descriptionEN,
            ar: item.descriptionAR,
          },
          checkBox: {
            title: 'SHOP.I_AGREE',
            name: `terms${index}`,
            value: false
          },
        };

      });
    });

  }

  getKenarPropertyByID() {
    this.multimediaService.getKenarPropertyByID({ KenarPropertyID: this.id }).subscribe((response) => {
      this.stationData = {
        stationNumber: response.shopNumber,
        title: {
          en: response.nameEN,
          ar: response.nameAR
        },
        deadline: response.deadLine ? new Date(response.deadLine) : null,
        location: {
          en: response.locationEN,
          ar: response.locationAR
        },
        stationName: {
          en: 'response.nameEN',
          ar: 'response.nameAR',
        },
        shopRent: response.shopRent,
        shopSize: response.shopSize,
        noOfApplicants: response.noOfApplicants,
        petrolStationName: response.petrolStationName
      };
      this.getStationList(response.petrolStationName);
    },
      (error) => {
        this.router.navigate([this.routeLocalizationPipe.transform('/error/404')], { replaceUrl: true })
      }
    );
  }

  getStationList(stationID: string) {
    this.multimediaService.getStationList().subscribe((response) => {
      this.stationName.list = (response || []).map((item: any) => {
        return {
          key: item.detailesId,
          title: {
            en: item.nameEn,
            ar: item.nameAr
          }
        }
      });

      this.stationName.selected = this.stationName.list.find((station: any) => station.key === stationID) || null;
    });
  }


  nextStep(data: any) {
    if (
      this.selectedStep === 'attachments' ||
      this.selectedStep === 'personalInformation' ||
      this.selectedStep === 'businessInformation' ||
      this.selectedStep === 'shopInformation'
    ) this.data[this.selectedStep] = data;
    // 
    if (this.selectedStep === 'shopInformation') this.selectedStep = 'personalInformation';
    else if (this.selectedStep === 'personalInformation') this.selectedStep = 'businessInformation';
    else if (this.selectedStep === 'businessInformation') this.selectedStep = 'attachments';
    else if (this.selectedStep === 'attachments') this.selectedStep = 'submission';
    else if (this.selectedStep === 'submission') {


      const userID = this.userDetails?.siteUsersID || '';

      let formData = new FormData();
      formData.append("leasingInterestApplicationID", uuidv4());
      formData.append("kenarPropertiesID", (this.id || '').toString());
      if (userID) formData.append("userIds", userID);
      formData.append("firstName", this.data.personalInformation.firstName);
      formData.append("middleName", this.data.personalInformation.middleName);
      formData.append("lastName", this.data.personalInformation.lastName);
      formData.append("email", this.data.personalInformation.email);
      formData.append("mobileNumber", this.data.personalInformation.mobileNumber);
      formData.append("officeTelephoneNumber", this.data.personalInformation.officeTelephoneNumber);
      formData.append("bestTimetoCall", this.formatDateToApiFormatPipe.transform(this.data.personalInformation.bestTimeToCall));
      formData.append("stationName", this.stationName?.selected?.key);
      // 
      formData.append("noOfApplicants", this.data.shopInformation.NumberOfApplicants);
      formData.append("shopRentPerMonth", this.data.shopInformation.Shoppre);
      formData.append("shopSize", this.data.shopInformation.ShopSize);
      formData.append("noOfShopsRequired", this.data.shopInformation.numberOfShopsRequired.key);
      formData.append("companyNameEN", this.data.businessInformation.companyName);
      formData.append("companyNameAR", this.data.businessInformation.companyNameAR);
      formData.append("businessCategoryId", this.data.businessInformation.categoryOfBusiness.key);
      formData.append("commercialRegistrationNumber", this.data.businessInformation.crNumber);
      formData.append("crStartDate", this.formatDateToApiFormatPipe.transform(this.data.businessInformation.StartDate));
      formData.append("crEndDate", this.formatDateToApiFormatPipe.transform(this.data.businessInformation.EndDate));
      formData.append("businessMobileNumber", 'string'); // exist in the API but not on the BRD
      formData.append("noOfBranchesInQatar", this.data.businessInformation.numberOfBranchesInQatar);
      formData.append("listlocationQatar", this.data.businessInformation.locations1);
      formData.append("noOfBranchesInGCC", this.data.businessInformation.numberOfBranchesInGCC);
      formData.append("listlocationGCC", this.data.businessInformation.locations2);
      formData.append("noOfEmployees", this.data.businessInformation.numberOfEmployees);
      formData.append("companyTurnoverInQatar", this.data.businessInformation.companyTurnoverInQatar);
      formData.append("existingTenant", (this.data.businessInformation.existingTenant === 'yes').toString());
      formData.append("willYouHaveAPartner", (this.data.businessInformation.willYouHaveAPartner === 'yes').toString());
      formData.append("expectedDateToStartBusiness", this.formatDateToApiFormatPipe.transform(this.data.businessInformation.expectedStartDate));
      formData.append("additionalProductsOffering", this.data.businessInformation.customers);
      formData.append("whyShouldWeChooseYou", this.data.businessInformation.leasing);
      formData.append("ownershipAndBusinessNatureRestrictions", 'true');
      formData.append("subLeaseRestrictions", 'true');
      formData.append("woqodTermsAndConditions", 'true');
      formData.append("franchiseCompany", (this.data.attachments.franchiseCompany === 'yes').toString());

      formData.append("commercialRegistration", this.data.attachments.commercialRegisteration);
      formData.append("copyOfComputerCard", this.data.attachments.copyOfComputer);
      formData.append("bankAccountDetails", this.data.attachments.bankAccounntDetails);
      formData.append("confirmationLetter", this.data.attachments.letterFromBank);
      formData.append("copyOfOwnersID", this.data.attachments.copyOfOwnersID);
      formData.append("companyProfile", this.data.attachments.companyProfile);
      formData.append("brandingProfile", this.data.attachments.brandingProfile);
      this.sharedService.enableFullLoader();
      this.multimediaService.submitInterestInLeasingProperty(formData).subscribe((response) => {
        // console.log(response);
        this.sharedService.disableFullLoader();
        this.isPaymentSuccessEnabled = true;


      },
        (error) => {
          alert('an error occurred: ' + error.statusText);
          this.sharedService.disableFullLoader();
        }
      );

    }

  }

  prevStep() {
    if (this.selectedStep === 'submission') this.selectedStep = 'attachments';
    else if (this.selectedStep === 'attachments') this.selectedStep = 'businessInformation';
    else if (this.selectedStep === 'businessInformation') this.selectedStep = 'personalInformation';
    else if (this.selectedStep === 'personalInformation') this.selectedStep = 'shopInformation';
    // 

  }

  ngOnDestroy() {
    // Unsubscribe from router events to prevent memory leaks
    this.routerEventsSubscription.unsubscribe();
  }

}
