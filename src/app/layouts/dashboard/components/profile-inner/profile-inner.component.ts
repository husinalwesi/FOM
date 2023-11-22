import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { MSAL_GUARD_CONFIG, MsalGuardConfiguration, MsalService } from '@azure/msal-angular';
import { InteractionType } from '@azure/msal-browser';
import { Store } from '@ngrx/store';
import { FormatDateToApiFormatPipe } from 'src/app/pipes/format-date-to-api-format.pipe';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { SharedService } from 'src/app/services/shared.service';
import { beginLogin } from 'src/app/store/user/user.action';
import { selectUserData } from 'src/app/store/user/user.selectors';
import { TranslationService } from "src/app/i18n/translation.service";

@Component({
  selector: 'app-profile-inner',
  templateUrl: './profile-inner.component.html',
  styleUrls: ['./profile-inner.component.scss']
})
export class ProfileInnerComponent {
  @Input() selectedStep = 'profile';
  lang: string = 'en';
  DateofToday: Date = new Date();
  isDdlEnabled: boolean = false;
  isModalEnabled3: boolean = false;
  fireCloseAnimation: boolean = false;
  genderDDL: any = {
    selected: null,
    placeholder: 'SIGN_IN.GENDER',
    list: [
      {
        key: 'male',
        title: {
          en: 'MALE',
          ar: 'ذكر'
        }
      },
      {
        key: 'female',
        title: {
          en: 'female',
          ar: 'أنثى'
        }
      }
    ]
  };

  profile: any = {
    label: "",
    accept: ["jpg", "png"],
    isRequired: true,
    file: null,
    url: "",
  };


  isFormSubmitted: boolean = false;

  // isSubmittedImage: boolean = false;
  // isPersonalSubmitted: boolean = false;
  // isAddressSubmitted: boolean = false;

  userDetails: any = null;
  isImageInEditMode: boolean = false;
  isPersonalInEditMode: boolean = false;
  isAddressInEditMode: boolean = false;


  userDataView: any = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    country: '',
    city: '',
    poBox: '',
    dateOfBirth: '',
    dateOfBirthText: '',
    address: '',
    imageID: '',
    latitude: '',
    longitude: '',
    qid: '',
    gender: '',
  };

  userDataEdit: any = null;






  isSubmitted: boolean = false;
  terms: any = {
    title: 'I agree with WOQOD Terms and Conditions',
    name: 'terms',
    value: false
  };

  resoneForDeactivateDDL: any = {
    selected: null,
    placeholder: "Resone for deactivate",
    list: [],
  };

  userDetails2: any;
  // @Input() isModalEnabled3: boolean = false;




  constructor(
    private multimediaService: MultimediaService,
    private formatDateToApiFormatPipe: FormatDateToApiFormatPipe,
    private store: Store,
    private TranslationService: TranslationService,

    @Inject(PLATFORM_ID) private platformId: Object,



    // private multimediaService: MultimediaService,
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private sharedService: SharedService,
    // private store: Store,
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }



  ngOnInit(): void {
    this.getUserData();
    this.getSiteUserDeactivateReasons();
    this.getUserData2();
  }
  text() {
    this.isImageInEditMode = true;
    this.isPersonalInEditMode = true;
    this.isAddressInEditMode = true;
  }
  getUserData() {
    let userDetails: any = isPlatformBrowser(this.platformId) ? localStorage.getItem('userDetails') : null;

    this.store.select(selectUserData).subscribe(data => {
      if (data) {
        this.userDetails = data
      } else {
        this.userDetails = userDetails ? JSON.parse(userDetails) : null;
      }

      this.userDataView = {
        firstName: this.userDetails.firstName || '',
        lastName: this.userDetails.lastName || '',
        email: this.userDetails.email || '',
        mobile: this.userDetails.mobile || '',
        country: this.userDetails.country || '',
        city: this.userDetails.city || '',
        poBox: this.userDetails.poBox || '',
        dateOfBirth: this.userDetails.dateOfBirth ? new Date(this.userDetails.dateOfBirth) : null,
        dateOfBirthText: this.userDetails.dateOfBirth || '',
        address: this.userDetails.address || '',
        imageID: this.userDetails.imageID || '',
        latitude: this.userDetails.latitude || '',
        longitude: this.userDetails.longitude || '',
        qid: this.userDetails.qid || '',
        gender: this.userDetails.gender || '',
      };
      this.profile.file = null;
      this.profile.url = this.userDetails.imageID;
      this.userDataEdit = JSON.parse(JSON.stringify(this.userDataView));//clone-object-without-reference-javascript
      this.genderDDL.selected = ((this.userDetails.gender || '') === 'male') ? this.genderDDL.list[0] : this.genderDDL.list[1];
    });
  }

  onSubmit(form: any) {
    this.isDdlEnabled = false;
    this.isFormSubmitted = true;
    if (
      form.controls.firstName.valid &&
      form.controls.lastName.valid &&
      form.controls.email.valid &&
      form.controls.mobile.valid &&
      form.controls.qid.valid &&
      this.genderDDL.selected &&
      this.userDataEdit.dateOfBirthText &&
      form.controls.country.valid
    ) {
      this.updateProfile();
    } else {
      console.log("error form");

    }
  }

  updateProfile() {
    let data = new FormData();
    if (this.profile.file) data.append('ImageFile', this.profile.file);
    // 
    data.append('FirstName', this.userDataEdit.firstName);
    data.append('LastName', this.userDataEdit.lastName);
    data.append('DateOfBirth', this.formatDateToApiFormatPipe.transform(new Date(this.userDataEdit.dateOfBirthText)));
    data.append('QID', this.userDataEdit.qid);
    data.append('Gender', this.genderDDL?.selected?.key || '');
    data.append('Email', this.userDataEdit.email);
    data.append('Mobile', this.userDataEdit.mobile);
    // 
    data.append('Country', this.userDataEdit.country);
    data.append('City', this.userDataEdit.city);
    data.append('PoBox', this.userDataEdit.poBox);
    data.append('Address', this.userDataEdit.address);


    // keep it always
    data.append('MediaAccess', this.userDetails.mediaAccess);
    data.append('SendOrderDeliveredNotification', this.userDetails.sendOrderDeliveredNotification);
    data.append('Latitude', this.userDetails.latitude);
    data.append('SendBookingChangedNotification', this.userDetails.sendBookingChangedNotification);
    data.append('Longitude', this.userDetails.longitude);
    data.append('SendSMS', this.userDetails.sendSMS);
    data.append('SendBookingConfirmationNotification', this.userDetails.sendBookingConfirmationNotification);
    data.append('Biometrics', this.userDetails.biometrics);
    data.append('SendEmailNotification', this.userDetails.sendEmailNotification);

    this.multimediaService.updateUserProfile(data).subscribe(
      (response) => {
        // 
        this.getUserByToken();
      }, (error) => {
        // 
      }
    );
  }

  getUserByToken(): void {
    // this.multimediaService.getUserByToken().subscribe(
    //   (user) => {
    //     localStorage.setItem('userDetails', JSON.stringify(user));
    //     this.getUserData();
    //     this.closeForms();
    //   },
    //   (error) => {
    //     console.error('Error fetching users', error);
    //   }
    // );
    try {
      this.store.dispatch(beginLogin())
      this.getUserData();
      this.closeForms();
    } catch (error) {
      // console.error('Error fetching users', error);
    }
  }

  cancelForm() {
    this.resetForms();
    this.closeForms();
  }
  toggleDDL() {
    if (this.isDdlEnabled) {
      this.fireCloseAnimation = true;
      setTimeout(() => {
        this.isDdlEnabled = false;
        this.fireCloseAnimation = false;
      }, 300);
    } else {
      this.isDdlEnabled = true;
    }
  }
  toggleViews(view: string) {
    this.resetForms();
    this.closeForms();
    if (view === 'image') {
      this.isImageInEditMode = true;
    } else if (view === 'personal') {
      this.isPersonalInEditMode = true;
    } else if (view === 'address') {
      this.isAddressInEditMode = true;
    }
  }

  closeForms() {
    this.isImageInEditMode = false;
    this.isPersonalInEditMode = false;
    this.isAddressInEditMode = false;
    this.isModalEnabled3 = false
  }

  resetForms() {
    this.isFormSubmitted = false;
    this.isModalEnabled3 = false
    // TODO:: reset the form.. 
    this.getUserData();
  }

  getSiteUserDeactivateReasons() {
    this.multimediaService.getSiteUserDeactivateReasons({}).subscribe((response) => {
      this.resoneForDeactivateDDL.list = (response || []).map((item: any) => {
        return {
          key: item.detailesId,
          title: {
            en: item.nameEn,
            ar: item.nameAr,
          },
        }
      });
    });
  }


  logout() {
    this.sharedService.enableFullLoader();
    const activeAccount =
      this.authService.instance.getActiveAccount() ||
      this.authService.instance.getAllAccounts()[0];

    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
      this.authService.logoutPopup({
        account: activeAccount,
      });
    } else {
      this.authService.logoutRedirect({
        account: activeAccount,
      });
    }
  }



  getUserData2() {
    // let userDetails: any = localStorage.getItem('userDetails');
    // this.userDetails = userDetails ? JSON.parse(userDetails) : null;

    this.store.select(selectUserData).subscribe(data => {
      this.userDetails2 = data || null
    })
  }

  getOTP() {
    this.isSubmitted = true;
    if (this.terms.value && this.resoneForDeactivateDDL.selected) {
      this.multimediaService.deleteAccount({ ReasonID: this.resoneForDeactivateDDL.selected.key }).subscribe((response) => {
        this.logout();
      });

    }
  }



}
