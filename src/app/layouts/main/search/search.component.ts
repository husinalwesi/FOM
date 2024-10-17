import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { HeaderService } from 'src/app/services/header.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
// import { HeaderComponent } from 'src/app/modules/header/header.component';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  list: any = [1, 2, 3, 4, 5, 6];
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
    this.headerService.useStickyHeader(false);

    this.metaTagsService.updateMetaTags({
      title: "Page | FOM",
      description: "Page | FOM",
      keywords: ["FOM 1", "FOM 2"]
    });
  }

}
