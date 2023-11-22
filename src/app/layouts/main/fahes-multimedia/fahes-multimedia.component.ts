import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/i18n/translation.service';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-fahes-multimedia',
  templateUrl: './fahes-multimedia.component.html',
  styleUrls: ['./fahes-multimedia.component.scss']
})
export class FahesMultimediaComponent {
  data: any = [];
  isModalEnabled: boolean = false;
  isModalEnabled2: boolean = false;
  isModalEnabled3: boolean = false;
  selectedImage: any = null;
  selectedVideo: any = null;
  lang: string = "en";
  search: string = '';
  filterDDL: any = {
    selected: {
      key: 'photo',
      title: {
        en: 'MEDIA_TYPES.IMAGES',
        ar: 'MEDIA_TYPES.IMAGES'
      }
    },
    placeholder: 'FAHES_MEDIA_CENTER.FILTER',
    list: [
      {
        key: 'photo',
        title: {
          en: 'MEDIA_TYPES.IMAGES',
          ar: 'MEDIA_TYPES.IMAGES'
        }
      },
      {
        key: 'gallery',
        title: {
          en: 'MEDIA_TYPES.GALLERIES',
          ar: 'MEDIA_TYPES.GALLERIES'
        }
      },
      {
        key: 'video',
        title: {
          en: 'MEDIA_TYPES.VIDEOS',
          ar: 'MEDIA_TYPES.VIDEOS'
        }
      }
    ]
  };

  multimedia: any = {
    pagination: {
      pageSize: 6,
      pageIndex: 1,
      totalCount: 0
    },
    originalData: [],
    data: []
  };
  isInfiniteScrollEnabled: boolean = false;
  isLoadingEnabled: boolean = true;
  isThereMoreData: boolean = false;

  constructor(
    private translate: TranslateService,
    private translationService: TranslationService,
    private multimediaService: MultimediaService,
    private scrollService: ScrollService,
  ) {
    this.lang = this.translationService.getSelectedLanguage();
  }

  ngOnInit() {
    this.getMultimediaByType();
  }

  getMultimediaByType() {
    this.isLoadingEnabled = true;
    let payload = {
      pageSize: this.multimedia.pagination.pageSize,
      pageNumber: this.multimedia.pagination.pageIndex,
      searchTerm: this.search,
      orderBy: 'ModifiedOn DESC'
    };

    this.multimediaService.getFahesMultimediaByType(payload, this.filterDDL.selected.key).subscribe((response) => {
      this.multimedia.pagination.totalCount = response.totalCount;
      this.isThereMoreData = this.multimedia.pagination.pageSize * this.multimedia.pagination.pageIndex < response.totalCount;

      this.multimedia.originalData = [...this.multimedia.originalData, ...(response.pageItems || []).map((item: any) => {
        return {
          img: item.imageFileId || item.thumbnailID || item.imageFileId,
          video: item.fahesVideosID,
          // video: '',
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
      this.multimedia.data = this.multimedia.originalData;
      this.isLoadingEnabled = false;
    });
  }

  filterChange(option: any) {
    this.filterDDL.selected = option;
    this.multimedia.originalData = [];
    this.multimedia.data = [];
    this.multimedia.pagination.pageIndex = 1;
    this.multimedia.pagination.totalCount = 0;
    this.search = '';
    this.filter();
  }

  filter() {
    this.isInfiniteScrollEnabled = false;
    this.isLoadingEnabled = true;
    this.isThereMoreData = false;
    this.getMultimediaByType();
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
    this.multimedia.pagination.pageIndex++;
    this.getMultimediaByType();
  }

  fireModal(item: any, index: any) {
    if (this.filterDDL.selected.key === 'photo') this.openImageModal(item);
    if (this.filterDDL.selected.key === 'gallery') this.openGalleryModal(index);
    if (this.filterDDL.selected.key === 'video') this.openVideoModal(item);
  }

  openImageModal(item: any) {
    this.selectedImage = item;
    this.isModalEnabled = true;
  }

  openVideoModal(item: any) {
    this.selectedVideo = item;
    this.isModalEnabled2 = true;
  }

  openGalleryModal(index: any) {
    this.data = this.reorderArrayFromIndex(this.multimedia.data, index).map((gallery: any) => {
      return {
        image: gallery.img,
        video: null,
        title: gallery.title,
        description: gallery.desc,
      }
    });
    this.isModalEnabled3 = true;
  }


  reorderArrayFromIndex(arr: any, index: number) {
    // if (index >= arr.length || index < 0) {
    //   throw new Error("Invalid index");
    // }
    const part1 = arr.slice(index);
    const part2 = arr.slice(0, index);
    const reorderedArray = part1.concat(part2);
    return reorderedArray;
  }


}
