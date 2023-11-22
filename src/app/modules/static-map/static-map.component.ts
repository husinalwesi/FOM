import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-static-map',
  templateUrl: './static-map.component.html',
  styleUrls: ['./static-map.component.scss']
})
export class StaticMapComponent {
  mapKey: string = environment.googleMapKey;
  @Input() data: any = '';
  @Input() size: any = {
    width: 660,
    height: 516
  };

}
