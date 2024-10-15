import { ChangeDetectorRef, Component, ElementRef, HostListener, NgZone, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { throttle } from 'lodash';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { HeaderService } from 'src/app/services/header.service';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [RouteLocalizationPipe]
})

export class HeaderComponent {
  isStickyEnabled: boolean = false;
  forceStickyEnabled: boolean = false;
  @ViewChild('header', { static: true }) headerElement!: ElementRef;

  constructor(
    private pageTransitionsService: PageTransitionsService,
    private router: Router,
    private RouteLocalizationPipe: RouteLocalizationPipe,
    private ngZone: NgZone,
    // private cdk: ChangeDetectorRef,
    private headerService: HeaderService,
    private sharedService: SharedService
  ) {
    this.updateScroll = throttle(this.updateScroll.bind(this), 200); // Throttle to run every 100ms
  }

  ngOnInit() {
    // Subscribe to sticky header state changes
    this.headerService.stickyHeader$.subscribe((isSticky) => {
      this.forceStickyEnabled = isSticky;
      this.updateHeader();
      // if (this.forceStickyEnabled) this.isStickyEnabled = true;
    });
  }


  updateHeader() {
    if (typeof window !== 'undefined') {
      this.isStickyEnabled = this.forceStickyEnabled ? true : (window.scrollY || document.documentElement.scrollTop) > 50;
      // console.log(2, this.forceStickyEnabled);
    }
  }

  // useStickyHeader() {
  //   // setTimeout(() => {
  //   this.forceStickyEnabled = true;
  //   this.isStickyEnabled = true;
  //   this.cdk.detectChanges();
  //   // console.log(1, this.forceStickyEnabled, this.isStickyEnabled);
  //   // }, 300);
  // }


  @HostListener('window:scroll', ['$event']) updateScroll(event: Event) {
    this.updateHeader();
  }

  navigateTo(route: string) {
    this.sharedService.navigateTo(route);
  }

  navigate() {
    this.pageTransitionsService.showPageTransition(() => {
      this.ngZone.run(() => {
        this.router.navigateByUrl(this.RouteLocalizationPipe.transform(``));
      });
    });
  }

  navigateToListing() {
    return;
    this.pageTransitionsService.showPageTransition(() => {
      this.ngZone.run(() => {
        this.router.navigateByUrl(this.RouteLocalizationPipe.transform(`listing`));
      });
    });
  }



}
