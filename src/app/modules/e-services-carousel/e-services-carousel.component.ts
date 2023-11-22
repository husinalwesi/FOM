import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
import { TranslationService } from 'src/app/i18n/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { ResizeService } from 'src/app/services/resize.service';
import { CarouselService } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { LoadAssetsService } from 'src/app/load-assets.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-e-services-carousel',
  templateUrl: './e-services-carousel.component.html',
  styleUrls: ['./e-services-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EServicesCarouselComponent {
  @ViewChild('owlCarousel', { static: true }) owlCarousel!: CarouselComponent;
  @Input() lang: string = 'en';
  customOptions: OwlOptions = {
    smartSpeed: 1200,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    rtl: this.TranslationService.isRTL(),
    dots: true,
    // dotsData: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 3,
        nav: true,
      },
      1280: {
        items: 4,
        nav: true,
      }
    },
    navText: ['', '']
  };

  @Input() slidesStore: any = null;

  constructor(
    private translate: TranslateService,
    private TranslationService: TranslationService,
    private resizeService: ResizeService,
    private loadAssetsService: LoadAssetsService,
    private sharedService: SharedService
  ) {
    // this.loadAssetsService.loadCss('assets/css/carousel.css', 'carousel-default');
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

  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }

}