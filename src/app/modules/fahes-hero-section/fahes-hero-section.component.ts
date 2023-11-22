import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fahes-hero-section',
  templateUrl: './fahes-hero-section.component.html',
  styleUrls: ['./fahes-hero-section.component.scss']
})
export class FahesHeroSectionComponent {
  @Input() slidesStore: any = null;
  @Input() bottomSection: any = null;
  @Input() lang: string = 'en';
  @Output() tabChangeEmitter: EventEmitter<any> = new EventEmitter();

  tabChange(index: number) {
    this.tabChangeEmitter.emit(index);
  }

  selectedTabIndex() {
    return this.bottomSection.findIndex((item: any) => item.selected);
  }

}
