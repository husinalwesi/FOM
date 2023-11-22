import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.scss']
})
export class AddNewCarComponent {
  @Output() toggleNewCarEmiter: EventEmitter<any> = new EventEmitter();
  @Input() selectedCarCount: number = 0;
  @Input() isNewCarEnabled: boolean = false;

  filterDDL: any = {
    selected: null,
    placeholder: '',
    list: [
      {
        key: 'Show All',
        title: {
          en: 'Show All',
          ar: 'Show All'
        }
      },
      {
        key: 'Active only',
        title: {
          en: 'Active only',
          ar: 'Active only'
        }
      },
      {
        key: 'Nearest',
        title: {
          en: 'Nearest',
          ar: 'Nearest'
        }
      },
      {
        key: 'Newly added',
        title: {
          en: 'Newly added',
          ar: 'Newly added'
        }
      }
    ]
  };

  filterChange(option: any) {
    this.filterDDL.selected = option;
  }

  toggleNewCar() {
    this.toggleNewCarEmiter.emit();
  }

}
