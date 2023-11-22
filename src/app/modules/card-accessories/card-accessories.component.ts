import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-accessories',
  templateUrl: './card-accessories.component.html',
  styleUrls: ['./card-accessories.component.scss']
})
export class CardAccessoriesComponent {
  @Input() lang: string = "en";
  @Input() data: any;

  constructor() { }

}
