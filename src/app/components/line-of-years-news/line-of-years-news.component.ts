import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-line-of-years-news',
  templateUrl: './line-of-years-news.component.html',
  styleUrls: ['./line-of-years-news.component.scss']
})
export class LineOfYearsNewsComponent {
  cYear: number = new Date().getFullYear();
  @Input() selectedYear: number = new Date().getFullYear();
  @Output() selectYear: EventEmitter<any> = new EventEmitter();

  setYear(year: number) {
    this.selectYear.emit(year);
  }

}
