import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-review-short',
  templateUrl: './review-short.component.html',
  styleUrls: ['./review-short.component.scss']
})
export class ReviewShortComponent {
  starFill: number = 4;
  @Output() onViewReview: EventEmitter<boolean> = new EventEmitter();
  @Output() onWriteReview: EventEmitter<boolean> = new EventEmitter();

  viewReview() {
    this.onViewReview.emit(true);
  }

  writeReview() {
    this.onWriteReview.emit(true);
  }

}
