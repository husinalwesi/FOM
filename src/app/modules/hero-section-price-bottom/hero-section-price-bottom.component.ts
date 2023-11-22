import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section-price-bottom',
  templateUrl: './hero-section-price-bottom.component.html',
  styleUrls: ['./hero-section-price-bottom.component.scss']
})
export class HeroSectionPriceBottomComponent {
  @Input() currency: string = "";
  @Input() lang: string = "en";
  @Input() content: any = null;
  @Input() date: Date = new Date();
  @Input() materials: any = null;
}
