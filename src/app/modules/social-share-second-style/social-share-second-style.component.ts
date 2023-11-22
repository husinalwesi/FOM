import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-share-second-style',
  templateUrl: './social-share-second-style.component.html',
  styleUrls: ['./social-share-second-style.component.scss']
})
export class SocialShareSecondStyleComponent {
  @Input() link: string = "";
  @Input() metaData: string = "";
  @Input() shareThis: string = "";
}
