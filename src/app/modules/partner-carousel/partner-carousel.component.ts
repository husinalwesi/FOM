import { Component } from '@angular/core';
import { LoadAssetsService } from 'src/app/load-assets.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { ResizeService } from 'src/app/services/resize.service';

@Component({
  selector: 'app-partner-carousel',
  templateUrl: './partner-carousel.component.html',
  styleUrls: ['./partner-carousel.component.scss']
})
export class PartnerCarouselComponent {
  swiper: any = null;
  carousel: any = [1, 2, 3, 4, 1, 2, 3, 4];

  constructor(
    private loadAssetsService: LoadAssetsService,
  ) {
    this.loadAssetsService.loadCss('assets/css/swiper-bundle.min.css', 'carousel-default');
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.swiper = new Swiper('.partner-swiper-container', {
        centeredSlides: false,
        updateOnWindowResize: true,
        modules: [Navigation, Pagination],
        slidesPerView: 'auto',
        width: 204,
        spaceBetween: 12,
        navigation: {
          nextEl: '.swiper-partner-button-next',
          prevEl: '.swiper-partner-button-prev',
        },
        pagination: {
          el: '.swiper-partner-pagination',
          clickable: true,
          dynamicBullets: true
        },
        loop: false,
      });
    }
  }

}
