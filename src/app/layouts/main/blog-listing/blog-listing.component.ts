import { Component } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';

@Component({
  selector: 'app-blog-listing',
  templateUrl: './blog-listing.component.html',
  styleUrls: ['./blog-listing.component.scss']
})
export class BlogListingComponent {

  constructor(
    private pageTransitionsService: PageTransitionsService,
    private metaTagsService: MetaTagsService
  ) {
    this.pageTransitionsService.HideLoad();

    this.metaTagsService.updateMetaTags({
      title: "Page | FOM",
      description: "Page | FOM",
      keywords: ["FOM 1", "FOM 2"]
    });
  }

  ngOnInit() {

  }

}
