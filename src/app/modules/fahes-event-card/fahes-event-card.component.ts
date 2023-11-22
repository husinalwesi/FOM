import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-fahes-event-card',
  templateUrl: './fahes-event-card.component.html',
  styleUrls: ['./fahes-event-card.component.scss']
})
export class FahesEventCardComponent {
  @Input() lang: string = 'en';
  @Input() data: any;
  constructor(private sharedService: SharedService){}
  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }

}
