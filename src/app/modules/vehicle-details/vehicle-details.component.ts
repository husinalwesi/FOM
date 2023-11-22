import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent {
  @Output() nextStep: EventEmitter<any> = new EventEmitter();
  @Output() prevStep: EventEmitter<any> = new EventEmitter();
  isLoadingEnabled: boolean = false;
  isNewCarEnabled: boolean = false;
  isNewBeneficiaryEnabled: boolean = false;
  isNewBeneficiarySubmitted: boolean = false;
  isNewCarSubmitted: boolean = false;
  isNewCarValid: boolean = false;
  isModalEnabled2: boolean = false;

  lang: string = "en";
  vehicles: any = {
    pagination: {
      pageSize: 5,
      pageIndex: 1,
      totalCount: 100//make it 0
    },
    selection: [],
    data: [
      {
        id: '1',
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
        id: '2',
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
    ]
  };
  isPersonsLoadingEnabled: boolean = false;
  persons: any = {
    pagination: {
      pageSize: 5,
      pageIndex: 1,
      totalCount: 100//make it 0
    },
    data: [
      {
        img: '',
        name: 'Mohammed imran',
        email: 'abcd@gmail.com',
        phoneNumber: '2334341',
        isSelected: false
      },
      {
        img: '',
        name: 'Mohammed imran',
        email: 'abcd@gmail.com',
        phoneNumber: '2334341',
        isSelected: false
      },
      {
        img: '',
        name: 'Mohammed imran',
        email: 'abcd@gmail.com',
        phoneNumber: '2334341',
        isSelected: false
      },
      {
        img: '',
        name: 'Mohammed imran',
        email: 'abcd@gmail.com',
        phoneNumber: '2334341',
        isSelected: false
      }
    ]
  };
  isSubmitted: boolean = false;
  expiryDate: Date | null = null;
  startDate: Date | null = null;
  insuranceExpirationDate: Date | null = null;
  formDataShort: any = {
    plateNumber: '',
    qidCr: '',
  };

  formData: any = {
    vehicleStatus: '',
    model: '',
    modelYear: '',
    majorColor: '',
    manufactureToBeBrand: '',
    sequenceNumber: '',
    type: '',
    insuranceCompanyName: '',
    registration: '',
    status: '',
    vehicleIDNumber: '',
  };

  formData2: any = {
    name: '',
    email: '',
    phone: '',
    familyRelation: '',
    walletLimit: ''
  };

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

  vehicleUseDDL: any = {
    selected: null,
    placeholder: 'Vehicle Use',
    list: [
      {
        key: 'option1',
        title: {
          en: 'I am using this Vehicle for myself only',
          ar: 'أنا أستخدم هذه السيارة لنفسي فقط'
        }
      },
      {
        key: 'option2',
        title: {
          en: 'Assign a beneficiary',
          ar: 'تعيين المستفيد'
        }
      }
    ]
  };

  vehicleUseChange(option: any) {
    this.vehicleUseDDL.selected = option;
    if (option.key === 'option2') this.isModalEnabled2 = true;
  }

  plateTypeChange(option: any) {
    this.plateTypeDDL.selected = option;
  }

  getSelectedCars() {
    // Maybe we need to calculate the sum of the selected cars
    return this.vehicles.data.filter((vehicle: any) => vehicle.isActive).length || 0;
  }


  // 
  onSubmit(form: any) {
    this.isSubmitted = true;
    if (form.valid) {
      this.nextStep.emit(this.formData);
    }
  }

  back() {
    this.prevStep.emit();
  }

  saveForLater(form: any) {
    this.isSubmitted = true;
    if (form.valid) {
      // for now keep it as submit
      this.nextStep.emit(this.formData);
    }
  }

  changePage(pageNo: number) {
    this.vehicles.pagination.pageIndex = pageNo;
    // this.getNewsListing();
  }

  toggleVehicle(vehicle: any, newIsActive: boolean) {
    vehicle.isActive = newIsActive;
    if (this.vehicles.selection.includes(vehicle.id)) {
      // remove it
      this.vehicles.selection = this.vehicles.selection.filter((vehicle: any) => vehicle.id !== vehicle.id);
    } else {
      this.vehicles.selection.push(vehicle.id);
      // add it
    }
  }

  toggleNewCar() {
    this.isNewCarEnabled = !this.isNewCarEnabled;
  }

  toggleNewBeneficiary() {
    this.isNewBeneficiaryEnabled = !this.isNewBeneficiaryEnabled;
  }

  submitAddNewCar(form: any) {
    this.isNewCarSubmitted = true;
    if (form.controls.plateNumber.valid && form.controls.qidCr.valid && this.plateTypeDDL.selected) {
      const data = {
        plateNumber: form.controls.plateNumber.valid,
        qidCr: form.controls.qidCr.valid,
        plateType: this.plateTypeDDL.selected,
      };
      console.log(data);
      this.isNewCarValid = true;
      // this.resetAddNewCar();
    }
  }


  submitAddNewCarFullForm(form: any) {
    this.isSubmitted = true;
    if (
      (
        form.controls.vehicleStatus.valid && form.controls.model.valid && form.controls.modelYear.valid
        && form.controls.majorColor.valid && form.controls.manufactureToBeBrand.valid && form.controls.type.valid
        && form.controls.sequenceNumber.valid && form.controls.insuranceCompanyName.valid && form.controls.registration.valid
        && form.controls.status.valid && form.controls.vehicleIDNumber.valid
      ) && this.expiryDate && this.startDate && this.insuranceExpirationDate && this.vehicleUseDDL.selected) {
      let data = {
        ...this.formData, ...{
          expiryDate: this.expiryDate,
          startDate: this.startDate,
          insuranceExpirationDate: this.insuranceExpirationDate,
          vehicleUse: this.vehicleUseDDL.selected
        }
      };
      console.log(data);
    }
  }

  resetAddNewCar() {
    this.plateTypeDDL.selected = null;
    this.formData.plateNumber = '';
    this.formData.qidCr = '';
    this.isNewCarSubmitted = false;
  }

  onSubmitAddBeneficiary(form: any) {
    this.isNewBeneficiarySubmitted = true;
    if (form.valid) {
      console.log(this.formData2);
    }
  }

}
