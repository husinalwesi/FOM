import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-post-modal',
  templateUrl: './add-post-modal.component.html',
  styleUrls: ['./add-post-modal.component.scss']
})
export class AddPostModalComponent {
  @Input() isModalEnabled: boolean = false;
  @Input() isInnerPhotoClicked: boolean = false;
}
