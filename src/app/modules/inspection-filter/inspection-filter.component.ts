import { Component, Input } from "@angular/core";

@Component({
  selector: "app-inspection-filter",
  templateUrl: "./inspection-filter.component.html",
  styleUrls: ["./inspection-filter.component.scss"],
})
export class InspectionFilterComponent {
  isNewCarEnabled: boolean = false;
  @Input() isSelectionEnabled: boolean = false;
  filterDDL: any = {
    selected: null,
    placeholder: "",
    list: [
      {
        key: "Show All",
        title: {
          en: "Show All",
          ar: "Show All",
        },
      },
      {
        key: "Active only",
        title: {
          en: "Active only",
          ar: "Active only",
        },
      },
      {
        key: "Nearest",
        title: {
          en: "Nearest",
          ar: "Nearest",
        },
      },
      {
        key: "Newly added",
        title: {
          en: "Newly added",
          ar: "Newly added",
        },
      },
    ],
  };
  cars: any = [
    {
      name: "camry",
      number: "1234",
    },
    {
      name: "camry",
      number: "1234",
    },
    {
      name: "camry",
      number: "1234",
    },
    {
      name: "camry",
      number: "1234",
    },
  ];
  vehicles: any = {
    pagination: {
      pageSize: 5,
      pageIndex: 1,
      totalCount: 100//make it 0
    },
    selection: [],
    data: [
      {
        id: '1',
        title: 'Car #1',
        details: [
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
        ],
        isSelectable: false,
        isActive: false,
        count: 0,
        expiry: 400
      },
      {
        id: '2',
        title: 'Car #2',
        details: [
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
        ],
        isSelectable: true,
        isActive: false,
        count: 0,
        expiry: 0
      },
    ]
  };
  filterChange(option: any) {
    this.filterDDL.selected = option;
  }
  getSelectedCars() {
    // Maybe we need to calculate the sum of the selected cars
    return this.vehicles.data.filter((vehicle: any) => vehicle.isActive).length || 0;
  }
  toggleNewCar() {
    this.isNewCarEnabled = !this.isNewCarEnabled;
  }
}
