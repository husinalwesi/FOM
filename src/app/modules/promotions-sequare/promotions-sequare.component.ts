import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-promotions-sequare',
  templateUrl: './promotions-sequare.component.html',
  styleUrls: ['./promotions-sequare.component.scss']
})
export class PromotionsSequareComponent {
  @Input() lang: string = "en";
  @Input() data: any;
  @Output() onClickEmiter: EventEmitter<any> = new EventEmitter();

  onClick(item: any) {
    this.onClickEmiter.emit(item.key);
  }


  isSelected(key: string) {
    return this.data?.selected?.key === key;
  }

}
