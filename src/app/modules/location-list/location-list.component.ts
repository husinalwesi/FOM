import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent {
  isSubmitted: boolean = false;
  isDDlEnabled: boolean = false;
  location: string = "";
  @Input() data: any;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  toggleSelection(time: any) {
    if (time.isDisabled) return;
    time.isSelected = !time.isSelected;
    this.onChange.emit(this.data);

  }

  getSelectedSlots() {
    return (this.data.filter((time: any) => time.isSelected && !time.isDisabled) || []).map((time: any) => time.slot);
  }
}
