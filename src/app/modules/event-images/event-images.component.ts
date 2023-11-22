import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/i18n/translation.service';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { ResizeService } from 'src/app/services/resize.service';
import { ScrollService } from 'src/app/services/scroll.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-event-images',
  templateUrl: './event-images.component.html',
  styleUrls: ['./event-images.component.scss']
})
export class EventImagesComponent {
  isInfiniteScrollEnabled: boolean = false;
  isLoadingEnabled: boolean = true;
  isThereMoreData: boolean = false;
  isMobile: boolean = false;
  height: number = 0;
  heightMain: number = 0;
  @Input() keyword: string = "";
  @Input() mediaType: string = "";
  lang: string = "en";
  selectedImage: any = null;
  images: any = {
    pagination: {
      pageSize: 6,
      pageIndex: 1,
      totalCount: 0
    },
    data: []
  };
  isModalEnabled: boolean = false;

  @ViewChild('card') card!: ElementRef;

  constructor(
    private translate: TranslateService,
    private translationService: TranslationService,
    private multimediaService: MultimediaService,
    private scrollService: ScrollService,
    private sharedService: SharedService,
    private resizeService: ResizeService
  ) {
    this.lang = this.translationService.getSelectedLanguage();
  }

  ngOnInit(): void {
    this.updateCarouselConfig();
  }

  ngAfterViewInit(): void {
    this.resizeService.screenWidthChange$.subscribe(data => this.updateCarouselConfig());
  }

  updateCarouselConfig() {
    if (typeof window !== 'undefined') {
      // max 1260


      if (this.card?.nativeElement) {
        const ratio: number = 440 / 270;
        this.heightMain = this.card.nativeElement.offsetWidth / ratio;
      }


      const desktopRatio: number = 1920 / 544;
      const mobileRatio: number = 375 / 272;
      this.isMobile = this.resizeService.isMobile();
      const detectRatio = this.isMobile ? mobileRatio : desktopRatio;
      const screenWidth = window.innerWidth > 1260 ? 1260 : window.innerWidth;
      this.height = screenWidth / detectRatio;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    let keyword = changes['keyword'];
    let mediaType = changes['mediaType'];
    if (keyword || mediaType) {
      this.images.data = [];
      this.isInfiniteScrollEnabled = false;
      this.getMultimediaImages();
    }
  }

  getMultimediaImages() {
    this.isLoadingEnabled = true;
    let payload = {
      pageSize: this.images.pagination.pageSize,
      pageNumber: this.images.pagination.pageIndex,
      orderBy: 'ModifiedOn DESC'
    };

    if (this.keyword) Object.assign(payload, { searchTerm: this.keyword });
    // TO DO.. Add mediaType

    this.multimediaService.getMultimediaImages(payload).subscribe((response) => {
      this.images.pagination.totalCount = response.totalCount;
      this.isThereMoreData = this.images.pagination.pageSize * this.images.pagination.pageIndex < response.totalCount;
      this.images.data = [...(response.pageItems || []).map((item: any) => {
        return {
          // img: item.imageFileId,
          img: this.sharedService.isValidImage(item?.productionAreaImageID) || this.sharedService.isValidImage(item?.imageFileId) || this.sharedService.isValidImage(item?.mobileImageID),
          imgDesktop: this.sharedService.isValidImage(item?.imageFileId) || this.sharedService.isValidImage(item?.mobileImageID),
          imgMobile: this.sharedService.isValidImage(item?.mobileImageID) || this.sharedService.isValidImage(item?.imageFileId),

          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          desc: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          // date: '13 2023'
        }
      })];
      this.isLoadingEnabled = false;
      setTimeout(() => {
        this.updateCarouselConfig();
      });
    });
  }

  openModal(image: any) {
    this.isModalEnabled = true;
    this.selectedImage = image;
  }

  loadMore() {
    this.isInfiniteScrollEnabled = true;
    if (typeof window !== 'undefined') {
      this.scrollService.scrollChange$.subscribe(data => {
        if (this.isThereMoreData && !this.isLoadingEnabled) {
          const footer: any = document.querySelector('footer');
          const footerPosition = footer.getBoundingClientRect();
          if (footerPosition.top <= window.innerHeight) this.nextPage();
        }
      });
    }
  }

  nextPage() {
    this.images.pagination.pageIndex++;
    this.getMultimediaImages();
  }

  changePage(pageNo: number) {
    this.images.pagination.pageIndex = pageNo;
    this.getMultimediaImages();
  }


}
