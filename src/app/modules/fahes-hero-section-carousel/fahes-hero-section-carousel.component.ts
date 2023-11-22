import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
import { TranslationService } from 'src/app/i18n/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { MagicCursorService } from 'src/app/services/magic-cursor.service';
import { ResizeService } from 'src/app/services/resize.service';
import { PlaceholderImgService } from 'src/app/services/placeholder-img.service';
import { CarouselService } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { LoadAssetsService } from 'src/app/load-assets.service';

const mainSelector = "app-fahes-hero-section-carousel";


@Component({
  selector: 'app-fahes-hero-section-carousel',
  templateUrl: './fahes-hero-section-carousel.component.html',
  styleUrls: ['./fahes-hero-section-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FahesHeroSectionCarouselComponent {
  @ViewChild('owlCarousel', { static: true }) owlCarousel!: CarouselComponent;
  @Input() lang: string = 'en';
  @Input() bottomSection: any = [];
  @Input() selectedTabIndex: number = 0;
  @Output() tabChange: EventEmitter<any> = new EventEmitter();

  customOptions: OwlOptions = {
    smartSpeed: 1200,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    rtl: this.TranslationService.isRTL(),
    items: 1,
    dots: true,
    dotsData: true
  };

  @Input() slidesStore: any = null;

  constructor(
    private translate: TranslateService,
    private TranslationService: TranslationService,
    private magicCursorService: MagicCursorService,
    private resizeService: ResizeService,
    private placeholderImgService: PlaceholderImgService,
    private loadAssetsService: LoadAssetsService
  ) {
    this.loadAssetsService.loadCss('assets/css/carousel.css', 'carousel-default');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!(changes?.selectedTabIndex?.firstChange)) {
      this.owlCarousel.to(`hero-img-${changes?.selectedTabIndex?.currentValue + 1}`);
    }
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.resizeService.screenWidthChange$.subscribe(data => this.updateCarouselConfig(data));
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
  }

  onChange(event: any) {
    setTimeout(() => {
      const cIndex = this.getCurrentIndex();
      this.clickOnTab(cIndex);
    });

    if (typeof window !== 'undefined') {
      setTimeout(() => {
        let allSlidesVideosElements = document.querySelectorAll(`${mainSelector} .owl-item video`);
        allSlidesVideosElements.forEach((videoElement: any) => {
          videoElement.pause();
        });

        let activeSlideVideoElement: HTMLVideoElement | null = document.querySelector(`${mainSelector} .owl-item.active video`);
        if (activeSlideVideoElement) {
          activeSlideVideoElement.currentTime = 0;
          activeSlideVideoElement.play();
        }
      });
    }
  }

  clickOnTab(index: number) {
    this.tabChange.emit(index);
  }

  getCurrentIndex() {
    let tempIndex = 0;
    if (typeof window !== 'undefined') {
      const dots: any = document.querySelectorAll(`${mainSelector} .owl-dot`);
      for (let index = 0; index < dots.length; index++) {
        const dot: any = dots[index];
        if (dot.classList.contains('active')) {
          tempIndex = index;
        }
      }
    }
    return tempIndex;
  }

}