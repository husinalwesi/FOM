import { Component, EventEmitter, Output } from "@angular/core";
import { MultimediaService } from "src/app/services/apis/multimedia.service";

@Component({
  selector: "app-business-information",
  templateUrl: "./business-information.component.html",
  styleUrls: ["./business-information.component.scss"],
})
export class BusinessInformationComponent {
  constructor(private multimediaService: MultimediaService,
  ) { }
  @Output() nextStep: EventEmitter<any> = new EventEmitter();
  @Output() prevStep: EventEmitter<any> = new EventEmitter();
  existingTenant: string = "no";
  willYouHaveAPartner: string = "no";
  checkValidate: boolean = false;
  DateOfToday: Date = new Date();
  formData: any = {
    companyName: "",
    companyNameAR: "",
    numberOfBranchesInQatar: "",
    numberOfBranchesInGCC: "",
    crNumber: "",
    StartDate: "",
    EndDate: "",
    // mobileNumber: '',
    locations1: "",
    locations2: "",
    numberOfEmployees: "",
    companyTurnoverInQatar: "",
    customers: "",
    leasing: "",
    expectedStartDate: "",
  };
  isSubmitted: boolean = false;

  categoryOfBusiness: any = {
    selected: null,
    placeholder: "RETAIL.CATEGORY_OF_BUSINESS",
    list: [],
  };


  onSubmit(form: any) {
    this.isSubmitted = true;
    if (
      form.valid &&
      this.formData.expectedStartDate &&
      this.categoryOfBusiness.selected
    ) {
      const data = {
        ...this.formData,
        ...{
          existingTenant: this.existingTenant,
          willYouHaveAPartner: this.willYouHaveAPartner,
          categoryOfBusiness: this.categoryOfBusiness.selected,
        },
      };
      this.nextStep.emit(data);
    }
  }

  categoryOfBusinessChange(option: any) {
    this.categoryOfBusiness.selected = option;
  }

  ngOnInit(): void {
    this.DateOfToday = this.getPreviousDay();
    this.getCategoriesList();
  }
  getCategoriesList() {
    this.multimediaService.getRentShopCategoryList().subscribe((response) => {
      this.categoryOfBusiness.list = (response || []).map((item: any) => {
        return {
          key: item.businessCategoryID,
          title: {
            en: item.nameEN,
            ar: item.nameAR,
          },
        };
      });
    });
  }
  isFormEnabled: boolean = true;
  getCheckValidate(form: any) {
    if (form.controls.crNumber.valid) {
      const id = this.formData.crNumber;
      this.multimediaService.getRentShopValidate({ id: id }).subscribe(
        (response) => {
          console.log(response);
          this.checkValidate = true;
          this.isFormEnabled = true; // Enable the form inputs
        },
        (error) => {
          this.checkValidate = false;
          console.error("Error:", error);
          this.isFormEnabled = false; // Keep the form inputs disabled
        }
      );
    } else {
      alert('field cr is not valid');
    }
  }

  back() {
    this.prevStep.emit();
  }
  getPreviousDay(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
    return previous;
  }
}
