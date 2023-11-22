import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tender-supplier-table',
  templateUrl: './tender-supplier-table.component.html',
  styleUrls: ['./tender-supplier-table.component.scss']
})
export class TenderSupplierTableComponent {
  @Input() dateFrom: any;
  @Input() lang: string = 'en';
  @Input() dateTo: any;
  @Input() table: any =null;
  @Input() locationDDL: any = null;
  @Input() showTenderSupplierTable: boolean = true;
  @Output() showTenderSupplierTableChange = new EventEmitter<boolean>();
  @Output() dateToChangeEmitter = new EventEmitter<any>();
  @Output() dateFromChangeEmitter = new EventEmitter<any>();

  toggleTableVisibility() {
    this.showTenderSupplierTable = !this.showTenderSupplierTable;
    this.showTenderSupplierTableChange.emit(this.showTenderSupplierTable); // Emit the new value
  }
  locationChange(option: any) {
    this.locationDDL.selected = option;
  }
  dateToChange(event: any) {
    this.dateToChangeEmitter.emit(event);
    
  }
  dateFromChange(event: any) {
    this.dateFromChangeEmitter.emit(event);
    
  }
}
