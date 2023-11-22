import { Component } from '@angular/core';

@Component({
  selector: 'app-steps-appointment',
  templateUrl: './steps-appointment.component.html',
  styleUrls: ['./steps-appointment.component.scss']
})
export class StepsAppointmentComponent {
  lang: string = "en";
  isDdlEnabled: boolean = false;
  fireCloseAnimation: boolean = false;
  checkBox1: any = {
    title: 'Camry',
    carNumber: '123456',
    name: 'limitedHours',
    value: false
  };
  checkBox2: any = {
    title: '',//SHOP.LIMITED_HOURS
    name: 'limitedHours',
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
  isLoadingEnabled: boolean = true;
  cards: any = {
    pagination: {
      pageSize: 3,
      pageIndex: 1,
      totalCount: 0
    },
  }
  changePage(pageNo: number) {
    this.cards.pagination.pageIndex = pageNo;
    // this.getNewsListing();
  }
  selectedStep: string = "vehicleDetails";
  steps: any = [
    {
      key: 'vehicleDetails',
      text: 'STEPS.VEHICLE_DETAILS'
    },
    {
      key: 'bookAppointment',
      text: 'STEPS.BOOK_APPOINTMENT'
    },
    {
      key: 'termsConditions',
      text: 'STEPS.TERMS_AND_CONDITIONS'
    },
    {
      key: 'payment',
      text: 'STEPS.PAYMENT'
    }
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
  ];
}
