import { Component } from '@angular/core';

@Component({
  selector: 'app-book-inspection-fahes',
  templateUrl: './book-inspection-fahes.component.html',
  styleUrls: ['./book-inspection-fahes.component.scss']
})
export class BookInspectionFahesComponent {
  assignAJobModal: boolean = false;
  isSaveModalEnabled: boolean = false;
  detailsPerson: any = [
    {
      img:'assets/images/default-img.webp',
      name:'Mohammed imran',
      email:'abcd@gmail.com',
      phone:'2334341',
    },
    {
      img:'assets/images/default-img.webp',
      name:'Mohammed imran',
      email:'abcd@gmail.com',
      phone:'2334341',
    },
    {
      img:'assets/images/default-img.webp',
      name:'Mohammed imran',
      email:'abcd@gmail.com',
      phone:'2334341',
    },
    {
      img:'assets/images/default-img.webp',
      name:'Mohammed imran',
      email:'abcd@gmail.com',
      phone:'2334341',
    },
  ];
  cars: any = [
    {
      name:'camrry',
      phone:'123456',
    },
    {
      name:'camrry',
      phone:'123456',
    },
    {
      name:'camrry',
      phone:'123456',
    },

  ];
  checkBox2: any = {
    title: 'SERVICE_INSPESTION.APPLY',//SHOP.LIMITED_HOURS
    name: 'Apply for all',
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
    },
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
      isSelected: false
    },
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
      slot: '09:30 AM',
      isDisabled: false,
      isSelected: false
    }
  ];
}
