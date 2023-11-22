import { Component, Input, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/i18n/translation.service';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { ResizeService } from 'src/app/services/resize.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-videos-multimedia',
  templateUrl: './videos-multimedia.component.html',
  styleUrls: ['./videos-multimedia.component.scss']
})
export class VideosMultimediaComponent {
  isInfiniteScrollEnabled: boolean = false;
  isLoadingEnabled: boolean = true;
  isThereMoreData: boolean = false;
  isMobile: boolean = false;
  height: number = 0;
  @Input() keyword: string = "";
  @Input() mediaType: string = "";
  lang: string = "en";
  selectedVideo: any = null;
  videos: any = {
    pagination: {
      pageSize: 6,
      pageIndex: 1,
      totalCount: 0
    },
    originalData: [],
    data: []
  };
  isModalEnabled: boolean = false;

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
      this.videos.data = [];
      this.videos.originalData = [];
      this.isInfiniteScrollEnabled = false;
      this.getMultimediaVideos();
    }
  }

  getMultimediaVideos() {
    this.isLoadingEnabled = true;
    let payload = {
      pageSize: this.videos.pagination.pageSize,
      pageNumber: this.videos.pagination.pageIndex,
      orderBy: 'ModifiedOn DESC'
    };

    if (this.keyword) Object.assign(payload, { searchTerm: this.keyword });
    // TO DO.. Add mediaType

    this.multimediaService.getMultimediaVideos(payload).subscribe((response) => {
      this.videos.pagination.totalCount = response.totalCount;
      this.isThereMoreData = this.videos.pagination.pageSize * this.videos.pagination.pageIndex < response.totalCount;

      this.videos.originalData = [...(response.pageItems || []).map((item: any) => {
        return {
          img: item.thumbnailID,
          video: item.empedCode ? this.sanitizer.bypassSecurityTrustHtml(item.empedCode) : null,
          // video: '',
          title: {
            en: item.titleEN,
            ar: item.titleAR
          },
          desc: {
            en: item.descriptionEN,
            ar: item.descriptionAR
          },
          // date: item.createdOn ? new Date(item.createdOn) : null
        }
      })];

      this.splitLevels();
      this.isLoadingEnabled = false;
      setTimeout(() => {
        this.updateCarouselConfig();
      });
    });
  }

  splitLevels() {
    const innerArraySize = 3;
    const resultArray = [];
    for (let i = 0; i < this.videos.originalData.length; i += innerArraySize) {
      const innerArray = this.videos.originalData.slice(i, i + innerArraySize);
      resultArray.push(innerArray);
    }
    this.videos.data = resultArray;
  }

  openModal(video: any) {
    this.isModalEnabled = true;
    this.selectedVideo = video;
  }

  closeModal() {
    this.isModalEnabled = false;
    this.selectedVideo = null;
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
    this.videos.pagination.pageIndex++;
    this.getMultimediaVideos();
  }

  changePage(pageNo: number) {
    this.videos.pagination.pageIndex = pageNo;
    this.getMultimediaVideos();
  }


  ngAfterViewInit(): void {
    this.resizeService.screenWidthChange$.subscribe(data => this.updateCarouselConfig());
  }

  updateCarouselConfig() {
    if (typeof window !== 'undefined') {
      const videoItems = document.querySelectorAll(".videoItem");
      for (let index = 0; index < videoItems.length; index++) {
        const item: any = videoItems[index];
        if (!item) return;
        const ratio: number = 440 / 270;
        const height = item.offsetWidth / ratio;
        item.style.height = `${height}px`;
        item.querySelector("img").style.height = `${height}px`;
      }
    }
  }

}
