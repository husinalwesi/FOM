import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { TranslationService } from 'src/app/i18n/translation.service';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-e-services',
  templateUrl: './e-services.component.html',
  styleUrls: ['./e-services.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EServicesComponent {
  @ViewChild('owlCarousel', { static: true }) owlCarousel!: CarouselComponent;
  selectedTab: string = "products-services"; //tenders
  @Input() whistleBlowingFileId: string = '';
  @Input() slidesStore: any = null;
  @Input() table: any = null;
  @Input() servicesIcons: any = null;
  @Input() lang: string = 'en';


  constructor(
    private TranslationService: TranslationService,
  ) { }

  customOptions: OwlOptions = {
    smartSpeed: 1200,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    freeDrag: true,
    rtl: this.TranslationService.isRTL(),
    dots: false,
    items: 1,
    margin: 10,
    stagePadding: 20,
    // dotsData: true,
    // responsive: {
    //   0: {
    //     items: 1,
    //   },
    //   768: {
    //     items: 3,
    //   },
    // },
    // navText: ['', '']
  };

  scroll(tab: string) {
    this.selectedTab = tab;
    // if (typeof window !== 'undefined') {
    //   let el = document.getElementById('eservices')
    //   el?.scrollIntoView({ block: "start", behavior: 'smooth' });
    // }

  }
}
