import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent {
  @Output() nextStep: EventEmitter<any> = new EventEmitter();
  @Output() prevStep: EventEmitter<any> = new EventEmitter();
  counter: number = 1;
  ddlHeight: string = "h-[28px]";
  isSubmitted: boolean = false;
  date: Date | null = null;
  tags: any = [
    {
      title: 'Tag 1',
      active: true,
      fuelType: {
        selected: null,
        placeholder: 'E_TAG.FUEL_TYPE',
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
      },
      fuelLimit: {
        selected: null,
        placeholder: 'E_TAG.FUEL_LIMIT',
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
      },
      transactionLimit: {
        input: '',
        ddl: {
          selected: null,
          placeholder: 'QAR',
          list: [
            {
              key: 'QAR',
              title: {
                en: 'QAR',
                ar: 'ر.ق'
              }
            },
            {
              key: 'liter',
              title: {
                en: 'liter',
                ar: 'لتر'
              }
            },
          ]
        }
      }
    },
    {
      title: 'Tag 2',
      active: false,
      fuelType: {
        selected: null,
        placeholder: 'E_TAG.FUEL_TYPE',
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
      },
      fuelLimit: {
        selected: null,
        placeholder: 'E_TAG.FUEL_LIMIT',
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
      },
      transactionLimit: {
        input: '',
        ddl: {
          selected: null,
          placeholder: 'QAR',
          list: [
            {
              key: 'QAR',
              title: {
                en: 'QAR',
                ar: 'ر.ق'
              }
            },
            {
              key: 'liter',
              title: {
                en: 'liter',
                ar: 'لتر'
              }
            },
          ]
        }
      }
    },
    {
      title: 'Tag 3',
      active: false,
      fuelType: {
        selected: null,
        placeholder: 'E_TAG.FUEL_TYPE',
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
      },
      fuelLimit: {
        selected: null,
        placeholder: 'E_TAG.FUEL_LIMIT',
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
      },
      transactionLimit: {
        input: '',
        ddl: {
          selected: null,
          placeholder: 'QAR',
          list: [
            {
              key: 'QAR',
              title: {
                en: 'QAR',
                ar: 'ر.ق'
              }
            },
            {
              key: 'liter',
              title: {
                en: 'liter',
                ar: 'لتر'
              }
            },
          ]
        }
      }
    }
  ];
  checkBox1: any = {
    title: 'Camry',
    carNumber: '123456',
    name: 'limitedHours',
    value: true
  };
  checkBox3: any = {
    title: 'Aventador',
    carNumber: '098765',
    name: 'limitedHours',
    value: false
  };
  checkBox4: any = {
    title: 'Raptor F-150',
    carNumber: '454544',
    name: 'limitedHours',
    value: false
  };

  checkBox2: any = {
    title: 'SERVICE_INSPESTION.APPLY',
    name: 'limitedHours',
    value: false
  };
  location: string = "";

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

  qidCr: any = {
    file: null,
    url: ""
  }

  estimara: any = {
    file: null,
    url: ""
  }

  qidCrChangeEmitHandler(event: any) {
    this.qidCr.file = event.file;
  }

  estimaraChangeEmitHandler(event: any) {
    this.estimara.file = event.file;
  }

  countChange(value: any) {
    this.counter = value;
  }

  submit() {
    this.nextStep.emit({});
  }

  back() {
    this.prevStep.emit();
  }

  // FuelLimitChange(option: any) {
  //   this.FuelLimitDDL.selected = option;
  // }

}
