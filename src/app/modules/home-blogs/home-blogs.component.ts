import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ResizeService } from 'src/app/services/resize.service';
import { RouteLocalizationPipe } from "src/app/pipes/route-localization.pipe";
import { PageTransitionsService } from 'src/app/services/page-transitions.service';
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { SharedService } from 'src/app/services/shared.service';
import { ViewChild, ViewEncapsulation, HostListener, Output, EventEmitter } from '@angular/core';
import { LoadAssetsService } from 'src/app/load-assets.service';
import { TranslationService } from 'src/app/i18n/translation.service';

@Component({
  selector: 'app-home-blogs',
  templateUrl: './home-blogs.component.html',
  styleUrls: ['./home-blogs.component.scss'],
  providers: [RouteLocalizationPipe]
})
export class HomeBlogsComponent {
  swiper: any = null;
  news: any = [1, 2, 3];
  heightNews: number = 0;
  isMobile: boolean = false;

  constructor(
    private resizeService: ResizeService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private RouteLocalizationPipe: RouteLocalizationPipe,
    private pageTransitionsService: PageTransitionsService,
    private ngZone: NgZone,
    private loadAssetsService: LoadAssetsService,
    private TranslationService: TranslationService,
    private SharedService: SharedService
  ) {
    this.loadAssetsService.loadCss('assets/css/swiper-bundle.min.css', 'carousel-default');
  }

  ngAfterViewInit(): void {
    this.resizeService.screenWidthChange$.subscribe(data => {
      this.newsRatio();
      this.cdr.detectChanges();  // This will trigger change detection manually
    });
  }

  ngOnInit(): void {
    this.initializeCarousel();
  }

  newsRatio() {
    const desktopRatio: number = 242 / 286;
    const mobileRatio: number = 242 / 286;
    this.isMobile = this.resizeService.isMobile();
    const detectRatio = this.isMobile ? mobileRatio : desktopRatio;

    const mobileSectionEleAll: any = typeof window !== 'undefined' ? document.querySelectorAll(".news-item") : null;
    let mobileSectionEle = null;

    for (let index = 0; index < mobileSectionEleAll.length; index++) {
      if (mobileSectionEleAll[index].offsetWidth !== 0) {
        mobileSectionEle = mobileSectionEleAll[index];
        break;
      }
    }

    if (!mobileSectionEle) return;
    const screenWidth = mobileSectionEle.offsetWidth;
    this.heightNews = screenWidth / detectRatio;
  }

  navigate() {
    this.pageTransitionsService.showPageTransition(() => {
      this.ngZone.run(() => {
        this.router.navigateByUrl(this.RouteLocalizationPipe.transform(`/blogs`));
      });
    });
  }

  initializeCarousel() {
    if (typeof window !== 'undefined') {
      // this.calculateRatio();
      // https://swiperjs.com/swiper-api
      this.swiper = new Swiper('.blogs-swiper-container', {

        // effect: 'fade',
        // fadeEffect: {
        //   crossFade: true
        // },
        //   slideShadows: false,
        // },


        // modules: [Navigation, Pagination, Scrollbar],
        // modules: [Navigation, Pagination],
        updateOnWindowResize: true,
        modules: [Navigation, Autoplay, Pagination],
        slidesPerView: 1.2,
        // width: 204,
        spaceBetween: 16,
        navigation: {
          nextEl: '.swiper-blogs-button-next',
          prevEl: '.swiper-blogs-button-prev',
        },
        // autoplay: {
        //   delay: 3000
        // },
        pagination: {
          el: '.swiper-blogs-pagination',
          clickable: true,
        },
        // loop: true,
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
        // resize: () => {

        // }
      });
    }
  }

}
