import { Component, Input } from '@angular/core';
import { IHeroBG } from '../hero-bg-half/hero-bg-half.component';
import { ResizeService } from 'src/app/services/resize.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-hero-half',
  templateUrl: './hero-half.component.html',
  styleUrls: ['./hero-half.component.scss']
})
export class HeroHalfComponent {
  // TO DO .. single slide, need to handle video..
  @Input() data: IHeroBG[] = [];
  height: number = 0;
  @Input() fullView: boolean = false;
  @Input() isLoadingEnabled: boolean = true;

  constructor(
    private resizeService: ResizeService
  ) {

  }

  ngOnInit(): void {
    this.updateCarouselConfig();
  }

  ngAfterViewInit(): void {
    this.resizeService.screenWidthChange$.subscribe(data => this.updateCarouselConfig());
  }

  updateCarouselConfig() {
    if (typeof window !== 'undefined') {
      const desktopRatio: number = 1920 / 544;
      const mobileRatio: number = 375 / 272;
      const isMobile = this.resizeService.isMobile();
      const detectRatio = isMobile ? mobileRatio : desktopRatio;
      const screenWidth = window.innerWidth;
      this.height = screenWidth / detectRatio;
    }
  }

}
