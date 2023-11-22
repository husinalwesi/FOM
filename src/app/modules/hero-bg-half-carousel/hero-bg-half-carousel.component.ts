import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
import { TranslationService } from 'src/app/i18n/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { ResizeService } from 'src/app/services/resize.service';
import { CarouselService } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { LoadAssetsService } from 'src/app/load-assets.service';
import { ImageSourcePipe } from 'src/app/pipes/image-source.pipe';
import { SharedService } from 'src/app/services/shared.service';

const mainSelector = "app-hero-bg-half-carousel";

@Component({
  selector: 'app-hero-bg-half-carousel',
  templateUrl: './hero-bg-half-carousel.component.html',
  styleUrls: ['./hero-bg-half-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeroBgHalfCarouselComponent {
  @ViewChild('owlCarousel', { static: true }) owlCarousel!: CarouselComponent;
  lang: string = "en";
  @Input() height: number = 0;
  @Input() fullView: boolean = false;
  customOptions: OwlOptions = {
    // autoplay: true,
    smartSpeed: 1200,
    mouseDrag: true,
    touchDrag: true,
    rtl: this.TranslationService.isRTL(),
    items: 1,
    dots: true
  };
  @Input() data: any = [];

  constructor(
    private translate: TranslateService,
    private TranslationService: TranslationService,
    private resizeService: ResizeService,
    private loadAssetsService: LoadAssetsService,
    private imageSourcePipe: ImageSourcePipe,
    private sharedService: SharedService,
    private resizeServices: ResizeService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
    this.loadAssetsService.loadCss('assets/css/carousel.css', 'carousel-default');
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.resizeService.screenWidthChange$.subscribe(data => this.updateCarouselConfig(data));
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

  onChange(event: any) {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        let allSlidesVideosElements = document.querySelectorAll(`${mainSelector} .owl-item video`);
        allSlidesVideosElements.forEach((videoElement: any) => {
          if (!videoElement.paused && !videoElement.ended) {
            videoElement.pause();
          }
        });
        // console.log(allSlidesVideosElements);

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
    const desktopImage = this.sharedService.isValidImage(slide.image) || '';
    const mobileImage = this.sharedService.isValidImage(slide.mobileImage) || '';

    if (desktopImage || mobileImage) {
      const image = this.resizeServices.isMobile() ? this.imageSourcePipe.transform(mobileImage) || this.imageSourcePipe.transform(desktopImage) : this.imageSourcePipe.transform(desktopImage) || this.imageSourcePipe.transform(mobileImage);
      return `url('${image}')`;
    }
    return "";
  }
  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }
}