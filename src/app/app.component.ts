import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { TranslationService } from './i18n/translation.service';
import { locale as enLang } from './i18n/vocabs/en';
import { locale as arLang } from './i18n/vocabs/ar';
import { PlatformService } from './services/platform.service';
import { ResizeService } from './services/resize.service';
import { ScrollService } from './services/scroll.service';
// import 'default-passive-events';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
// import { SharedService } from './services/shared.service';
// import { StickyHeaderService } from './services/sticky-header.service';
// import { TranslateService } from '@ngx-translate/core';
// import { Location } from '@angular/common';
import { MagicCursorService } from './services/magic-cursor.service';
import Scrollbar from 'smooth-scrollbar';
import { PageTransitionsService } from './services/page-transitions.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // previousRoute: any;
  // getScreenWidth: any;
  isMobile: boolean = false;

  // @HostBinding('style.--primary-color') primaryColor = '#00904A';
  // pageType: string = ""; //woqod //fahes
  isMagicCursorEnabled: boolean = false;
  // isPaddingEnabled: boolean = false;

  constructor(
    private translationService: TranslationService,
    public platformService: PlatformService,
    private resizeService: ResizeService,
    private scrollService: ScrollService,
    private router: Router,
    // private route: ActivatedRoute,
    // private sharedService: SharedService,


    // private stickyHeaderService: StickyHeaderService,
    // private location: Location,
    // private translate: TranslateService,
    private magicCursorService: MagicCursorService,
    private pageTransitionsService: PageTransitionsService
  ) {
    // const xxx: any = document.querySelector("#content-wrap");
    // xxx.style.transform = "translate(0px, -80px)";
    // tl_transitIn.to("#content-wrap", { y: -80, autoAlpha: 0, clearProps: "all" }, 0);
    // this.initSmothScroll();
    // 
    // this.handleMobilePages();
    this.registerTranslations();

    if (!this.isMobile) {
      this.resizeService.initializeResizeEvent();
      this.scrollService.initializeScrollEvent();
      // this.scrollToTopOnRoute();
    }

    if (!this.isMobile) {
      this.isMagicCursorEnabled = environment.isMagicCursorEnabled;
    }
  }

  // @HostListener('window:resize', ['$event'])
  // onWindowResize() {
  //   if (typeof window !== 'undefined') {
  //     // this.getScreenWidth = window.innerWidth;
  //     this.handleResizeScreen();
  //   }
  // }

  // scrollToTopOnRoute() {
  //   // const routerSubscription = this.router.events.subscribe((event) => {
  //   //   if (event instanceof NavigationEnd) {
  //   //     if (typeof window !== 'undefined') {
  //   //       window.scrollTo({ top: 0 });
  //   //     }
  //   //   }
  //   // });
  // }

  // initSmothScroll() {
  //   const scrollContainer: any = document.querySelector("#scroll-container");
  //   if (!scrollContainer) return;
  //   Scrollbar.init(scrollContainer, {
  //     damping: 0.06,
  //     renderByPixels: true,
  //     continuousScrolling: true,
  //     alwaysShowTracks: true
  //   });
  // }

  ngOnInit() {
    this.pageTransitionsService.initializePageTransition();

    if (!this.isMobile) {
      this.translationService.setHtmlDirection(this.translationService.getSelectedLanguage());
    }

    // if (typeof window !== 'undefined') {
    //   this.getScreenWidth = window.innerWidth;
    // }

    if (!this.isMobile) {
      // this.updatePageType(this.location.path());
      // 
      setTimeout(() => {
        // this.stickyEnability(this.location.path());
        this.magicCursorService.initializeMagicCursor();
      });
    }

  }

  // handleMobilePages() {
  //   if (typeof window !== 'undefined') {
  //     setTimeout(() => {
  //       const url = window.location.href;
  //       if (url.indexOf("webview/checkout") !== -1 || url.indexOf("webview/save-card") !== -1) {
  //         const amount = +this.route.snapshot.queryParams?.amount || 0;
  //         const token = this.route.snapshot.queryParams?.token || '';
  //         if (amount && token) {
  //           this.isMobile = true;
  //           this.sharedService.enableFullLoader();
  //         }
  //       } else if (url.indexOf("payment-confirm") !== -1 && localStorage.getItem('mobileToken')) {
  //         this.isMobile = true;
  //       }
  //     });
  //   }
  // }

  // ngAfterViewInit(): void {
  //   if (!this.isMobile) {
  //     // this.scrollTopOnEachRouteChange();
  //   }
  // }

  // getUserLocation() {
  //   if (typeof window !== 'undefined') {
  //     const path = window.location.href || '';
  //     const routesToIgnoreScrolling = [
  //       '/webview/checkout',
  //       '?checkout',
  //       'payment-confirm',
  //       '/webview/save-card'
  //     ];

  //     const isIgnored = routesToIgnoreScrolling.some((item: any) => path.indexOf(item) !== -1);

  //     if (!isIgnored) {
  //       if (navigator.geolocation) {
  //         navigator.geolocation.getCurrentPosition((position) => {
  //           localStorage.setItem('location', JSON.stringify({ lat: position.coords.latitude, lng: position.coords.longitude }));
  //         }, () => { }, {
  //           maximumAge: 10000,
  //           timeout: 5000,
  //           enableHighAccuracy: true
  //         });
  //       } else {
  //         // 
  //       }
  //     }
  //   }
  // }

  registerTranslations() {
    this.translationService.loadTranslations(enLang, arLang);
    this.translationService.setLanguage(this.translationService.getSelectedLanguage());
  }

  // handleResizeScreen() {

  //   const excludePages = [
  //     '',//refere to main home page
  //     '/fahes'
  //   ];
  //   const path = this.router.url.replace(`/${this.translationService.getSelectedLanguage()}`, ``);
  //   const isHomePage = excludePages.filter(item => item === path).length > 0;

  //   if (typeof window !== 'undefined' && isHomePage == false) {
  //     if (this.getScreenWidth > 1023) {
  //       document.body.style.paddingTop = '112px';
  //     } else {
  //       document.body.style.paddingTop = '88px';
  //     }
  //   }
  // }

  // scrollTopOnEachRouteChange() {
  //   if (this.platformService.isClient()) {
  //     const routerSubscription = this.router.events.subscribe((event) => {
  //       if (event instanceof NavigationEnd) {
  //         this.magicCursorService.initializeMagicCursor();
  //         if (typeof window !== 'undefined') {
  //           // window.scrollTo({ top: 0, behavior: "smooth" });
  //         }
  //         this.updatePageType(event.urlAfterRedirects);
  //         setTimeout(() => {
  //           this.stickyEnability(event.urlAfterRedirects);
  //         });
  //       }
  //     });
  //   }
  // }

  // updatePageType(url: string) {
  //   let result = "woqod";//default
  //   const pathArray = url.split("/");
  //   if (pathArray.length >= 3) {
  //     result = pathArray[2] === "fahes" ? "fahes" : "woqod";
  //   }
  //   if (this.pageType != result) this.pageType = result;
  //   // 
  //   const newColor = this.pageType === "woqod" ? "#00904A" : "#b30938";
  //   if (this.primaryColor != newColor) this.primaryColor = newColor;
  // }

  // stickyEnability(url: string) {
  //   const isHomePage = url.replace(`/${this.translationService.getSelectedLanguage()}`, ``) === '';
  //   this.stickyHeaderService.isStickyEnabled$.next(!isHomePage);
  // }

}
