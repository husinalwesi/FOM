import { Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(
    private pageTransitionsService: PageTransitionsService,
    private headerService: HeaderService,
    private metaTagsService: MetaTagsService
  ) {
    this.pageTransitionsService.HideLoad();
    this.headerService.useStickyHeader(true);

    this.metaTagsService.updateMetaTags({
      title: "Home Page | FOM",
      description: "Home Page | FOM",
      keywords: ["FOM 1", "FOM 2"]
    });
  }

}
