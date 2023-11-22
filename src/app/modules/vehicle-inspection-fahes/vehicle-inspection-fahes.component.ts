import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicle-inspection-fahes',
  templateUrl: './vehicle-inspection-fahes.component.html',
  styleUrls: ['./vehicle-inspection-fahes.component.scss']
})
export class VehicleInspectionFahesComponent {
  lang:string='en';
  isNewCarEnabled: boolean = false;
  isSubmitted: boolean = false;
  selectedStep: string = "chooseYourVehicle";
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
  vehicles: any = [
    {
      title: 'Car #1',
      details: [
        {
          title: 'E_TAG.NUMBER_PLATE',
          value: '123456'
        },
        {
          title: 'RETAIL.TYPE',
          value: 'Saloon'
        },
        {
          title: 'E_TAG.MANUFACTOR',
          value: 'Toyota'
        },
        {
          title: 'RETAIL.MODEL',
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
          title: 'E_TAG.NUMBER_PLATE',
          value: '123456'
        },
        {
          title: 'RETAIL.TYPE',
          value: 'Saloon'
        },
        {
          title: 'E_TAG.MANUFACTOR',
          value: 'Toyota'
        },
        {
          title: 'RETAIL.MODEL',
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
          title: 'E_TAG.NUMBER_PLATE',
          value: '123456'
        },
        {
          title: 'RETAIL.TYPE',
          value: 'Saloon'
        },
        {
          title: 'E_TAG.MANUFACTOR',
          value: 'Toyota'
        },
        {
          title: 'RETAIL.MODEL',
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
          title: 'E_TAG.NUMBER_PLATE',
          value: '123456'
        },
        {
          title: 'RETAIL.TYPE',
          value: 'Saloon'
        },
        {
          title: 'E_TAG.MANUFACTOR',
          value: 'Toyota'
        },
        {
          title: 'RETAIL.MODEL',
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
          title: 'E_TAG.NUMBER_PLATE',
          value: '123456'
        },
        {
          title: 'RETAIL.TYPE',
          value: 'Saloon'
        },
        {
          title: 'E_TAG.MANUFACTOR',
          value: 'Toyota'
        },
        {
          title: 'RETAIL.MODEL',
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
          title: 'E_TAG.NUMBER_PLATE',
          value: '123456'
        },
        {
          title: 'RETAIL.TYPE',
          value: 'Saloon'
        },
        {
          title: 'E_TAG.MANUFACTOR',
          value: 'Toyota'
        },
        {
          title: 'RETAIL.MODEL',
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
          title: 'E_TAG.NUMBER_PLATE',
          value: '123456'
        },
        {
          title: 'RETAIL.TYPE',
          value: 'Saloon'
        },
        {
          title: 'E_TAG.MANUFACTOR',
          value: 'Toyota'
        },
        {
          title: 'RETAIL.MODEL',
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
          title: 'E_TAG.NUMBER_PLATE',
          value: '123456'
        },
        {
          title: 'RETAIL.TYPE',
          value: 'Saloon'
        },
        {
          title: 'E_TAG.MANUFACTOR',
          value: 'Toyota'
        },
        {
          title: 'RETAIL.MODEL',
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
          title: 'E_TAG.NUMBER_PLATE',
          value: '123456'
        },
        {
          title: 'RETAIL.TYPE',
          value: 'Saloon'
        },
        {
          title: 'E_TAG.MANUFACTOR',
          value: 'Toyota'
        },
        {
          title: 'RETAIL.MODEL',
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
          title: 'E_TAG.NUMBER_PLATE',
          value: '123456'
        },
        {
          title: 'RETAIL.TYPE',
          value: 'Saloon'
        },
        {
          title: 'E_TAG.MANUFACTOR',
          value: 'Toyota'
        },
        {
          title: 'RETAIL.MODEL',
          value: 'Camry'
        },
      ],
      isSelectable: true,
      isActive: false,
      count: 0,
      expiry: 0
    },
    
  ];
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
  onSubmit(form: any) {
    this.isSubmitted = true;
    if (form.valid) {
      // this.nextStep.emit(this.formData);
    }
  }
  plateTypeChange(option: any) {
    this.plateTypeDDL.selected = option;
  }
}
