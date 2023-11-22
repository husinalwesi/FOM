import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-service-tab',
  templateUrl: './service-tab.component.html',
  styleUrls: ['./service-tab.component.scss']
})
export class ServiceTabComponent {
@Input() services:any = null;
constructor(private sharedService: SharedService){}
isExternalMethod(link: string) {
  return this.sharedService.isExternalMethod(link);
}
}
