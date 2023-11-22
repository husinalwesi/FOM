import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mission-box',
  templateUrl: './mission-box.component.html',
  styleUrls: ['./mission-box.component.scss']
})
export class MissionBoxComponent {
@Input() lang:string ='en';
@Input() secondBulletsList:any =null;
}
