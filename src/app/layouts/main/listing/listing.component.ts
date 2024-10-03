import { Component } from '@angular/core';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent {

  constructor(private pageTransitionsService: PageTransitionsService) {
    this.pageTransitionsService.HideLoad();
  }

}
