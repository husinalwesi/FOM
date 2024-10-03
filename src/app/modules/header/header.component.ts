import { Component, ElementRef, HostListener, NgZone, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { throttle } from 'lodash';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [RouteLocalizationPipe]
})

export class HeaderComponent {
  isStickyEnabled: boolean = false;
  @ViewChild('header', { static: true }) headerElement!: ElementRef;

  constructor(
    private pageTransitionsService: PageTransitionsService,
    private router: Router,
    private RouteLocalizationPipe: RouteLocalizationPipe,
    private ngZone: NgZone
  ) {
    this.updateScroll = throttle(this.updateScroll.bind(this), 200); // Throttle to run every 100ms
  }

  updateHeader() {
    // console.log('run');

    if (typeof window !== 'undefined') {
      this.isStickyEnabled = (window.scrollY || document.documentElement.scrollTop) > 50;
    }
  }

  @HostListener('window:scroll', ['$event']) updateScroll(event: Event) {
    this.updateHeader();
  }

  navigate() {
    this.pageTransitionsService.showPageTransition(() => {
      this.ngZone.run(() => {
        this.router.navigateByUrl(this.RouteLocalizationPipe.transform(``));
      });
    });
  }

  navigateToListing() {
    this.pageTransitionsService.showPageTransition(() => {
      this.ngZone.run(() => {
        this.router.navigateByUrl(this.RouteLocalizationPipe.transform(`listing`));
      });
    });
  }



}
