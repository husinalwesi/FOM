import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fahes-hero-section-bottom',
  templateUrl: './fahes-hero-section-bottom.component.html',
  styleUrls: ['./fahes-hero-section-bottom.component.scss']
})
export class FahesHeroSectionBottomComponent {
  @Input() lang: string = 'en';
  @Input() bottomSection: any = null;
  @Output() tabChange: EventEmitter<any> = new EventEmitter();

  clickOnTab(index: number) {
    this.tabChange.emit(index);
  }

}
