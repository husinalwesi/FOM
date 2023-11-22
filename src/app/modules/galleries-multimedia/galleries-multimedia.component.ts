import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/i18n/translation.service';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { ResizeService } from 'src/app/services/resize.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-galleries-multimedia',
  templateUrl: './galleries-multimedia.component.html',
  styleUrls: ['./galleries-multimedia.component.scss']
})
export class GalleriesMultimediaComponent {
  isInfiniteScrollEnabled: boolean = false;
  isLoadingEnabled: boolean = true;
  isThereMoreData: boolean = false;
  @Input() keyword: string = "";
  @Input() mediaType: string = "";
  isMobile: boolean = false;
  height: number = 0;
  lang: string = "en";
  galleries: any = {
    pagination: {
      pageSize: 8,
      pageIndex: 1,
      totalCount: 0
    },
    data: []
  };
  isModalEnabled: boolean = false;

  data: any = [];
  @ViewChild('card') card!: ElementRef;

  constructor(
    private translate: TranslateService,
    private translationService: TranslationService,
    private multimediaService: MultimediaService,
    private scrollService: ScrollService,
    private sanitizer: DomSanitizer,
    private resizeService: ResizeService
  ) {
    this.lang = this.translationService.getSelectedLanguage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    let keyword = changes['keyword'];
    let mediaType = changes['mediaType'];
    if (keyword || mediaType) {
      this.galleries.data = [];
      this.isInfiniteScrollEnabled = false;
      this.getGalleriesListing();
    }
  }

  getGalleriesListing() {
    this.isLoadingEnabled = true;
    let payload = {
      pageSize: this.galleries.pagination.pageSize,
      pageNumber: this.galleries.pagination.pageIndex,
      orderBy: 'ModifiedOn DESC'
    };

    if (this.keyword) Object.assign(payload, { searchTerm: this.keyword });
    // TO DO.. Add mediaType


    this.multimediaService.getGalleriesListing(payload).subscribe((response) => {
      this.galleries.pagination.totalCount = response.totalCount;
      this.isThereMoreData = this.galleries.pagination.pageSize * this.galleries.pagination.pageIndex < response.totalCount;
      this.galleries.data = [...(response.pageItems || []).map((item: any) => {
        return {
          img: item.thumbnailID,
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          desc: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          videosList: item.videosList,
          imagesList: item.imagesList
          // date: '13 2023'
        }
      })];
      this.isLoadingEnabled = false;
      setTimeout(() => {
        this.updateCarouselConfig();
      });
    });
  }

  openModal(data: any, index: number) {
    this.isModalEnabled = true;

    let videos: any = (data?.videosList || []).map((item: any) => {
      return {
        image: null,
        video: item.empedCode ? this.sanitizer.bypassSecurityTrustHtml(item.empedCode) : null,
        title: {
          en: item.titleEN,
          ar: item.titleAR
        },
        description: {
          en: item.descriptionEN,
          ar: item.descriptionAR
        },
      }
    }) || [];

    let photos: any = (data?.imagesList || []).map((item: any) => {
      return {
        image: item.imageFileId,
        video: null,
        title: {
          en: item.titleEN,
          ar: item.titleAR
        },
        description: {
          en: item.descriptionEN,
          ar: item.descriptionAR
        },
      }
    }) || [];

    this.data = [...videos, ...photos];



  }

  reorderArrayFromIndex(arr: any, index: number) {
    const part1 = arr.slice(index);
    const part2 = arr.slice(0, index);
    const reorderedArray = part1.concat(part2);
    return reorderedArray;
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
    this.galleries.pagination.pageIndex++;
    this.getGalleriesListing();
  }

  changePage(pageNo: number) {
    this.galleries.pagination.pageIndex = pageNo;
    this.getGalleriesListing();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.resizeService.screenWidthChange$.subscribe(data => this.updateCarouselConfig());
  }

  updateCarouselConfig() {
    if (!this.card?.nativeElement) return;
    if (typeof window !== 'undefined') {
      // const desktopRatio: number = 1920 / 544;
      // const mobileRatio: number = 375 / 272;
      // this.isMobile = this.resizeService.isMobile();
      const ratio: number = 440 / 270;
      this.height = this.card.nativeElement.offsetWidth / ratio;
    }
  }

}
