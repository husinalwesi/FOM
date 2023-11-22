import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { Location } from '@angular/common';

@Component({
  selector: 'app-filter-w-tabs-multimedia',
  templateUrl: './filter-w-tabs-multimedia.component.html',
  styleUrls: ['./filter-w-tabs-multimedia.component.scss']
})
export class FilterWTabsMultimediaComponent {
  @Input() lang: string = 'en';
  mediaTypes: any = {
    value: '',
    data: [
      {
        key: 'Videos',
        title: 'MEDIA_TYPES.VIDEOS'
      },
      {
        key: 'Galleries',
        title: 'MEDIA_TYPES.GALLERIES'
      },
      {
        key: 'Images',
        title: 'MEDIA_TYPES.IMAGES'
      },
    ]
  };
  keyword: string = "";
  @Input() tabs: any = [];


  @Output() filterSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private routeLocalizationPipe: RouteLocalizationPipe,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.setMediaTypeOption();
  }

  setMediaTypeOption() {
    let currentPage = this.getMediaTypeOption();
    this.mediaTypes.value = this.capitalizeFirstLetter(currentPage);
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  onSubmit(form: any) {
    let currentPage = this.getMediaTypeOption();
    if (this.mediaTypes.value.toLowerCase() === currentPage) {
      this.filterSubmit.emit({
        mediaType: '',
        // mediaType: this.mediaTypes.value,
        keyword: this.keyword
      });
    } else {
      this.router.navigateByUrl(this.routeLocalizationPipe.transform(`/media-center/multimedia/${this.mediaTypes.value.toLowerCase()}${this.keyword ? `?q=${this.keyword}` : ''}`));
    }
  }

  getMediaTypeOption() {
    let pathArr = this.location.path().split("/");
    return pathArr[pathArr.length - 1].toLowerCase();
  }

}
