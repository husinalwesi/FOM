import { isPlatformBrowser } from "@angular/common";
import { Component, Inject, Input, PLATFORM_ID } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { FormatDateToApiFormatPipe } from 'src/app/pipes/format-date-to-api-format.pipe';
import { RouteLocalizationPipe } from "src/app/pipes/route-localization.pipe";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { SharedService } from "src/app/services/shared.service";
import { GUID } from "src/app/const/guid";

@Component({
  selector: "app-become-a-retail-supplier-content",
  templateUrl: "./become-a-retail-supplier-content.component.html",
  styleUrls: ["./become-a-retail-supplier-content.component.scss"],
})
export class BecomeARetailSupplierContentComponent {
  @Input() title: string = "";
  @Input() lang: string = "en";
  dateOfToday: Date = new Date();
  isSubmitted: boolean = false;
  isModalEnabled: boolean = false;
  showFiles: boolean = true;
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
  formData: any = {
    qid: "",
    email: "",
    supplierName: "",
    contactPerson: "",
    crNumber: "",
    StartDate: "",
    EndDate: "",
    productDescription: "",
    declaration: "",
  };
  CompanyProfile: any = {
    label: "BREADCRUMB.COMPANY_PROFILE",
    accept: ["pdf", "word", "jpg", "png"],
    isRequired: true,
    file: null,
    url: "",
  };
  cr: any = {
    label: "SHOP.CR_NUMBER",
    accept: ["pdf", "word", "jpg", "png"],
    isRequired: true,
    file: null,
    url: "",
  };
  TradeLicense: any = {
    label: "SHOP.TRADE",
    accept: ["pdf", "word", "jpg", "png"],
    isRequired: true,
    file: null,
    url: "",
  };
  taxCard: any = {
    label: "SHOP.TAX_CARD",
    accept: ["pdf", "word", "jpg", "png"],
    isRequired: true,
    file: null,
    url: "",
  };
  productCategoryDDL: any = {
    selected: [],
    placeholder: "RETAIL.PRODUCT_CATEGORY",
    list: [],
  };

  isFormEnabled: boolean = true
  checkValidate: boolean = false;

  requestCategory: any = {
    sidra: GUID.woqod.become_supplier.sidra,
    'auto-care': GUID.woqod.become_supplier.auto_care,
    general: GUID.woqod.become_supplier.general
  };
  id: string | null = "";
  selectedPage: string = '';

  constructor(
    private multimediaService: MultimediaService,
    private router: Router,
    private formatDateToApiFormatPipe: FormatDateToApiFormatPipe,
    private routeLocalizationPipe: RouteLocalizationPipe,
    private sharedService: SharedService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.paramMap.get('ID');

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.id = this.route.snapshot.paramMap.get('ID');
        this.definePage();
        this.GetRequestTypeID();
        this.getStaticMessage();
      }
    });
  }

  ngOnInit(): void {
    this.dateOfToday = this.getPreviousDay();
    this.definePage();
    this.GetRequestTypeID();
    this.getStaticMessage();
  }

  definePage() {
    this.selectedPage = this.route.snapshot.paramMap.get('ID') || '';
    if (!this.selectedPage) this.router.navigateByUrl(this.routeLocalizationPipe.transform(`/error/404`));

    if (!this.requestCategory[this.selectedPage]) this.router.navigateByUrl(this.routeLocalizationPipe.transform(`/error/404`));
  }

  getSavedData() {
    const savedFormData = isPlatformBrowser(this.platformId) ? localStorage.getItem('becomeSupplierForm') : false;
    if (!savedFormData) return;
    const savedFormDataJSON = JSON.parse(savedFormData);
    // 

    const ProductCategory = savedFormDataJSON?.ProductCategory ? savedFormDataJSON?.ProductCategory.indexOf(",") !== -1 ? savedFormDataJSON?.ProductCategory.split(',') : [savedFormDataJSON?.ProductCategory] : [];



    this.formData.qid = savedFormDataJSON?.QID || '';
    this.formData.email = savedFormDataJSON?.Email || '';
    this.formData.supplierName = savedFormDataJSON?.SupplierName || '';
    this.formData.contactPerson = savedFormDataJSON?.ContactPerson || '';



    for (let index = 0; index < ProductCategory.length; index++) {
      const product = this.productCategoryDDL.list.find((item: any) => item.key === ProductCategory[index]);
      if (product) this.productCategoryDDL.selected.push(product);
    }
    // this.productCategoryDDL.selected = this.productCategoryDDL.list.find((item: any) => item.key === ProductCategory);
    // ProductCategory
    // formData.append("ProductCategory", this.productCategoryDDL.selected.map((item: any) => item.key).join());



    this.formData.crNumber = savedFormDataJSON?.CRNumber || '';
    this.formData.StartDate = savedFormDataJSON?.CRStartDate || '';
    this.formData.EndDate = savedFormDataJSON?.CREndDate || '';
    this.formData.productDescription = savedFormDataJSON?.ProductDescription || '';
    this.formData.declaration = savedFormDataJSON?.Declaration || '';
  }

  onSubmit(form: any, isSaveForLater = false) {
    this.isSubmitted = true;
    if (
      form.valid &&
      this.productCategoryDDL.selected.length > 0 &&
      this.CompanyProfile.file &&
      this.cr.file &&
      this.TradeLicense.file &&
      this.taxCard.file &&
      this.formData.StartDate &&
      this.formData.EndDate
    ) {
      this.becomeARetailSupplier(isSaveForLater);
    }
  }

  becomeARetailSupplier(isSaveForLater: boolean) {
    this.sharedService.enableFullLoader();
    const formData = new FormData();
    formData.append("QID", this.formData.qid);
    formData.append("Email", this.formData.email);
    formData.append("SupplierName", this.formData.supplierName);
    formData.append("ContactPerson", this.formData.contactPerson);



    formData.append("ProductCategory", this.productCategoryDDL.selected.map((item: any) => item.key).join());

    formData.append("RequestCategory", this.requestCategory[this.selectedPage]);



    formData.append("ProductDescription", this.formData.productDescription);
    formData.append("CRNumber", this.formData.crNumber);
    formData.append("CRStartDate", this.formData.StartDate ? this.formatDateToApiFormatPipe.transform(this.formData.StartDate)?.split('T')[0] : '');
    formData.append("CREndDate", this.formData.EndDate ? this.formatDateToApiFormatPipe.transform(this.formData.EndDate)?.split('T')[0] : '');
    formData.append("CompanyProfile", this.CompanyProfile.file);
    formData.append("CR", this.cr.file);
    formData.append("TradeLincense", this.TradeLicense.file);
    formData.append("TaxCard", this.taxCard.file);
    formData.append("Declaration", this.formData.declaration);//text
    formData.append("IsApplied", "true");

    this.multimediaService.becomeARetailSupplier(formData).subscribe(
      (response) => {
        this.sharedService.disableFullLoader();
        // this.router.navigateByUrl(this.routeLocalizationPipe.transform('/become-a-supplier/success'));
        this.formData = {
          qid: "",
          email: "",
          supplierName: "",
          contactPerson: "",
          crNumber: "",
          StartDate: "",
          EndDate: "",
          productDescription: "",
          declaration: "",
        };

        this.productCategoryDDL.selected = [];
        this.CompanyProfile.file = null;
        this.cr.file = null;
        this.TradeLicense.file = null;
        this.taxCard.file = null;
        this.isModalEnabled = true;
        this.isSubmitted = false;


        this.showFiles = false;
        setTimeout(() => {
          this.showFiles = true;
        });
        // console.log("Feedback submitted successfully", response);
      },

    );

  }

  sdffs() {
    this.CompanyProfile.file = null;
  }

  getStaticMessage() {
    this.multimediaService.getStaticMessage({ ID: GUID.woqod.success.becomeASupplier }).subscribe((response) => {
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

  GetRequestTypeID() {
    this.multimediaService.GetSupplierRequestProductCategory({ id: this.requestCategory[this.selectedPage] }).subscribe((response) => {
      this.productCategoryDDL.list = (response || []).map((item: any) => {
        return {
          key: item.supplierRequestsProductCatgoryID,
          title: {
            en: item.titleEN,
            ar: item.titleAR,
          },
        };
      });
      setTimeout(() => {
        this.getSavedData();
      });
    });
  }

  sectorChange(option: any) {
    // Find the index of the option in the selected array by comparing the "key" property.
    const index = this.productCategoryDDL.selected.findIndex((item: any) => item.key === option.key);

    if (index === -1) {
      // Option not found in the array, so add it.
      this.productCategoryDDL.selected.push(option);
    } else {
      // Option found in the array, so remove it.
      this.productCategoryDDL.selected.splice(index, 1);
    }

  }


  getPreviousDay(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
    return previous;
  }


}
