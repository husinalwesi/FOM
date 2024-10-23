import { Component } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { LoadAssetsService } from 'src/app/load-assets.service';

@Component({
  selector: 'app-blog-carousel',
  templateUrl: './blog-carousel.component.html',
  styleUrls: ['./blog-carousel.component.scss']
})
export class BlogCarouselComponent {
  swiper: any = null;
  news: any = [1, 2, 3, 1, 2, 3, 1, 2, 3];

  constructor(
    private loadAssetsService: LoadAssetsService,
  ) {
    this.loadAssetsService.loadCss('assets/css/swiper-bundle.min.css', 'carousel-default');
  }

  ngOnInit(): void {
    this.initializeCarousel();
  }

  initializeCarousel() {
    if (typeof window !== 'undefined') {
      this.swiper = new Swiper('.blogs-swiper-container', {
        centeredSlides: true,
        effect: 'coverflow',
        coverflowEffect: {
          slideShadows: false
        },
        updateOnWindowResize: true,
        modules: [Navigation, Autoplay, Pagination, EffectCoverflow],
        slidesPerView: 1.4,
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-blogs-button-next',
          prevEl: '.swiper-blogs-button-prev',
        },
        pagination: {
          el: '.swiper-blogs-pagination',
          clickable: true,
          dynamicBullets: true
        },
      });
    }
  }

}
