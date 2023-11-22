import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tinder-table-section',
  templateUrl: './tinder-table-section.component.html',
  styleUrls: ['./tinder-table-section.component.scss']
})
export class TinderTableSectionComponent {
  @Input() search: string = '';
  @Input() dateFrom: any;
  @Input() lang: string = 'en';
  @Input() dateTo: any;
  @Input() table: any = null;
  @Input() locationDDL: any = null;
  @Input() showTenderSupplierTable: boolean = true;
  @Output() showTenderSupplierTableChange = new EventEmitter<boolean>();
  @Output() dateToChangeEmitter = new EventEmitter<any>();
  @Output() dateFromChangeEmitter = new EventEmitter<any>();
  @Output() searchChange = new EventEmitter<string>();

  @Output() activeTabChange = new EventEmitter<string>();


  stripTag(html: string) {
    return (html.toString() || '').replace(/(<([^>]+)>)/gi, "");
  }


  thead: any = [
    "TINDER.SERIEL_NUMBER",
    // "TINDER.TENDER_TITLE",
    "TINDER.SUCCESSFUL",

  ];

  dateToChange(event: any) {
    // dateTo = event
    this.dateToChangeEmitter.emit(event);

  }
  dateFromChange(event: any) {
    // dateTo = event
    this.dateFromChangeEmitter.emit(event);

  }
  awardTableData: any[] = [];
  awardTable() {

    return this.awardTableData = this.table.tbody.filter((item: any) => item[0].tenderStatus === 2).map((item: any) => item[0].awardTable);
  }


  filterData() {
    return this.table.tbody.filter((item: any) => item[0].tenderStatus === (this.activeButton === 'open' ? 0 : this.activeButton === 'closed' ? 1 : 2));

  }
  locationChange(option: any) {
    this.locationDDL.selected = option;
  }

  @Input() activeButton: string = 'open';

  setActiveButton(button: string) {
    this.activeTabChange.emit(button);
  }

  searchFire() {
    this.searchChange.emit(this.search);
  }

}
