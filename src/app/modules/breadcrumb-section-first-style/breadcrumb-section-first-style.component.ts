import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-section-first-style',
  templateUrl: './breadcrumb-section-first-style.component.html',
  styleUrls: ['./breadcrumb-section-first-style.component.scss']
})
export class BreadcrumbSectionFirstStyleComponent {
  @Input() breadCrumb: any = null;
  @Input() metaData: any = null;
}
