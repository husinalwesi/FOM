import { Component, ViewChild } from '@angular/core';
import { CarouselServiceDetailsComponent } from 'src/app/modules/carousel-service-details/carousel-service-details.component';
import { HeaderService } from 'src/app/services/header.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';
import { SharedService } from 'src/app/services/shared.service';
import Swiper from 'swiper';
import { LoadAssetsService } from 'src/app/load-assets.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent {
  swiper: any = null;
  @ViewChild('carouselServiceDetailsComponent') carouselServiceDetailsComponent!: CarouselServiceDetailsComponent;
  services: any = [1, 2, 3, 4, 5, 6, 7];
  activeService: number = 0;

  constructor(
    private pageTransitionsService: PageTransitionsService,
    private headerService: HeaderService,
    private metaTagsService: MetaTagsService,
    private SharedService: SharedService,
    private loadAssetsService: LoadAssetsService,
  ) {
    this.loadAssetsService.loadCss('assets/css/swiper-bundle.min.css', 'carousel-default');
    this.pageTransitionsService.HideLoad();
    this.headerService.useStickyHeader(false);

    this.metaTagsService.updateMetaTags({
      title: "Page | FOM",
      description: "Page | FOM",
      keywords: ["FOM 1", "FOM 2"]
    });
  }

  navigateTo(route: string) {
    this.SharedService.navigateTo(route);
  }

  ngOnInit(): void {
    this.initializeCarousel();
  }

  serviceChangeSlide(slideNo: number) {
    this.activeService = slideNo;
    this.swiper.slideTo(slideNo);
  }

  serviceChangeSlideBTN(slideNo: number) {
    this.activeService = slideNo;
    this.carouselServiceDetailsComponent.setSlide(slideNo, true);
  }


  initializeCarousel() {
    if (typeof window !== 'undefined') {
      this.swiper = new Swiper('.service-details-items-swiper-container', {
        updateOnWindowResize: true,
        slidesPerView: 4,
        spaceBetween: 16,
      });

      this.swiper.on('slideChange', (data: any) => {
        let slideNo = data.activeIndex;
        this.activeService = slideNo;
        this.carouselServiceDetailsComponent.setSlide(slideNo);
      });

    }
  }

}
