import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-subscription-modal',
  templateUrl: './subscription-modal.component.html',
  styleUrls: ['./subscription-modal.component.scss']
})
export class SubscriptionModalComponent {
  @Input() data: any = {};
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();


  constructor() {

  }
  closeModalFire() {
    this.closeModal.emit();
  }

}