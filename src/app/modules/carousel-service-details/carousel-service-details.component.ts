import { Component, Output, EventEmitter } from '@angular/core';
import { LoadAssetsService } from 'src/app/load-assets.service';
import Swiper from 'swiper';
import { EffectCards } from 'swiper/modules';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-carousel-service-details',
  templateUrl: './carousel-service-details.component.html',
  styleUrls: ['./carousel-service-details.component.scss']
})
export class CarouselServiceDetailsComponent {
  stopNextEmitter: boolean = false;
  @Output() changeSlide: EventEmitter<number> = new EventEmitter();
  height: number = 0;
  width: number = 0;
  isMobile: boolean = false;
  swiper: any = null;
  carousel: any = [1, 2, 1, 2, 1, 2, 1, 2, 1];

  constructor(
    private loadAssetsService: LoadAssetsService,
    private SharedService: SharedService
  ) {
    this.loadAssetsService.loadCss('assets/css/swiper-bundle.min.css', 'carousel-default');
  }

  init() {
    if (typeof window !== 'undefined') {
      this.swiper = new Swiper('.service-swiper-container', {
        effect: "cards",
        grabCursor: true,
        initialSlide: 0,
        speed: 500,
        loop: false,
        mousewheel: {
          invert: false,
        },
        cardsEffect: {
          rotate: true,
        },
        modules: [EffectCards],
      });

      this.swiper.on('slideChange', (data: any) => {
        if (!this.stopNextEmitter) this.changeSlide.emit(data.activeIndex >= this.carousel.length - 1 ? 0 : data.activeIndex);
        if (this.stopNextEmitter) this.stopNextEmitter = false;
      });

    }
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.init();
    });
  }

  setSlide(slideNo: number, stopNextEmitter = false) {
    if (stopNextEmitter) this.stopNextEmitter = true;
    this.swiper.slideTo(slideNo);
  }

}
