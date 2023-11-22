import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-talabat-snoonu',
  templateUrl: './talabat-snoonu.component.html',
  styleUrls: ['./talabat-snoonu.component.scss']
})
export class TalabatSnoonuComponent {
  @Input() data: any;
  @Input() lang: string = "en";
}
