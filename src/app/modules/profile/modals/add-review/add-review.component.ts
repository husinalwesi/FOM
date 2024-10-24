import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent {
  starFill: number = 4;
  @Input() isModalEnabled: boolean = false;
}
