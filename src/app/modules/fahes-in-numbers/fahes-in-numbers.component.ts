import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fahes-in-numbers',
  templateUrl: './fahes-in-numbers.component.html',
  styleUrls: ['./fahes-in-numbers.component.scss']
})
export class FahesInNumbersComponent {
  @Input() items: any = null;
  @Input() mainData: any;
  @Input() lang: string = 'en';
}
