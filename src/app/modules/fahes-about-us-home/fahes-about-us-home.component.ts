import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fahes-about-us-home',
  templateUrl: './fahes-about-us-home.component.html',
  styleUrls: ['./fahes-about-us-home.component.scss']
})
export class FahesAboutUsHomeComponent {
  @Input() lang: any = 'en';
  @Input() data: any;
  @Input() cards: any = [];
}
