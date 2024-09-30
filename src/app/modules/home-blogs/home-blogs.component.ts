import { ChangeDetectorRef, Component } from '@angular/core';
import { ResizeService } from 'src/app/services/resize.service';

@Component({
  selector: 'app-home-blogs',
  templateUrl: './home-blogs.component.html',
  styleUrls: ['./home-blogs.component.scss']
})
export class HomeBlogsComponent {
  news: any = [1, 2, 3];
  heightNews: number = 0;
  isMobile: boolean = false;

  constructor(
    private resizeService: ResizeService,
    private cdr: ChangeDetectorRef
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
    const screenWidth = mobileSectionEle.offsetWidth;
    this.heightNews = screenWidth / detectRatio;
  }

}
