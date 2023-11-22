import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { SharedService } from "src/app/services/shared.service";


@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.scss"],
})
export class FeedbackComponent {
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
  departmentDDL: any = {
    selected: null,
    placeholder: "FEEDBACK.SELECT_DEPATMENT",
    list: []
  };
  typeDDL: any = {
    selected: null,
    placeholder: "FEEDBACK.SELECT_TYPE",
    list: []
  };
  formData: any = {
    fullname: "",
    email: "",
    company: "",
    title: "",
    titleAR: "",
    comment: "",
    mobileNumber: "",
  };

  media: any = {
    label: "",
    file: null,
    url: "",
    accept: ["pdf", "word", "jpg", "png"],
    isRequired: true,
  };
  ngOnInit(): void {
    this.getCategory();
    this.getSector();
    this.getDepartment();
    this.getType();

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
  getDepartment() {
    this.multimediaService.getFeedbackDepartment().subscribe((response) => {
      this.departmentDDL.list = (response || []).map((item: any) => {
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
    private router: Router,
    private metaTagsService: MetaTagsService,
    private routeLocalizationPipe: RouteLocalizationPipe,
    private sharedService: SharedService,
  ) {

    this.metaTagsService.updateMetaTags({
      title: "Feedback | Woqod",
      description: "Feedback | Woqod",
      keywords: ["Woqod 1", "Woqod 2"],
      img: '',
    });
  }

  onSubmit(form: any) {
    this.isSubmitted = true;
    if (
      form.valid &&
      this.sectorDDL.selected &&
      this.categoryDDL.selected &&
      this.typeDDL.selected &&
      this.departmentDDL.selected &&
      this.media.file && this.isVerified
    ) {
      this.submitFeedback();
    }
  }

  submitFeedback() {
    const formData = new FormData();
    formData.append("TitleEN", this.formData.title);
    formData.append("SectorID", this.sectorDDL.selected.key);
    formData.append("FeedbackSourceID", 'eac17b98-ceca-4330-88bb-4d60091091eb');
    // formData.append("TitleAR", this.formData.titleAR);
    // formData.append("MobileNumber", this.formData.mobileNumber);
    formData.append("FeedbackTypeID", this.typeDDL.selected.key);
    formData.append("DepartmentID", this.departmentDDL.selected.key);
    formData.append("EmailAddress", this.formData.email);
    formData.append("CategoryID", this.categoryDDL.selected.key);
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
          this.sharedService.disableFullLoader();
          console.error("Error submitting feedback");
        }
      }
    );
  }

  handleSuccess() {
    this.router.navigateByUrl(this.routeLocalizationPipe.transform('/fahes/contact-us/feedback/success'));
  }

  categoryChange(option: any) {
    this.categoryDDL.selected = option;
  }

  sectorChange(option: any) {
    this.sectorDDL.selected = option;
  }
  departmentChange(option: any) {
    this.departmentDDL.selected = option;
  }
  typeChange(option: any) {
    this.typeDDL.selected = option;
  }
}
