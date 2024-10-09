import { Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
// import { HeaderComponent } from 'src/app/modules/header/header.component';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  // providers: [HeaderComponent]
})
export class ListingComponent {

  constructor(
    private pageTransitionsService: PageTransitionsService,
    private headerService: HeaderService,
    private metaTagsService: MetaTagsService
    
    // private headerComponent: HeaderComponent
  ) {
    this.pageTransitionsService.HideLoad();
    this.headerService.useStickyHeader();

    this.metaTagsService.updateMetaTags({
      title: "Page | FOM",
      description: "Page | FOM",
      keywords: ["FOM 1", "FOM 2"]
    });
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.headerComponent.useStickyHeader();
    // }, 500);
  }

}
