import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
import { TranslationService } from 'src/app/i18n/translation.service';
import { ResizeService } from 'src/app/services/resize.service';
import { CarouselService } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { LoadAssetsService } from 'src/app/load-assets.service';
import { SharedService } from 'src/app/services/shared.service';
import { ImageSourcePipe } from 'src/app/pipes/image-source.pipe';
import { GUID } from "src/app/const/guid";
const mainSelector = "app-hero-section-carousel";

@Component({
  selector: 'app-hero-section-carousel',
  templateUrl: './hero-section-carousel.component.html',
  styleUrls: ['./hero-section-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeroSectionCarouselComponent implements OnInit {
  @ViewChild('owlCarousel', { static: true }) owlCarousel!: CarouselComponent;
  // showVideo: boolean = true;
  @Input() lang: string = 'en';
  customOptions: OwlOptions = {
    smartSpeed: 1200,
    // loop: true,
    mouseDrag: false,
    touchDrag: false,
    rtl: this.TranslationService.isRTL(),
    items: 1,
    dots: true,
    dotsData: true
  };

  isMobile: boolean = false;
  EmptyImage:any = GUID.empty;
  @Input() slidesStore: any = null;

  heightMain: number = 0;

  @ViewChild('card') card!: ElementRef;

  constructor(
    private TranslationService: TranslationService,
    private resizeService: ResizeService,
    private loadAssetsService: LoadAssetsService,
    private imageSourcePipe: ImageSourcePipe,
    private sharedService: SharedService,
    private resizeServices: ResizeService
  ) {
    this.loadAssetsService.loadCss('assets/css/carousel.css', 'carousel-default');
  }

  ngOnInit(): void {
    this.updateCarouselConfigCalculate();
  }

  ngAfterViewInit(): void {
    this.resizeService.screenWidthChange$.subscribe(data => this.updateCarouselConfigCalculate());
    this.resizeService.screenWidthChange$.subscribe(data => this.updateCarouselConfig(data));
  }

  updateCarouselConfigCalculate() {
    if (typeof window !== 'undefined') {
      const desktopRatio: number = 1792 / 878;
      const mobileRatio: number = 375 / 596;

      this.isMobile = !this.resizeService.isDesktop();

      const detectRatio = this.isMobile ? mobileRatio : desktopRatio;
      const screenWidth = window.innerWidth;
      this.heightMain = screenWidth / detectRatio;
    }
  }

  initialized(event: any) {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        const dots = document.querySelectorAll(`${mainSelector} .owl-dot`);
        dots.forEach((dot: any) => {
          const child = dot.querySelector("span");
          dot.classList.add("button-wraper")
          dot.setAttribute('data-element-scale', '1.3');
          dot.setAttribute('data-element-inner-target', 'span');
          child.classList.add("button-wraper-inner");
        });
        // this.magicCursorService.initializeMagicCursor();
      });
    }
  }

  updateCarouselConfig(data: any) {
    if (!data.isChanged) return;
    // 
    let owlCarouselService = this.owlCarousel as any;
    let carouselService = owlCarouselService?.carouselService as CarouselService;
    if (carouselService) carouselService.onResize(data.width);
    setTimeout(() => {
      this.onChange({});
    }, 1);
  }

  // refreshVideos() {
  //   this.showVideo = false;
  //   setTimeout(() => {
  //     this.showVideo = true;
  //   });
  // }

  // onChange(event: any) {
  //   // this.refreshVideos();
  //   if (typeof window !== 'undefined') {
  //     setTimeout(() => {
  //       let allSlidesVideosElements = document.querySelectorAll(`${mainSelector} .owl-item video`);
  //       allSlidesVideosElements.forEach((videoElement: any) => {
  //         videoElement.pause();
  //       });

  //       let activeSlideVideoElement: HTMLVideoElement | null = document.querySelector(`${mainSelector} .owl-item.active video`);
  //       if (activeSlideVideoElement) {
  //         activeSlideVideoElement.currentTime = 0;
  //         activeSlideVideoElement.play();
  //       }
  //     });
  //   }
  // }
  onChange(event: any) {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        let allSlidesVideosElements = document.querySelectorAll(`${mainSelector} .owl-item video`);
        allSlidesVideosElements.forEach((videoElement: any) => {
          if (!videoElement.paused && !videoElement.ended) {
            videoElement.pause();
          }
        });

        setTimeout(() => {
          let activeSlideVideoElement: any = document.querySelector(`${mainSelector} .owl-item.active video`);
          if (activeSlideVideoElement) {
            activeSlideVideoElement.currentTime = 0;
            if (activeSlideVideoElement.readyState >= 2) {
              // Check if the video is ready to play (2 means enough data is loaded).
              activeSlideVideoElement.play();
            } else {
              // Video is not ready, add an event listener to play when it's ready.
              activeSlideVideoElement.addEventListener('canplay', () => {
                activeSlideVideoElement.play();
              });
            }
          }
        });
      });
    }
  }

  getImage(slide: any) {
    const desktopImage = this.sharedService.isValidImage(slide.image[this.lang]) || '';
    const mobileImage = this.sharedService.isValidImage(slide.mobileImage[this.lang]) || '';

    if (desktopImage || mobileImage) {
      const image = !this.resizeServices.isDesktop() ? this.imageSourcePipe.transform(mobileImage) || this.imageSourcePipe.transform(desktopImage) : this.imageSourcePipe.transform(desktopImage) || this.imageSourcePipe.transform(mobileImage);
      return `url('${image}')`;
    }
    return "";
  }

  getVideo(slide: any) {
    const desktopImage = this.sharedService.isValidImage(slide.videoDesktop[this.lang]) || '';
    const mobileImage = this.sharedService.isValidImage(slide.videoMobile[this.lang]) || '';

    if (desktopImage || mobileImage) {
      const image = !this.resizeServices.isDesktop() ? this.imageSourcePipe.transform(mobileImage) || this.imageSourcePipe.transform(desktopImage) : this.imageSourcePipe.transform(desktopImage) || this.imageSourcePipe.transform(mobileImage);
      return image;
    }
    return "";
  }

  getSlideType(slide: any) {
    return slide.media[this.lang][this.isMobile ? 'mobile' : 'desktop'].type;
  }

  getMedia(slide: any) {
    const slideType = this.getSlideType(slide);
    const src = this.imageSourcePipe.transform(slide.media[this.lang][this.isMobile ? 'mobile' : 'desktop'].src);
    return slideType === 'image' ? `url('${src}')` : src;
  }

}
