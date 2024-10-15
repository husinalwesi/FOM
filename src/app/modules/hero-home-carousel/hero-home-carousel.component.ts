import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';

import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper/modules';
import { ResizeService } from 'src/app/services/resize.service';
import { SwiperOptions } from 'swiper/types';
import { SharedService } from 'src/app/services/shared.service';

interface CustomSwiperOptions extends SwiperOptions {
  carouselEffect?: {
    opacityStep: number;
    scaleStep: number;
    sideSlides: number;
  };
}


@Component({
  selector: 'app-hero-home-carousel',
  templateUrl: './hero-home-carousel.component.html',
  styleUrls: ['./hero-home-carousel.component.scss']
})
export class HeroHomeCarouselComponent {
  // isMobile: boolean = true;
  isInnerCarouselShown: boolean = false;
  // isMobileCarouselShown: boolean = false;
  // isDesktopCarouselShown: boolean = false;

  baseWidth = 520; // original width in design
  baseHeight = 380; // original height in design
  designWidth = 1440; // design screen width
  designHeight = 896; // design screen height

  calculatedWidth: number = 0;
  calculatedHeight: number = 0;



  sliders: any = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];
  swiper: any = null;

  constructor(
    private SharedService: SharedService,
    private resizeService: ResizeService,
    private cdk: ChangeDetectorRef
  ) { }

  ngAfterViewInit(): void {
    this.resizeService.screenWidthChange$.subscribe(data => {
      this.calculateSize();

      // if (data.isChanged) {
      //   this.enableInnerCarousel();
      // }


    });
  }

  calculateSize() {
    // this.isMobile = this.resizeService.isMobile();
    // const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // const widthRatio = screenWidth / this.designWidth;
    const heightRatio = screenHeight / this.designHeight;

    // this.calculatedWidth = this.baseWidth * widthRatio;
    this.calculatedHeight = this.baseHeight * heightRatio;
    // console.log(this.calculatedHeight);

    this.cdk.detectChanges();
  }


  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        const swiperOptions: CustomSwiperOptions = {
          modules: [Navigation, Pagination, Autoplay, EffectFade, this.carouselEffectModule()],
          effect: 'carousel' as any, // Custom effect type
          carouselEffect: { opacityStep: 0.33, scaleStep: 0.2, sideSlides: 2 } as any,
          grabCursor: true,
          loop: true,
          loopAdditionalSlides: 1,
          slidesPerView: "auto",
          navigation: { nextEl: ".swiper-hero-button-next", prevEl: ".swiper-hero-button-prev" },
          // pagination: { el: ".swiper-hero-pagination" },
          autoplay: { delay: 3000, pauseOnMouseEnter: true },
        };
        new Swiper('.hero-swiper-container', swiperOptions);
      });
    }
  }

  carouselEffectModule() {
    // return function ({ swiper, on, extendParams }: any) {
    return ({ swiper, on, extendParams }: any) => {
      extendParams({ carouselEffect: { opacityStep: 0.33, scaleStep: 0.2, sideSlides: 2 } });

      on('beforeInit', () => {
        if (swiper.params.effect !== 'carousel') return;
        swiper.classNames.push(`${swiper.params.containerModifierClass}carousel`);
        const newParams = { watchSlidesProgress: true, centeredSlides: true };
        Object.assign(swiper.params, newParams);
        Object.assign(swiper.originalParams, newParams);
      });

      on('progress', () => {
        if (swiper.params.effect !== 'carousel') return;
        const { scaleStep, opacityStep } = swiper.params.carouselEffect;
        const sideSlides = Math.max(Math.min(swiper.params.carouselEffect.sideSlides, 3), 1);
        const zIndexMap: any = { 1: 2, 2: 1, 3: 0.2 };
        const translateMap: any = { 1: 50, 2: 50, 3: 67 };
        const totalSlides = swiper.slides.length;

        for (let i = 0; i < swiper.slides.length; i++) {
          const slide = swiper.slides[i];
          const progress = slide.progress;
          let scale = 1;

          if (Math.abs(progress) > 1) {
            scale = 0.3 * (Math.abs(progress) - 1) * zIndexMap[sideSlides] + 1;
          }

          const translate = progress * scale * translateMap[sideSlides] * (swiper.rtlTranslate ? -1 : 1) + '%';
          const opacity = 1 - Math.abs(progress) * opacityStep;
          const zIndex = totalSlides - Math.abs(Math.round(progress));

          const scaleVar = 1 - Math.abs(progress) * scaleStep;

          slide.style.transform = `translateX(${translate}) scale(${scaleVar < 0 ? 0 : scaleVar})`;
          slide.style.zIndex = zIndex;
          slide.style.opacity = opacity > sideSlides + 1 ? '0' : '1';

          const opacityElements = slide.querySelectorAll('.swiper-carousel-animate-opacity');
          opacityElements.forEach((element: any) => {
            element.style.opacity = opacity;
          });
        }
      });

      on('resize', () => {
        if (swiper.virtual && swiper.params.virtual.enabled) {
          requestAnimationFrame(() => {
            if (!swiper.destroyed) {
              swiper.updateSlides();
              swiper.updateProgress();
            }
          });
        }
      });

      on('setTransition', (s: any, duration: any) => {
        if (swiper.params.effect === 'carousel') {
          swiper.slides.forEach((slide: any) => {
            const opacityElements = slide.querySelectorAll('.swiper-carousel-animate-opacity');
            slide.style.transitionDuration = `${duration}ms`;
            opacityElements.forEach((element: any) => {
              element.style.transitionDuration = `${duration}ms`;
            });
          });
        }
      });

      on('init', () => {
        // console.log('done');
        this.isInnerCarouselShown = true;
        // this.enableInnerCarousel();
      });


    };
  }

  // enableInnerCarousel() {
  //   if (this.isMobile) {
  //     if (!this.isMobileCarouselShown) this.isMobileCarouselShown = true;
  //   } else {
  //     if (!this.isDesktopCarouselShown) this.isDesktopCarouselShown = true;
  //   }
  // }

  navigateTo(route: string) {
    this.SharedService.navigateTo(route);
  }

}
