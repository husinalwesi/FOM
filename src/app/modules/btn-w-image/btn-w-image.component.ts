import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ResizeService } from 'src/app/services/resize.service';

@Component({
  selector: 'app-btn-w-image',
  templateUrl: './btn-w-image.component.html',
  styleUrls: ['./btn-w-image.component.scss']
})
export class BtnWImageComponent {
  @Input() lang: string = 'en';
  @Input() data: any = null;
  @Input() title: any = null;

  heightMain: number = 0;

  @ViewChild('card') card!: ElementRef;

  constructor(
    private resizeService: ResizeService
  ) {

  }

  ngOnInit(): void {

  }

  ngOnChanges() {
    setTimeout(() => {
      this.updateCarouselConfig();
    });
  }

  ngAfterViewInit(): void {
    this.resizeService.screenWidthChange$.subscribe(data => this.updateCarouselConfig());
    setTimeout(() => {
      this.updateCarouselConfig();
    });
  }

  updateCarouselConfig() {
    if (typeof window !== 'undefined' && this.card?.nativeElement) {
      const ratio: number = 440 / 270;
      this.heightMain = this.card.nativeElement.offsetWidth / ratio;
    }
  }

}
