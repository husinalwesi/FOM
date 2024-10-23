import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';


@Component({
  selector: 'app-listing-item',
  templateUrl: './listing-item.component.html',
  styleUrls: ['./listing-item.component.scss']
})
export class ListingItemComponent {

  constructor(
    private pageTransitionsService: PageTransitionsService,
    private router: Router,
    private RouteLocalizationPipe: RouteLocalizationPipe,
    private ngZone: NgZone,
  ) {
  }

  goToDetails() {
    this.pageTransitionsService.showPageTransition(() => {
      this.ngZone.run(() => {
        this.router.navigateByUrl(this.RouteLocalizationPipe.transform(`provider-details`));
      });
    });
  }

}
