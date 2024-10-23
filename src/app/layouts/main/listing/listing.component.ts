import { Component } from '@angular/core';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { HeaderService } from 'src/app/services/header.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  providers: [RouteLocalizationPipe]
})
export class ListingComponent {

  constructor(
    private pageTransitionsService: PageTransitionsService,
    private headerService: HeaderService,
    private metaTagsService: MetaTagsService,
  ) {
    this.pageTransitionsService.HideLoad();
    this.headerService.useStickyHeader(true);

    this.metaTagsService.updateMetaTags({
      title: "Page | FOM",
      description: "Page | FOM",
      keywords: ["FOM 1", "FOM 2"]
    });
  }

  ngOnInit(): void {
  }

}
