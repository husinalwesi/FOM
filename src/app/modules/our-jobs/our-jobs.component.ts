import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-our-jobs',
  templateUrl: './our-jobs.component.html',
  styleUrls: ['./our-jobs.component.scss']
})
export class OurJobsComponent {
  @Input() lang: string = "en";
  @Input() jobs: any = [];
}
