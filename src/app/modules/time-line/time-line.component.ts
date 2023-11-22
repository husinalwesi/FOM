import { Component, Input, SimpleChanges } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent {
  @Input() lang: string = "en";
  @Input() selectedTab: string = "";
  timeline: any = [];
  isLoadingEnabled: boolean = true;
  pageURL: string | null = ""
  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private router: Router,
    private route: ActivatedRoute,
    private multimediaService: MultimediaService,
  ) {
    this.pageURL = this.route.snapshot.paramMap.get('pageURL');

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.pageURL = this.route.snapshot.paramMap.get('pageURL');
        this.getData();
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    let cValue = changes['selectedTab']?.currentValue;
    if (cValue) this.getData();
  }

  getData() {
    if (this.selectedTab === 'serviceDetails') {
      this.isLoadingEnabled = true;
      this.multimediaService.getServiceDetail({ pageURL: '/fahes/' + this.pageURL }).subscribe((response) => {
        this.timeline = (response.fahesServicesSteps || []).map((item: any) => {
          return {
            title: {
              en: item.titleEN,
              ar: item.titleAR
            },
            desc: {
              en: item.descriptionEN,
              ar: item.descriptionAR
            },
            img: item.imageID
          }
        });
        this.isLoadingEnabled = false;
      });
    } else {
      this.isLoadingEnabled = true;
      this.multimediaService.getWoqodeTimeline({}, this.selectedTab).subscribe((response) => {
        this.timeline = response.map((item: any) => {
          return {
            title: {
              en: item.titleEN,
              ar: item.titleAR
            },
            desc: {
              en: item.descriptionEN,
              ar: item.descriptionAR
            },
            img: item.icon
          }
        });
        this.isLoadingEnabled = false;
      });
    }
  }

}
