import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  @Input() lang: string = "en";
  @Input() services: any;
  @Input() mainData: any;
  @Input() styleColor: string = '';
}
