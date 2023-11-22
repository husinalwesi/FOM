import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';

@Component({
  selector: 'app-kenar-map',
  templateUrl: './kenar-map.component.html',
  styleUrls: ['./kenar-map.component.scss']
})
export class KenarMapComponent {
  isBrowser: boolean = false;
  searchByURL: any = null;
  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.setSearch();

    this.metaTagsService.updateMetaTags({
      title: "Kenar Map Page | Woqod",
      description: "Kenar Map Page | Woqod",
      keywords: ["Woqod 1", "Woqod 2"],
      img: '',// Meta Image By Ammar
    });
  }

  ngOnInit(): void {

  }

  setSearch() {
    this.searchByURL = {
      station: this.route.snapshot.queryParams.station || '',
      stationName: this.route.snapshot.queryParams.stationName || '',
      service: this.route.snapshot.queryParams.service || ''
    };
  }

}
