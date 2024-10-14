import { Component, ViewChild, ViewEncapsulation, HostListener, Output, EventEmitter } from '@angular/core';
import { LoadAssetsService } from 'src/app/load-assets.service';
import { TranslationService } from 'src/app/i18n/translation.service';
// import { OwlOptions } from 'ngx-owl-carousel-o';

import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { ResizeService } from 'src/app/services/resize.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-carousel-service-details',
  templateUrl: './carousel-service-details.component.html',
  styleUrls: ['./carousel-service-details.component.scss']
})
export class CarouselServiceDetailsComponent {
  @Output() changeSlide: EventEmitter<number> = new EventEmitter();
  height: number = 0;
  width: number = 0;
  isMobile: boolean = false;
  swiper: any = null;
  carousel: any = [1, 2, 1, 2, 1, 2, 1, 2];
  // @ViewChild('carouselParentEle') carouselParentEle!: any;
  // customOptions: OwlOptions | undefined;

  constructor(
    private loadAssetsService: LoadAssetsService,
    private TranslationService: TranslationService,
    private resizeService: ResizeService,
    private SharedService: SharedService
  ) {
    // this.updateCarouselOptions(window.innerWidth);
    // this.loadAssetsService.loadCss('assets/css/carousel.css', 'carousel-default');
  }


  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      // this.calculateRatio();
      // https://swiperjs.com/swiper-api
      this.swiper = new Swiper('.service-swiper-container', {

        // effect: 'fade',
        // fadeEffect: {
        //   crossFade: true
        // },
        //   slideShadows: false,
        // },


        // modules: [Navigation, Pagination, Scrollbar],
        // modules: [Navigation, Pagination],
        updateOnWindowResize: true,
        modules: [Navigation, Autoplay],
        slidesPerView: 1.32,
        // width: 204,
        // spaceBetween: 12,
        navigation: {
          nextEl: '.swiper-service-button-next',
          prevEl: '.swiper-service-button-prev',
        },
        // autoplay: {
        //   delay: 3000
        // },
        // pagination: {
        //   el: '.swiper-pagination',
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
        this.changeSlide.emit(data.activeIndex);
        // console.log('slide changed', data.activeIndex);
      });


      // this.swiper.on('resize', (data: any) => {
      //   // console.log(data);
      //   this.calculateRatio();
      // });
    }
  }


  // updateCarouselOptions(innerWidth: number) {
  //   this.customOptions = undefined;
  //   setTimeout(() => {
  //     const eleWidth = 229;
  //     const eleMargin = 0;//11
  //     const totalEleWidth = eleWidth + eleMargin;
  //     // 
  //     const carouselEle = this.carouselParentEle?.nativeElement.offsetWidth || 0;
  //     const howManyEle = parseInt((carouselEle / totalEleWidth).toString());

  //     this.customOptions = {
  //       smartSpeed: 1200,
  //       loop: false,
  //       mouseDrag: true,
  //       touchDrag: true,
  //       freeDrag: true,
  //       rtl: this.TranslationService.isRTL(),
  //       // dots: false,
  //       margin: 11,
  //       // dotsData: true,
  //       // nav: true,
  //       // items: 1,
  //       items: howManyEle,
  //       dots: true,
  //       nav: true,
  //       navText: ['', '']
  //     }
  //   });

  // }

  // @HostListener('window:resize', ['$event']) onResize(event: any) {
  //   this.updateCarouselOptions(event.target.innerWidth);
  // }

  setSlide(slideNo: number) {
    // alert(slideNo);
    this.swiper.slideTo(slideNo);
  }

  navigateTo(route: string) {
    this.SharedService.navigateTo(route);
  }

}
