import { Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';

@Component({
  selector: 'app-provider-detailed',
  templateUrl: './provider-detailed.component.html',
  styleUrls: ['./provider-detailed.component.scss']
})
export class ProviderDetailedComponent {

  constructor(
    private pageTransitionsService: PageTransitionsService,
    private headerService: HeaderService,
    private metaTagsService: MetaTagsService
  ) {
    this.pageTransitionsService.HideLoad();
    this.headerService.useStickyHeader();

    this.metaTagsService.updateMetaTags({
      title: "Page | FOM",
      description: "Page | FOM",
      keywords: ["FOM 1", "FOM 2"]
    });
  }

}
