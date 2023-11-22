import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ResizeService } from 'src/app/services/resize.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-features-offered',
  templateUrl: './features-offered.component.html',
  styleUrls: ['./features-offered.component.scss']
})
export class FeaturesOfferedComponent {
  @Input() lang: string = 'en';
  @Input() data: any;

  heightMain: number = 0;

  @ViewChild('card') card!: ElementRef;

  constructor(
    private resizeService: ResizeService,
    private sharedService: SharedService
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
      const ratio: number = 440 / 270;
      this.heightMain = (this.card?.nativeElement?.offsetWidth || 0)  / ratio;
    }
  }
  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }
}
