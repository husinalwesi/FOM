import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-our-values-btn',
  templateUrl: './our-values-btn.component.html',
  styleUrls: ['./our-values-btn.component.scss']
})
export class OurValuesBtnComponent {
@Input() lang:string ='en';
@Input() data:any=null;
}
