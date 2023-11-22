import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ResizeService } from 'src/app/services/resize.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-card-two',
  templateUrl: './card-two.component.html',
  styleUrls: ['./card-two.component.scss']
})
export class CardTwoComponent {
  @Input() lang: string = "en";
  @Input() btnText: string = "SHARED.READ_MORE";
  @Input() data: any;
  @Input() isExternal: boolean = false;
  @Input() isEventBase: boolean = false;
  @Input() isTitleClickable: boolean = false;
  @Output() onClickEmiter: EventEmitter<any> = new EventEmitter();

  heightMain: number = 0;

  @ViewChild('card') card!: ElementRef;

  constructor(
    private resizeService: ResizeService,
    private cdk: ChangeDetectorRef,
    private sharedService: SharedService
  ) {

  }

  onClick(event: any) {
    this.onClickEmiter.emit(true);
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
      this.cdk.detectChanges();
    }
  }
  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }
}
