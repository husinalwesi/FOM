import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent {
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Input() data: any;


  ngOnInit(): void { }

  maxValueChange(value: number): void {
    this.onChange.emit({
      min: this.data.value.min,
      max: value
    });
  }

  minValueChange(value: number): void {
    this.onChange.emit({
      min: value,
      max: this.data.value.max
    });
  }

}
