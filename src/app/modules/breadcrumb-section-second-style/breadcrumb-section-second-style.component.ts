import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-section-second-style',
  templateUrl: './breadcrumb-section-second-style.component.html',
  styleUrls: ['./breadcrumb-section-second-style.component.scss']
})
export class BreadcrumbSectionSecondStyleComponent {
  @Input() link: string = "";
  @Input() breadCrumb: any = null;
  @Input() metaData: any = null;
  @Input() shareThis: any = null;
}
