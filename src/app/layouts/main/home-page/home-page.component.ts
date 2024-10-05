import { Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';


@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent {

  constructor(
    private pageTransitionsService: PageTransitionsService,
    private headerService: HeaderService
  ) {
    this.pageTransitionsService.HideLoad();
    this.headerService.useStickyHeader(false);
  }

}
