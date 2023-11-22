import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inspection-item',
  templateUrl: './inspection-item.component.html',
  styleUrls: ['./inspection-item.component.scss']
})
export class InspectionItemComponent {
  @Input() isActive: boolean = false;
  @Input() isSelectable: boolean = false;

  details: any = [
    {
      title: 'E_TAG.NUMBER_PLATE',
      value: '123456'
    },
    {
      title: 'RETAIL.TYPE',
      value: 'Saloon'
    },
    {
      title: 'E_TAG.MANUFACTOR',
      value: 'Toyota'
    },
    {
      title: 'RETAIL.MODEL',
      value: 'Camry'
    },
    {
      title: 'SERVICE_INSPESTION.INSPECTED_DATE',
      value: '20-06-2023'
    },
    {
      title: 'SERVICE_INSPESTION.INSPECTED_STATUS',
      value: 'Failed'
    }
  ];
}
