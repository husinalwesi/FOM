import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs-woaod-tag',
  templateUrl: './tabs-woaod-tag.component.html',
  styleUrls: ['./tabs-woaod-tag.component.scss']
})
export class TabsWoaodTagComponent {
  tabs: any = [
    {
      key: 'individual',
      title: 'TABS.INDIVIDUAL'
    },
    {
      key: 'corporate',
      title: 'TABS.CORPORATE'
    }
  ];
  @Input() selectedTab: string = "";
  @Output() onTabChange: EventEmitter<string> = new EventEmitter();

  changeSelectedTab(tab: string) {
    this.onTabChange.emit(tab);
  }

}
