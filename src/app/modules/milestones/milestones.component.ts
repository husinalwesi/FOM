import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
import { TranslationService } from 'src/app/i18n/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { ResizeService } from 'src/app/services/resize.service';
import { CarouselService } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { LoadAssetsService } from 'src/app/load-assets.service';

const mainSelector = "app-milestones";

@Component({
  selector: 'app-milestones',
  templateUrl: './milestones.component.html',
  styleUrls: ['./milestones.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MilestonesComponent {
  cSlide: number = 1;
  @ViewChild('owlCarousel', { static: true }) owlCarousel!: CarouselComponent;
  customOptions: OwlOptions = {
    smartSpeed: 1200,
    mouseDrag: false,
    touchDrag: false,
    rtl: this.TranslationService.isRTL(),
    dots: true,
    dotsData: true,
    margin: 24,
    responsive: {
      0: {
        items: 1,
        loop: true
      },
      768: {
        items: 1.2,
        loop: true
      },
      1280: {
        items: 1.4,
        loop: true
      }
    }
  };

  @Input() lang: string = 'en';
  @Input() slidesStore: any = [];

  constructor(
    private translate: TranslateService,
    private TranslationService: TranslationService,
    private resizeService: ResizeService,
    private loadAssetsService: LoadAssetsService
  ) {
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
  }

  moveToSlide(where: string) {
    let owlCarouselService = this.owlCarousel as any;
    let carouselService = owlCarouselService.carouselService as CarouselService;
    where === 'next' ? carouselService.next(false) : carouselService.prev(false);
  }

  onChange(event: any) {
    if (typeof window !== 'undefined') {
      const className = "second-active";
      setTimeout(() => {
        let allSlidesElements = document.querySelectorAll(`${mainSelector} .owl-item`);
        allSlidesElements.forEach((element: any) => {
          element.classList.remove(className);
        });
        // 
        let allActiveSlidesElements = document.querySelectorAll(`${mainSelector} .owl-item.active`);
        if (allActiveSlidesElements.length > 1) allActiveSlidesElements[1].classList.add(className);
        // 
        let dots: any = document.querySelectorAll(`${mainSelector} .owl-dots .owl-dot`);
        let tempIndex = 0;
        dots.forEach((dotElement: any, dotIndex: any) => {
          if (dotElement.classList.contains("active")) {
            tempIndex = dotIndex;
            return;
          }
        });
        this.cSlide = ++tempIndex;
      });
    }
  }

}