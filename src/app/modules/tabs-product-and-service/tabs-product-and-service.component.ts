import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs-product-and-service',
  templateUrl: './tabs-product-and-service.component.html',
  styleUrls: ['./tabs-product-and-service.component.scss']
})
export class TabsProductAndServiceComponent {
  isActive: boolean = false;
  tabs: any = [
    {
      icon:{
        img:'services-1',
      },
      key: 'products',
      title: 'TABS.PRODUCTS'
    },
    {
      icon:{
        img:'product-1',
      },
      
      key: 'services',
      title: 'TABS.SERVICES'
    }
  ];
  @Input() selectedTab: string = "";
  @Output() onTabChange: EventEmitter<string> = new EventEmitter();

  changeSelectedTab(tab: string) {
    this.onTabChange.emit(tab);
  }
}
