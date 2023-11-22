import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
import { TranslationService } from 'src/app/i18n/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { ResizeService } from 'src/app/services/resize.service';
import { CarouselService } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { LoadAssetsService } from 'src/app/load-assets.service';

@Component({
  selector: 'app-our-mission',
  templateUrl: './our-mission.component.html',
  styleUrls: ['./our-mission.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OurMissionComponent {
  @Input() lang: string = 'en';
  @Input() data: any = null;
  @Input() secondBulletsList: any = null;
  @ViewChild('owlCarousel', { static: true }) owlCarousel!: CarouselComponent;

  constructor(
    private translate: TranslateService,
    private TranslationService: TranslationService,
    private resizeService: ResizeService,
    private loadAssetsService: LoadAssetsService
  ) {
    this.loadAssetsService.loadCss('assets/css/carousel.css', 'carousel-default');
  }
  customOptions: OwlOptions = {
    smartSpeed: 1200,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    freeDrag: true,
    rtl: this.TranslationService.isRTL(),
    dots: false,
    margin: 10,
    // dotsData: true,
    nav: true,
    items: 1,
    responsive: {
      0: {
        items: 1,
        dots: true,
        nav: true,
      },
      768: {
        items: 3,
        dots: true,
        nav: true,
      },
    },
    navText: ['', '']
  }
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
}
