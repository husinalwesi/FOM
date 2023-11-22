import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-box-terms-and-conidition',
  templateUrl: './box-terms-and-conidition.component.html',
  styleUrls: ['./box-terms-and-conidition.component.scss']
})
export class BoxTermsAndConiditionComponent {
  @Input() lang: string = "en";
  @Input() data: any;
  @Output() onChange: EventEmitter<boolean> = new EventEmitter();
  change(val: boolean) {
    this.onChange.emit(val);
  }

}
