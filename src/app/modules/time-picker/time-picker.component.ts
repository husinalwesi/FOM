import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent {
  isDDlEnabled: boolean = false;
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
