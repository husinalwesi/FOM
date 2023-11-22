import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
import { TranslationService } from 'src/app/i18n/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { ResizeService } from 'src/app/services/resize.service';
import { CarouselService } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { LoadAssetsService } from 'src/app/load-assets.service';
@Component({
  selector: 'app-our-values',
  templateUrl: './our-values.component.html',
  styleUrls: ['./our-values.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OurValuesComponent {
  @Output() toggleCard: EventEmitter<any> = new EventEmitter();
  @Input() lang: string = 'en';
  @Input() isClickable: boolean = false;
  @Input() title: string = '';
  iconColor: string = '#009933';
  @Input() detailes: any = {}
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
    // navText: ['&#8249', '&#8250;'],
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

  toggle(item: any) {
    if (this.isClickable) {
      for (let index = 0; index < this.detailes.length; index++) {
        if (this.detailes[index].id !== item.id) this.detailes[index].isSelected = false;
      }
      item.isSelected = !item.isSelected;
      this.toggleCard.emit(this.detailes);
    }
  }

}