import { ChangeDetectorRef, Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';
import { ResizeService } from 'src/app/services/resize.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-blog-listing',
  templateUrl: './blog-listing.component.html',
  styleUrls: ['./blog-listing.component.scss']
})
export class BlogListingComponent {
  blogs: any = [1, 2, 3, 4, 5, 6];
  heightNews: number = 0;
  isMobile: boolean = false;

  constructor(
    private pageTransitionsService: PageTransitionsService,
    private metaTagsService: MetaTagsService,
    private headerService: HeaderService,

    private resizeService: ResizeService,
    private cdr: ChangeDetectorRef,

    private SharedService: SharedService
  ) {
    this.pageTransitionsService.HideLoad();
    this.headerService.useStickyHeader(true);

    this.metaTagsService.updateMetaTags({
      title: "Page | FOM",
      description: "Page | FOM",
      keywords: ["FOM 1", "FOM 2"]
    });
  }

  ngAfterViewInit(): void {
    this.resizeService.screenWidthChange$.subscribe(data => {
      this.newsRatio();
      this.cdr.detectChanges();  // This will trigger change detection manually
    });
  }

  newsRatio() {
    const desktopRatio: number = 242 / 286;
    const mobileRatio: number = 242 / 286;
    this.isMobile = this.resizeService.isMobile();
    const detectRatio = this.isMobile ? mobileRatio : desktopRatio;
    const mobileSectionEle: any = typeof window !== 'undefined' ? document.querySelector(".news-item") : null;
    if (!mobileSectionEle) return;
    const screenWidth = mobileSectionEle.offsetWidth;
    this.heightNews = screenWidth / detectRatio;
  }

  navigateTo(route: string) {
    this.SharedService.navigateTo(route);
  }

}
