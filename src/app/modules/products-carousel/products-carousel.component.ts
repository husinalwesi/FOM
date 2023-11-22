import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
import { TranslationService } from 'src/app/i18n/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { ResizeService } from 'src/app/services/resize.service';
import { CarouselService } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { LoadAssetsService } from 'src/app/load-assets.service';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsCarouselComponent {
  @ViewChild('owlCarousel', { static: true }) owlCarousel!: CarouselComponent;
  @Input() lang: string = 'en';
  @Input() items: any = null;
  @Input() title: string = 'products categories'
  @Input() viewAllLink: string = '/'
  @Output() onClick: EventEmitter<any> = new EventEmitter();


  customOptions: OwlOptions = {
    // smartSpeed: 1200,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    dotsData: true,
    rtl: this.TranslationService.isRTL(),
    margin: 13,
    responsive: {
      0: {
        items: 1,
        dots: true,
        nav: true,
        loop: true
      },
      768: {
        items: 3,
        dots: true,
        nav: true,
        loop: true
      },
      1280: {
        items: 4,
        dots: true,
        nav: true,
        loop: true
      }
    },
    navText: ['&#8249', '&#8250;'],
  };
  showAllItems = false;

  // Function to toggle the showAllItems flag
  toggleShowAllItems() {
    this.showAllItems = !this.showAllItems;
  }
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

  onClickEmiter(index: number) {
    this.onClick.emit(index);
  }

}
