import { Component, ViewChild, ViewEncapsulation, HostListener } from '@angular/core';
import { LoadAssetsService } from 'src/app/load-assets.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-partners',
  templateUrl: './home-partners.component.html',
  styleUrls: ['./home-partners.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePartnersComponent {
  carousel: any = [1, 2, 3, 4, 1, 2, 3, 4];
  @ViewChild('carouselParentEle') carouselParentEle!: any;
  customOptions: OwlOptions | undefined;

  constructor(
    private loadAssetsService: LoadAssetsService,
    private TranslationService: TranslationService,
  ) {
    this.updateCarouselOptions(window.innerWidth);
    this.loadAssetsService.loadCss('assets/css/carousel.css', 'carousel-default');
  }

  updateCarouselOptions(innerWidth: number) {

    setTimeout(() => {
      const eleWidth = 229;
      const eleMargin = 0;//11
      const totalEleWidth = eleWidth + eleMargin;
      // 
      const carouselEle = this.carouselParentEle?.nativeElement.offsetWidth || 0;
      const howManyEle = parseInt((carouselEle / totalEleWidth).toString());

      this.customOptions = {
        smartSpeed: 1200,
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        freeDrag: true,
        rtl: this.TranslationService.isRTL(),
        // dots: false,
        margin: 11,
        // dotsData: true,
        // nav: true,
        // items: 1,
        items: howManyEle,
        dots: true,
        nav: true,
        navText: ['', '']
      }
    });

  }

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.updateCarouselOptions(event.target.innerWidth);
  }

}
