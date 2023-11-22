import { Component, EventEmitter, Output } from '@angular/core';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';

@Component({
  selector: 'app-request-tender-alerts-modal',
  templateUrl: './request-tender-alerts-modal.component.html',
  styleUrls: ['./request-tender-alerts-modal.component.scss']
})
export class RequestTenderAlertsModalComponent {
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();

  isForm2Submitted: boolean = false;
  form2Data: any = {
    vendorName: '',
    vendorNumber: '',
    companyRegistration: '',
    registrationExpiry: '',
    dareeba: '',
    icvCertificateNumber: '',
    icvCertificateExpiry: '',
    icvScore: '',
    primaryContactNumber: '',
    secondaryContactNumber: '',
    email: '',
    confirmEmail: '',
  };

  constructor(
    private multimediaService: MultimediaService,
  ) {

  }
  productCategoryDDL: any = {
    selected: null,
    placeholder: 'SUPPLIER.COMPANY_CATEGORY',
    list: [
      {
        key: 'p c 1',
        title: {
          en: 'Food',
          ar: 'Food'
        }
      },
      {
        key: 'p c 2',
        title: {
          en: 'Nonfood',
          ar: 'Nonfood'
        }
      },
      {
        key: 'p c 3',
        title: {
          en: 'Others',
          ar: 'Others'
        }
      },
    ]
  };
  productSubCategoryDDL: any = {
    selected: null,
    placeholder: 'SUPPLIER.COMPANY_SUB_CATEGORY',
    list: [
      {
        key: 'p c 1',
        title: {
          en: 'Food',
          ar: 'Food'
        }
      },
      {
        key: 'p c 2',
        title: {
          en: 'Nonfood',
          ar: 'Nonfood'
        }
      },
      {
        key: 'p c 3',
        title: {
          en: 'Others',
          ar: 'Others'
        }
      },
    ]
  };
  onSubmitForm2(form: any) {
    this.isForm2Submitted = true;
    if (
      form.valid &&
      this.productCategoryDDL.selected &&
      this.productSubCategoryDDL.selected
    ) {
      this.submitFeedback();
    }
  }
  submitFeedback() {
    this.isForm2Submitted = false;
    this.form2Data = {
      vendorName: '',
      vendorNumber: '',
      companyRegistration: '',
      registrationExpiry: '',
      category: '',
      subcategory: '',
      dareeba: '',
      icvCertificateNumber: '',
      icvCertificateExpiry: '',
      icvScore: '',
      primaryContactNumber: '',
      email: '',
      confirmEmail: '',
    };
  }



  closeModalFire() {
    this.closeModal.emit();
  }

  submitForm() {
    let payload = {
      "tendersAlertEmailID": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "entityId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "titleAR": "string",
      "titleEN": "string",
      "subjectAR": "string",
      "subjectEN": "string",
      "fromEmail": "string",
      "emailBodyAR": "string",
      "emailBodyEN": "string",
      "createdOn": "2023-09-06T16:14:33.266Z",
      "modifiedOn": "2023-09-06T16:14:33.266Z",
      "loackedOn": "2023-09-06T16:14:33.266Z",
      "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "modifiedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "lockedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    };
    // change the api
    this.multimediaService.subscribeToTenderAlerts(payload).subscribe((response) => {
      this.closeModalFire();
    });
  }

}
