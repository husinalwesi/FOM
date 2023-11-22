import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
import { TranslationService } from 'src/app/i18n/translation.service';
import { TranslateService } from '@ngx-translate/core';
import { ResizeService } from 'src/app/services/resize.service';
import { CarouselService } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { LoadAssetsService } from 'src/app/load-assets.service';

const mainSelector = "app-galleries-modal";

@Component({
  selector: 'app-galleries-modal',
  templateUrl: './galleries-modal.component.html',
  styleUrls: ['./galleries-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GalleriesModalComponent {
  @ViewChild('owlCarousel', { static: true }) owlCarousel!: CarouselComponent;
  lang: string = "en";
  showVideo: boolean = true;
  customOptions: OwlOptions = {
    smartSpeed: 1200,
    loop: true,
    mouseDrag: false,
    autoHeight: true,
    touchDrag: false,
    rtl: this.TranslationService.isRTL(),
    items: 1,
    dots: true,
    nav: true,
    navText: ['', '']
  };
  @Input() data: any = [];

  constructor(
    private translate: TranslateService,
    private TranslationService: TranslationService,
    private resizeService: ResizeService,
    private loadAssetsService: LoadAssetsService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
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

  refreshVideos() {
    this.showVideo = false;
    setTimeout(() => {
      this.showVideo = true;
    });
  }

  onChange(event: any) {
    this.refreshVideos();
    // if (typeof window !== 'undefined') {
    // setTimeout(() => {

    // for (let index = 0; index < this.data.length; index++) {

    //   if(this.data[index].video){

    //     this.data[index].video

    //   }

    // }
    // let iframes = document.querySelectorAll(`${mainSelector} .owl-item iframe`);
    // allSlidesVideosElements.forEach((videoElement: any) => {
    //   videoElement.pause();
    // });
    // console.log(iframes);

    // Array.prototype.forEach.call(iframes, iframe => {
    //   iframe.contentWindow.postMessage(JSON.stringify({
    //     event: 'command',
    //     func: 'stopVideo'
    //   }), '*');
    // });



    // let activeSlideVideoElement: HTMLVideoElement | null = document.querySelector(`${mainSelector} .owl-item.active video`);
    // if (activeSlideVideoElement) {
    //   activeSlideVideoElement.currentTime = 0;
    //   activeSlideVideoElement.play();
    // }
    // });
    // }
  }


}