import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-time-line-item',
  templateUrl: './time-line-item.component.html',
  styleUrls: ['./time-line-item.component.scss']
})
export class TimeLineItemComponent {
  @Input() order: number = 0;
  @Input() total: number = 0;
  directionClass: string = "";
  @Input() lang: string = "en";
  @Input() data: any;

  ngOnInit(): void {
    const side = this.order % 2 === 0 ? 'right-side' : 'left-side';
    const isFirst = this.order === 1;
    const isLast = this.order === this.total;
    const isMiddle = !isFirst && !isLast;
    const classes = [side];
    if (isFirst) classes.push('isFirst');
    if (isLast) classes.push('isLast');
    if (isMiddle) classes.push('isMiddle');
    // 
    this.directionClass = classes.join(" ");
  }

}
