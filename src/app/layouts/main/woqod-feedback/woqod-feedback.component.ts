import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { SharedService } from 'src/app/services/shared.service';
import { GUID } from "src/app/const/guid";
import { Store } from "@ngrx/store";
import { selectUserData } from "src/app/store/user/user.selectors";
import { TranslationService } from "src/app/i18n/translation.service";

@Component({
  selector: 'app-woqod-feedback',
  templateUrl: './woqod-feedback.component.html',
  styleUrls: ['./woqod-feedback.component.scss']
})
export class WoqodFeedbackComponent {
  isSubmitted: boolean = false;
  isVerified: boolean = false;
  categoryDDL: any = {
    selected: null,
    placeholder: 'FEEDBACK.SELECT_CATEGORY',
    list: []
  };
  sectorDDL: any = {
    selected: null,
    placeholder: "FEEDBACK.SELECT_SECTOR",
    list: []
  };
  // departmentDDL: any = {
  //   selected: null,
  //   placeholder: "FEEDBACK.SELECT_DEPATMENT",
  //   list: []
  // };
  typeDDL: any = {
    selected: null,
    placeholder: "FEEDBACK.SELECT_TYPE",
    list: []
  };
  formData: any = {
    fullname: "",
    email: "",
    company: "",
    // title: "",
    // titleAR: "",
    comment: "",
    mobileNumber: "",
  };

  media: any = {
    label: "",
    file: null,
    url: "",
    accept: ["pdf", "word", "jpg", "png", "xls", "xlsx", "gif"],

    isRequired: true,
  };
  isModalEnabled: boolean = false
  modalMessage: any = {
    title: {
      en: '',
      ar: ''
    },
    description: {
      en: '',
      ar: ''
    }
  }
  lang: string = "en";
  showFiles: boolean = true;
  userDetails: any;
  userDataView: any;

  ngOnInit(): void {
    this.getCategory();
    this.getSector();
    this.getType();
    this.getStaticMessage();
    this.getUserData()
    // this.getDepartment();
  }

  getCategory() {
    this.multimediaService.getFeedbackCategoryFahes().subscribe((response) => {
      this.categoryDDL.list = (response || []).map((item: any) => {
        return {
          key: item.detailesId,
          title: {
            en: item.nameEn,
            ar: item.nameAr
          }
        }
      });
    });
  }

  getSector() {
    this.multimediaService.getFeedbackSectorsFahes().subscribe((response) => {
      this.sectorDDL.list = (response || []).map((item: any) => {
        return {
          key: item.detailesId,
          title: {
            en: item.nameEn,
            ar: item.nameAr
          }
        }
      });
    });
  }

  // getDepartment() {
  //   this.multimediaService.getFeedbackDepartment().subscribe((response) => {
  //     this.departmentDDL.list = (response || []).map((item: any) => {
  //       return {
  //         key: item.detailesId,
  //         title: {
  //           en: item.nameEn,
  //           ar: item.nameAr
  //         }
  //       }
  //     });
  //   });
  // }

  getType() {
    this.multimediaService.getFeedbackType().subscribe((response) => {
      this.typeDDL.list = (response || []).map((item: any) => {
        return {
          key: item.detailesId,
          title: {
            en: item.nameEn,
            ar: item.nameAr
          }
        }
      });
    });
  }


  constructor(
    private multimediaService: MultimediaService,
    private translate: TranslateService,
    private TranslationService: TranslationService,
    private metaTagsService: MetaTagsService,
    private store: Store,
    private sharedService: SharedService,
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
    this.metaTagsService.updateMetaTags({
      title: "Feedback | Woqod",
      description: "Feedback | Woqod",
      keywords: ["Woqod 1", "Woqod 2"],
    });
  }

  onSubmit(form: any) {
    this.isSubmitted = true;
    if (
      form.valid &&
      this.sectorDDL.selected &&
      this.categoryDDL.selected &&
      this.typeDDL.selected &&
      // this.departmentDDL.selected &&
      // this.media.file &&
      this.isVerified
    ) {
      this.submitFeedback();
    }
  }

  submitFeedback() {
    const formData = new FormData();
    // formData.append("TitleEN", this.formData.title);
    formData.append("SectorID", this.sectorDDL.selected.key);
    // formData.append("TitleAR", this.formData.titleAR);
    formData.append("MobileNumber", this.formData.mobileNumber);
    formData.append("EmailAddress", this.formData.email);
    formData.append("FeedbackSourceID", 'eac17b98-ceca-4330-88bb-4d60091091eb');
    formData.append("CategoryID", this.categoryDDL.selected.key);
    formData.append("FeedbackTypeID", this.typeDDL.selected.key);
    // formData.append("DepartmentID", this.departmentDDL.selected.key);
    formData.append("FullName", this.formData.fullname);
    formData.append("Company", this.formData.company);
    formData.append("Comment", this.formData.comment);

    formData.append("ImageFiles", this.media.file);
    this.sharedService.enableFullLoader();
    this.multimediaService.fahesFeedback(formData).subscribe(
      (response) => {
        this.handleSuccess();
        this.sharedService.disableFullLoader();
      },
      (error) => {
        if (error.status === 200) {
          this.handleSuccess();
          this.sharedService.disableFullLoader();
        } else {
          alert('an error occurred: ' + error.statusText);
          this.sharedService.disableFullLoader();
        }
      }
    );
  }

  handleSuccess() {
    this.isModalEnabled = true;
    this.formData = {
      fullname: "",
      email: "",
      company: "",
      // title: "",
      // titleAR: "",
      comment: "",
      mobileNumber: "",
    };
    this.media.file = null;
    this.isVerified = false
    this.sectorDDL.selected = null;
    this.categoryDDL.selected = null;
    this.typeDDL.selected = null;
    // this.departmentDDL.selected = null;
    this.isSubmitted = false
    this.showFiles = false;
    setTimeout(() => {
      this.showFiles = true;
    });
    // this.router.navigateByUrl(this.routeLocalizationPipe.transform('/contact-us/feedback/success'));
  }

  categoryChange(option: any) {
    this.categoryDDL.selected = option;
  }

  sectorChange(option: any) {
    this.sectorDDL.selected = option;
  }

  // departmentChange(option: any) {
  //   this.departmentDDL.selected = option;
  // }

  typeChange(option: any) {
    this.typeDDL.selected = option;
  }

  getStaticMessage() {
    this.multimediaService.getStaticMessage({ ID: GUID.woqod.success.feedback }).subscribe((response) => {
      this.modalMessage = {
        title: {
          en: response.titleEN,
          ar: response.titleAR
        },
        desc: {
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
      };
    });
  }

  getUserData() {
    let userDetails: any = typeof window !== 'undefined' ? localStorage.getItem('userDetails') : null;

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
      };
      this.formData.fullname = this.userDataView?.firstName ? this.userDataView?.firstName + ' ' + this.userDataView?.lastName : ""
      this.formData.email = this.userDataView?.email
      this.formData.mobileNumber = this.userDataView?.mobile
    });
  }

}
