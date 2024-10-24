import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { ResizeService } from 'src/app/services/resize.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @ViewChild('imgContainer') imgContainer!: any;
  @Input() index: number = 0;
  height: number = 0;
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
    // desktop
    // 276 w
    // 379 h

    // mobile
    // w 275
    // h 379

    const desktopRatio: number = 128 / 128;
    const mobileRatio: number = 128 / 128;
    this.isMobile = this.resizeService.isMobile();
    const detectRatio = this.isMobile ? mobileRatio : desktopRatio;

    let mobileSectionEle = this.imgContainer?.nativeElement;

    if (!mobileSectionEle) return;

    const screenWidth = mobileSectionEle.offsetWidth;

    this.height = screenWidth / detectRatio;
    this.cdr.detectChanges();  // This will trigger change detection manually
  }

}
