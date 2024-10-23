import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ResizeService } from 'src/app/services/resize.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent {
  @ViewChild('imgContainer') imgContainer!: any;

  heightNews: number = 0;
  isMobile: boolean = false;

  constructor(
    private resizeService: ResizeService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngAfterViewInit(): void {
    this.resizeService.screenWidthChange$.subscribe(data => {
      setTimeout(() => {
        this.newsRatio();
      });
    });
  }

  newsRatio() {

    // 276 w
    // 379 h

    const desktopRatio: number = 242 / 286;
    const mobileRatio: number = 276 / 379;
    this.isMobile = this.resizeService.isMobile();
    const detectRatio = this.isMobile ? mobileRatio : desktopRatio;

    let mobileSectionEle = this.imgContainer?.nativeElement;

    if (!mobileSectionEle) return;

    const screenWidth = mobileSectionEle.offsetWidth;

    this.heightNews = screenWidth / detectRatio;
    this.cdr.detectChanges();  // This will trigger change detection manually
  }

}
