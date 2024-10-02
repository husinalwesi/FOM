import { Component } from '@angular/core';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';

@Component({
  selector: 'app-blog-listing',
  templateUrl: './blog-listing.component.html',
  styleUrls: ['./blog-listing.component.scss']
})
export class BlogListingComponent {

  constructor(private pageTransitionsService: PageTransitionsService) {
    this.pageTransitionsService.HideLoad();
  }

  ngOnInit() {

  }

}
