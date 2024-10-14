import { ChangeDetectorRef, Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';
import { ResizeService } from 'src/app/services/resize.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-provider-detailed',
  templateUrl: './provider-detailed.component.html',
  styleUrls: ['./provider-detailed.component.scss']
})
export class ProviderDetailedComponent {
  isInnerPhotoClicked: boolean = false;
  mapModalEnabled: boolean = false;
  reviewModalEnabled: boolean = false;
  writePostModalEnabled: boolean = false;
  hoursModalEnabled: boolean = false;

  isMobile: boolean = false;
  isReview: boolean = false;
  writePermission: boolean = true;
  // posts: any = [];
  posts: any = [1, 2];
  differenceSize: number = 0;

  constructor(
    private pageTransitionsService: PageTransitionsService,
    private headerService: HeaderService,
    private metaTagsService: MetaTagsService,
    private resizeService: ResizeService,
    private cdk: ChangeDetectorRef,
    private SharedService: SharedService
  ) {
    this.pageTransitionsService.HideLoad();
    this.headerService.useStickyHeader();

    this.metaTagsService.updateMetaTags({
      title: "Page | FOM",
      description: "Page | FOM",
      keywords: ["FOM 1", "FOM 2"]
    });
  }

  ngAfterViewInit(): void {
    this.resizeService.screenWidthChange$.subscribe(data => {
      this.calculateSize();
    });
  }

  calculateSize() {
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    this.isMobile = screenWidth < 768;

    const imgContainer: any = typeof window !== 'undefined' ? document.querySelector("#img-container") : null;

    const circleImgContainer: any = typeof window !== 'undefined' ? document.querySelector("#circle-img-container") : null;
    const circleImgContainerImage: any = typeof window !== 'undefined' ? document.querySelector("#circle-img-container img") : null;

    if (!imgContainer || !circleImgContainer || !circleImgContainerImage) return;
    // 
    const halfImgCircle = circleImgContainerImage.offsetWidth / 4;
    this.differenceSize = (imgContainer.offsetLeft - (circleImgContainer.offsetLeft + circleImgContainerImage.offsetWidth)) + halfImgCircle;

    this.cdk.detectChanges();
  }

  ngOnInit(): void {
  }

  navigateTo(route: string) {
    this.SharedService.navigateTo(route);
  }

}
