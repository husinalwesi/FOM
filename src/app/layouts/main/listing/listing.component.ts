import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { HeaderService } from 'src/app/services/header.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
// import { HeaderComponent } from 'src/app/modules/header/header.component';
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

    private router: Router,
    private RouteLocalizationPipe: RouteLocalizationPipe,
    private ngZone: NgZone,

    // private headerComponent: HeaderComponent
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
    // setTimeout(() => {
    //   this.headerComponent.useStickyHeader();
    // }, 500);
  }


  goToDetails() {
    this.pageTransitionsService.showPageTransition(() => {
      this.ngZone.run(() => {
        this.router.navigateByUrl(this.RouteLocalizationPipe.transform(`provider-details`));
      });
    });
  }

}
