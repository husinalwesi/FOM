import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-woqood-app',
  templateUrl: './woqood-app.component.html',
  styleUrls: ['./woqood-app.component.scss']
})
export class WoqoodAppComponent {
@Input() app :any = '';
@Input() lang :string = 'en';
}
