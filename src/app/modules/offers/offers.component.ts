import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
import { TranslationService } from 'src/app/i18n/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { ResizeService } from 'src/app/services/resize.service';
import { CarouselService } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { LoadAssetsService } from 'src/app/load-assets.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OffersComponent {
  @ViewChild('owlCarousel', { static: true }) owlCarousel!: CarouselComponent;
  customOptions: OwlOptions = {
    smartSpeed: 1200,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    rtl: this.TranslationService.isRTL(),
    dots: true,
    responsive: {
      0: {
        items: 1.2,
        margin: 20,
      },
      1024: {
        items: 2.2,
        margin: 40,
      }
    }
  };
  @Input() promotions: any = [];

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

}