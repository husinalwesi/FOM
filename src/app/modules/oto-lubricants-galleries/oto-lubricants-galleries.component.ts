import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ResizeService } from 'src/app/services/resize.service';

@Component({
  selector: 'app-oto-lubricants-galleries',
  templateUrl: './oto-lubricants-galleries.component.html',
  styleUrls: ['./oto-lubricants-galleries.component.scss']
})
export class OtoLubricantsGalleriesComponent {
  @Input() data: any = null;

  @Input() lang: string = 'en';

  heightMain: number = 0;

  @ViewChild('card') card!: ElementRef;

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
      const ratio: number = 440 / 270;
      this.heightMain = (this.card?.nativeElement?.offsetWidth || 0) / ratio;
    }
  }

}
