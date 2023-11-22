import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';

@Component({
  selector: 'app-fahes-service-inspection',
  templateUrl: './fahes-service-inspection.component.html',
  styleUrls: ['./fahes-service-inspection.component.scss']
})
export class FahesServiceInspectionComponent {
  isSaveModalEnabled: boolean = false;
  assignAJobModal: boolean = false;
  isDdlEnabled: boolean = false;
  fireCloseAnimation: boolean = false;
  isViewSummaryModalEnabled: boolean = false;
  isSubmitted: boolean = false;
  formData: any = {
    // name: '',
    plateNumber: '',
    qidCr: '',
    vehicleStatus: '',
    model: '',
    modelYear: '',
    manufactureToBeBrand: '',
    expiryDate: '',
    sequenceNumber: '',
    insuranceCompanyName: '',
    startDate: '',
    registration: '',
    status: '',
    vehicleIDNumber: '',
    insuranceExpirationDate: '',
  };
  isNewCarEnabled: boolean = false;
  plateTypeDDL: any = {
    selected: null,
    placeholder: 'E_TAG.PLATE_TYPE',
    list: [
      {
        key: 'p c 1',
        title: {
          en: 'p c 1',
          ar: 'p c 1'
        }
      },
      {
        key: 'p c 2',
        title: {
          en: 'p c 2',
          ar: 'p c 2'
        }
      }
    ]
  };
  onSubmit(form: any) {
    this.isSubmitted = true;
    if (form.valid) {
      // this.nextStep.emit(this.formData);
    }
  }
  plateTypeChange(option: any) {
    this.plateTypeDDL.selected = option;
  }
  tempDDL: any = {
    selected: null,
    placeholder: 'RETAIL.PRODUCT_CATEGORY',
    list: [
      {
        key: 'p c 1',
        title: {
          en: 'I am using this Vehicle for myself only',
          ar: 'أنا أستخدم هذه السيارة لنفسي فقط'
        }
      },
      {
        key: 'p c 2',
        title: {
          en: 'Assign a beneficiary',
          ar: 'تعيين المستفيد'
        }
      }
    ]
  };

  tempChange(option: any) {
    this.tempDDL.selected = option;
  }
  detailsPerson: any = [
    {
      img: 'assets/images/default-img.webp',
      name: 'Mohammed imran',
      email: 'abcd@gmail.com',
      phone: '2334341',
    },
    {
      img: 'assets/images/default-img.webp',
      name: 'Mohammed imran',
      email: 'abcd@gmail.com',
      phone: '2334341',
    },
    {
      img: 'assets/images/default-img.webp',
      name: 'Mohammed imran',
      email: 'abcd@gmail.com',
      phone: '2334341',
    },
    {
      img: 'assets/images/default-img.webp',
      name: 'Mohammed imran',
      email: 'abcd@gmail.com',
      phone: '2334341',
    },
  ];
  cars: any = [
    {
      name: 'camrry',
      phone: '123456',
    },
    {
      name: 'camrry',
      phone: '123456',
    },
    {
      name: 'camrry',
      phone: '123456',
    },

  ];
  vehicles: any = [
    {
      title: 'Car #1',
      details: [
        {
          title: 'Number plate',
          value: '123456'
        },
        {
          title: 'Type',
          value: 'Saloon'
        },
        {
          title: 'Manufactor',
          value: 'Toyota'
        },
        {
          title: 'Model',
          value: 'Camry'
        },
      ],
      isSelectable: false,
      isActive: false,
      count: 0,
      expiry: 400
    },
    {
      title: 'Car #2',
      details: [
        {
          title: 'Number plate',
          value: '123456'
        },
        {
          title: 'Type',
          value: 'Saloon'
        },
        {
          title: 'Manufactor',
          value: 'Toyota'
        },
        {
          title: 'Model',
          value: 'Camry'
        },
      ],
      isSelectable: true,
      isActive: false,
      count: 0,
      expiry: 0
    },
    {
      title: 'Car #2',
      details: [
        {
          title: 'Number plate',
          value: '123456'
        },
        {
          title: 'Type',
          value: 'Saloon'
        },
        {
          title: 'Manufactor',
          value: 'Toyota'
        },
        {
          title: 'Model',
          value: 'Camry'
        },
      ],
      isSelectable: true,
      isActive: false,
      count: 0,
      expiry: 0
    },
    {
      title: 'Car #2',
      details: [
        {
          title: 'Number plate',
          value: '123456'
        },
        {
          title: 'Type',
          value: 'Saloon'
        },
        {
          title: 'Manufactor',
          value: 'Toyota'
        },
        {
          title: 'Model',
          value: 'Camry'
        },
      ],
      isSelectable: true,
      isActive: false,
      count: 0,
      expiry: 0
    },
    {
      title: 'Car #2',
      details: [
        {
          title: 'Number plate',
          value: '123456'
        },
        {
          title: 'Type',
          value: 'Saloon'
        },
        {
          title: 'Manufactor',
          value: 'Toyota'
        },
        {
          title: 'Model',
          value: 'Camry'
        },
      ],
      isSelectable: true,
      isActive: false,
      count: 0,
      expiry: 0
    },
    {
      title: 'Car #2',
      details: [
        {
          title: 'Number plate',
          value: '123456'
        },
        {
          title: 'Type',
          value: 'Saloon'
        },
        {
          title: 'Manufactor',
          value: 'Toyota'
        },
        {
          title: 'Model',
          value: 'Camry'
        },
      ],
      isSelectable: true,
      isActive: false,
      count: 0,
      expiry: 0
    },
    {
      title: 'Car #2',
      details: [
        {
          title: 'Number plate',
          value: '123456'
        },
        {
          title: 'Type',
          value: 'Saloon'
        },
        {
          title: 'Manufactor',
          value: 'Toyota'
        },
        {
          title: 'Model',
          value: 'Camry'
        },
      ],
      isSelectable: true,
      isActive: false,
      count: 0,
      expiry: 0
    },
    {
      title: 'Car #2',
      details: [
        {
          title: 'Number plate',
          value: '123456'
        },
        {
          title: 'Type',
          value: 'Saloon'
        },
        {
          title: 'Manufactor',
          value: 'Toyota'
        },
        {
          title: 'Model',
          value: 'Camry'
        },
      ],
      isSelectable: true,
      isActive: false,
      count: 0,
      expiry: 0
    },
    {
      title: 'Car #2',
      details: [
        {
          title: 'Number plate',
          value: '123456'
        },
        {
          title: 'Type',
          value: 'Saloon'
        },
        {
          title: 'Manufactor',
          value: 'Toyota'
        },
        {
          title: 'Model',
          value: 'Camry'
        },
      ],
      isSelectable: true,
      isActive: false,
      count: 0,
      expiry: 0
    },
    {
      title: 'Car #2',
      details: [
        {
          title: 'Number plate',
          value: '123456'
        },
        {
          title: 'Type',
          value: 'Saloon'
        },
        {
          title: 'Manufactor',
          value: 'Toyota'
        },
        {
          title: 'Model',
          value: 'Camry'
        },
      ],
      isSelectable: true,
      isActive: false,
      count: 0,
      expiry: 0
    },

  ];
  checkBox2: any = {
    title: 'DASHBOARD.SAVE_S',//SHOP.LIMITED_HOURS
    name: 'SAVE_S',
    value: false
  };
  checkBox3: any = {
    title: 'DASHBOARD.AGREE',//SHOP.LIMITED_HOURS
    name: 'AGREE',
    value: false
  };
  time1: any = [
    {
      slot: '07:00 AM',
      isDisabled: false,
      isSelected: false
    },
    {
      slot: '08:00 AM',
      isDisabled: true,
      isSelected: false
    },
    {
      slot: '08:00 AM',
      isDisabled: false,
      isSelected: false
    },
    {
      slot: '09:00 AM',
      isDisabled: false,
      isSelected: true
    }
  ];
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
  selectedStep: string = "payment";
  steps: any = [
    {
      key: 'chooseYourVehicle',
      text: 'SERVICE_INSPESTION.CHOOSE'
    },
    {
      key: 'selectDateTime',
      text: 'SERVICE_INSPESTION.DATE_TIME'
    },
    {
      key: 'payment',
      text: 'STEPS.PAYMENT'
    }
  ];
  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService
  ) {

    this.metaTagsService.updateMetaTags({
      title: "Fahes Service Inspection | Woqod",
      description: "Fahes Service Inspection | Woqod",
      keywords: ["Woqod 1", "Woqod 2"]
    });
  }

}
