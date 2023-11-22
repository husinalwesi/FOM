import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  constructor() { }
  @Input() lang: string = 'en';
  @Input() slidesStore: any = null;
  @Input() currency: string = "";
  @Input() content: any = null;
  @Input() date: Date = new Date();
  @Input() materials: any = null;
}
