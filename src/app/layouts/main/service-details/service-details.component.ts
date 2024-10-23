import { Component, ViewChild } from '@angular/core';
import { CarouselServiceDetailsComponent } from 'src/app/modules/carousel-service-details/carousel-service-details.component';
import { HeaderService } from 'src/app/services/header.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';
import { SharedService } from 'src/app/services/shared.service';




import { ChangeDetectorRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ResizeService } from 'src/app/services/resize.service';
import { RouteLocalizationPipe } from "src/app/pipes/route-localization.pipe";

import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { ViewEncapsulation, HostListener, Output, EventEmitter } from '@angular/core';
import { LoadAssetsService } from 'src/app/load-assets.service';
import { TranslationService } from 'src/app/i18n/translation.service';


@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent {
  swiper: any = null;
  @ViewChild('carouselServiceDetailsComponent') carouselServiceDetailsComponent!: CarouselServiceDetailsComponent;
  services: any = [1, 2, 3, 4, 5, 6, 7, 8];
  activeService: number = 0;

  constructor(
    private pageTransitionsService: PageTransitionsService,
    private headerService: HeaderService,
    private metaTagsService: MetaTagsService,
    private SharedService: SharedService,
    private loadAssetsService: LoadAssetsService,
  ) {
    this.loadAssetsService.loadCss('assets/css/swiper-bundle.min.css', 'carousel-default');
    this.pageTransitionsService.HideLoad();
    this.headerService.useStickyHeader(false);

    this.metaTagsService.updateMetaTags({
      title: "Page | FOM",
      description: "Page | FOM",
      keywords: ["FOM 1", "FOM 2"]
    });
  }

  navigateTo(route: string) {
    this.SharedService.navigateTo(route);
  }

  ngOnInit(): void {
    this.initializeCarousel();
  }

  serviceChangeSlide(slideNo: number) {
    this.activeService = slideNo;
    // this.carouselServiceDetailsComponent.setSlide(slideNo);
    this.swiper.slideTo(slideNo);
  }

  serviceChangeSlideBTN(slideNo: number) {
    this.activeService = slideNo;
    this.carouselServiceDetailsComponent.setSlide(slideNo);
    // this.swiper.slideTo(slideNo);
  }


  initializeCarousel() {
    if (typeof window !== 'undefined') {
      // this.calculateRatio();
      // https://swiperjs.com/swiper-api
      this.swiper = new Swiper('.service-details-items-swiper-container', {
        // freeMode: {
        //   enabled: true
        // },
        // effect: 'fade',
        // fadeEffect: {
        //   crossFade: true
        // },
        //   slideShadows: false,
        // },


        // modules: [Navigation, Pagination, Scrollbar],
        // modules: [Navigation, Pagination],
        updateOnWindowResize: true,
        // modules: [Navigation, Autoplay, Pagination],
        // modules: [Navigation, Autoplay, Pagination],
        slidesPerView: 4,
        // width: 204,
        spaceBetween: 16,
        // navigation: {
        //   nextEl: '.swiper-service-details-items-button-next',
        //   prevEl: '.swiper-service-details-items-button-prev',
        // },
        // autoplay: {
        //   delay: 3000
        // },
        // pagination: {
        //   el: '.swiper-service-details-items-pagination',
        //   clickable: true,
        // },
        // loop: true,
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
        // resize: () => {

        // }
      });

      this.swiper.on('slideChange', (data: any) => {
        // console.log(data);
        // console.log(data.activeIndex);
        // this.carousel.length
        // console.log(data.activeIndex, this.carousel.length, data.activeIndex > this.carousel.length ? 0 : data.activeIndex);
        // console.log(data.activeIndex);
        // console.log(data.activeIndex);
        let slideNo = data.activeIndex;
        this.activeService = slideNo;
        this.carouselServiceDetailsComponent.setSlide(slideNo);

        // this.serviceChangeSlide(data.activeIndex, false);
        // this.changeSlide.emit(data.activeIndex >= this.carousel.length - 1 ? 0 : data.activeIndex);
        // console.log('slide changed', data.activeIndex);
      });

    }
  }

}
