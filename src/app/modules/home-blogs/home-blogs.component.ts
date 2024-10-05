import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ResizeService } from 'src/app/services/resize.service';
import { RouteLocalizationPipe } from "src/app/pipes/route-localization.pipe";
import { PageTransitionsService } from 'src/app/services/page-transitions.service';

@Component({
  selector: 'app-home-blogs',
  templateUrl: './home-blogs.component.html',
  styleUrls: ['./home-blogs.component.scss'],
  providers: [RouteLocalizationPipe]
})
export class HomeBlogsComponent {
  news: any = [1, 2, 3];
  heightNews: number = 0;
  isMobile: boolean = false;

  constructor(
    private resizeService: ResizeService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private RouteLocalizationPipe: RouteLocalizationPipe,
    private pageTransitionsService: PageTransitionsService,
    private ngZone: NgZone
  ) { }

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
    const mobileSectionEle: any = document.querySelector(".news-item");
    if (!mobileSectionEle) return;
    const screenWidth = mobileSectionEle.offsetWidth;
    this.heightNews = screenWidth / detectRatio;
  }

  navigate() {
    this.pageTransitionsService.showPageTransition(() => {
      this.ngZone.run(() => {
        this.router.navigateByUrl(this.RouteLocalizationPipe.transform(`/blogs`));
      });
    });
  }

}
