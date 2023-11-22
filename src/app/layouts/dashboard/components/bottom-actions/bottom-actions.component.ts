import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bottom-actions',
  templateUrl: './bottom-actions.component.html',
  styleUrls: ['./bottom-actions.component.scss']
})
export class BottomActionsComponent {
  @Output() onCancelClick: EventEmitter<boolean> = new EventEmitter();
  @Output() onSaveClick: EventEmitter<boolean> = new EventEmitter();

  cancelClick($event: any) {
    this.onCancelClick.emit();
  }

  saveClick($event: any) {
    this.onSaveClick.emit();
  }

}
