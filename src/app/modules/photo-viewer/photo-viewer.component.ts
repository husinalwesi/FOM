import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ResizeService } from 'src/app/services/resize.service';

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.scss']
})
export class PhotoViewerComponent {
  @Input() images: any = [];
  @Input() selectedProduct: any = null;
  @Output() changeProduct: EventEmitter<any> = new EventEmitter();

  selectImage(item: any) {
    this.changeProduct.emit(item);
  }

  heightMain: number = 0;
  heightSub: number = 0;

  @ViewChild('card') card!: ElementRef;
  @ViewChild('cardSub') cardSub!: ElementRef;

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
      this.heightMain = this.card.nativeElement.offsetWidth / ratio;
      this.heightSub = this.cardSub.nativeElement.offsetWidth / ratio;
    }
  }

}
