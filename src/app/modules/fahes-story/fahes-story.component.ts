import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-fahes-story',
  templateUrl: './fahes-story.component.html',
  styleUrls: ['./fahes-story.component.scss']
})
export class FahesStoryComponent {
  @Input() data: any = null;
  @Input() lang: string = 'en';
constructor(private sharedService: SharedService){}
isExternalMethod(link: string) {
  return this.sharedService.isExternalMethod(link);
}
}
