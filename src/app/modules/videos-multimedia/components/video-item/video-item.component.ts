import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent {
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Input() video: any = null;
  @Input() lang: string = "en";
  @Input() imgHeight: string = "";

  openModal() {
    this.onClick.emit();
  }

}
