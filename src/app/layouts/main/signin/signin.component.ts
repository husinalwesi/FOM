import { Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  constructor(
    private pageTransitionsService: PageTransitionsService,
    private headerService: HeaderService,
    private metaTagsService: MetaTagsService,
    private SharedService: SharedService
  ) {
    this.pageTransitionsService.HideLoad();
    this.headerService.useStickyHeader(false);

    this.metaTagsService.updateMetaTags({
      title: "Page | FOM",
      description: "Page | FOM",
      keywords: ["FOM 1", "FOM 2"]
    });
  }

  navigateTo(route: string) {
    this.SharedService.navigateTo(route);
  }

}
