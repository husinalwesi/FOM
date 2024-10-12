import { Component, ViewChild, ViewEncapsulation, HostListener } from '@angular/core';
import { LoadAssetsService } from 'src/app/load-assets.service';
import { TranslationService } from 'src/app/i18n/translation.service';
// import { OwlOptions } from 'ngx-owl-carousel-o';

import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { ResizeService } from 'src/app/services/resize.service';

// { Navigation, Pagination } 

// import {Navigation} from "swiper";

// Import Swiper styles
// import 'node_modules/swiper/swiper-bundle.min.css';
// import 'node_modules/swiper/swiper.min.css';
// import 'swiper/modules/navigation/navigation.min.css';
// import 'swiper/modules/pagination/pagination.min.css';


// Install required modules
// SwiperCore.use([Navigation, Pagination]);



@Component({
  selector: 'app-home-partners',
  templateUrl: './home-partners.component.html',
  styleUrls: ['./home-partners.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class HomePartnersComponent {
  height: number = 0;
  width: number = 0;
  isMobile: boolean = false;
  swiper: any = null;
  carousel: any = [1, 2, 3, 4, 1, 2, 3, 4];
  // @ViewChild('carouselParentEle') carouselParentEle!: any;
  // customOptions: OwlOptions | undefined;

  constructor(
    private loadAssetsService: LoadAssetsService,
    private TranslationService: TranslationService,
    private resizeService: ResizeService,
  ) {
    // this.updateCarouselOptions(window.innerWidth);
    // this.loadAssetsService.loadCss('assets/css/carousel.css', 'carousel-default');
  }


  ngOnInit(): void {
    // this.calculateRatio();
    // https://swiperjs.com/swiper-api
    this.swiper = new Swiper('.partner-swiper-container', {
      // modules: [Navigation, Pagination, Scrollbar],
      // modules: [Navigation, Pagination],
      updateOnWindowResize: true,
      modules: [Navigation],
      // slidesPerView: 4,
      width: 204,
      spaceBetween: 12,
      navigation: {
        nextEl: '.swiper-partner-button-next',
        prevEl: '.swiper-partner-button-prev',
      },
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      loop: false,
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
      // resize: () => {

      // }
    });

    // this.swiper.on('resize', (data: any) => {
    //   // console.log(data);
    //   this.calculateRatio();
    // });
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

}
