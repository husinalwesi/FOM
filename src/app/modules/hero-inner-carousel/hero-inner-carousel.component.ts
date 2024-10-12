import { Component } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

@Component({
  selector: 'app-hero-inner-carousel',
  templateUrl: './hero-inner-carousel.component.html',
  styleUrls: ['./hero-inner-carousel.component.scss']
})
export class HeroInnerCarouselComponent {
  swiper: any = null;
  carousel: any = [1, 2, 3, 4];

  ngOnInit(): void {
    this.swiper = new Swiper('.hero-inner-swiper-container', {
      // modules: [Navigation, Pagination, Scrollbar],
      // modules: [Navigation, Pagination],
      updateOnWindowResize: true,
      modules: [Navigation],
      // slidesPerView: 2,
      breakpoints: {
        // when window width is >= 320px
        0: {
          slidesPerView: 3,
          // spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          // spaceBetween: 30
        },
        // when window width is >= 640px
        // 640: {
        //   slidesPerView: 4,
        //   spaceBetween: 40
        // }
      },    
      // width: 204,
      // spaceBetween: 12,
      navigation: {
        nextEl: '.swiper-inner-button-next',
        prevEl: '.swiper-inner-button-prev',
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
  }

}
