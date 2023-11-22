import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-inspection-center-filter',
  templateUrl: './inspection-center-filter.component.html',
  styleUrls: ['./inspection-center-filter.component.scss']
})
export class InspectionCenterFilterComponent {
  @Output() stationChangeEmitter: EventEmitter<any> = new EventEmitter();
  @Output() statusChangeEmitter: EventEmitter<any> = new EventEmitter();
  @Output() servicesChangeEmitter: EventEmitter<any> = new EventEmitter();
  @Output() allDayEmitter: EventEmitter<any> = new EventEmitter();
  @Output() limitedHoursChangeEmitter: EventEmitter<any> = new EventEmitter();
  @Output() locationChangeEmitter: EventEmitter<any> = new EventEmitter();
  @Output() submitEmitter: EventEmitter<any> = new EventEmitter();
  @Output() resetEmitter: EventEmitter<any> = new EventEmitter();
  @Output() cancelEmitter: EventEmitter<any> = new EventEmitter();
  @Output() selectStationEmitter: EventEmitter<any> = new EventEmitter();
  @Output() workingHoursEmitter: EventEmitter<any> = new EventEmitter();

  pageType: string = "woqod";
  @Input() lang: string = "en";

  @Input() workingHours: any = [];

  // workingHoursEle: any = [];

  @Input() isSubmitted: boolean = false;
  @Input() searchResult: any = [];
  @Input() allDay: any;
  @Input() limitedHours: any;
  @Input() stationDDL: any;
  // @Input() statusDDL: any;
  // @Input() addresses: any;
  @Input() servicesDDL: any;
  @Input() filter: any = [];

  stationChange(option: any) {
    this.stationChangeEmitter.emit(option);
  }

  statusChange(option: any) {
    this.statusChangeEmitter.emit(option);
  }

  servicesChange(option: any) {
    this.servicesChangeEmitter.emit(option);
  }

  changeAllDay(option: any) {
    this.allDayEmitter.emit(option);
  }

  changeLimitedHours(option: any) {
    this.limitedHoursChangeEmitter.emit(option);
  }

  // locationChange(selection: any) {
  //   this.locationChangeEmitter.emit(selection);
  // }

  onSubmit(form: any) {
    this.submitEmitter.emit(true);
  }

  resetAll() {
    this.resetEmitter.emit(true);

  }

  cancel() {
    this.cancelEmitter.emit(true);
  }

  selectStation(id: string) {
    this.selectStationEmitter.emit(id);
  }

  ngOnInit(): void {
    // this.updateWorkingHour();
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes?.workingHours) {
  //     console.log(changes?.workingHours);
  //     this.updateWorkingHour();
  //   }
  // }

  // updateWorkingHour() {
  //   this.workingHoursEle = (this.workingHours || []).map((item: any) => {
  //     return {
  //       title: {
  //         en: item.nameEn,
  //         ar: item.nameAr
  //       },
  //       name: item.detailesId,
  //       value: false
  //     };
  //   })
  // }

  changeWorkingHours(event: any, item: any) {
    this.workingHoursEmitter.emit({ name: item.name, value: event });
  }

}
