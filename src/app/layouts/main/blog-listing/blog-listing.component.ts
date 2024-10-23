import { ChangeDetectorRef, Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';
import { ResizeService } from 'src/app/services/resize.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-blog-listing',
  templateUrl: './blog-listing.component.html',
  styleUrls: ['./blog-listing.component.scss']
})
export class BlogListingComponent {
  blogs: any = [1, 2, 3, 4, 5, 6];

  constructor(
    private pageTransitionsService: PageTransitionsService,
    private metaTagsService: MetaTagsService,
    private headerService: HeaderService,

    private resizeService: ResizeService,
    private cdr: ChangeDetectorRef,

    private SharedService: SharedService
  ) {
    this.pageTransitionsService.HideLoad();
    this.headerService.useStickyHeader(true);

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
