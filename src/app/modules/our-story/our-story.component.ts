import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.scss']
})
export class OurStoryComponent {
  @Input() title: string = "";
  @Input() text: string = "";
  @Input() buttonText: string = "";
  @Input() btnText: string = "";
  @Input() img: string = "";
  @Input() link: string = "";
  @Input() linkBtn: string = "";
  @Input() size: string = "md";
  @Input() textAlign: string = "ltr:text-left rtl:text-right";
  @Input() isListEnalbed: boolean = false;
  constructor(private sharedService: SharedService){}
  redirect(link: string) {
    if (typeof window !== 'undefined')
      window.location.href = link;
  }
  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }
}
