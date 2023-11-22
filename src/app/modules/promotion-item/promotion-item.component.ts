import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/i18n/translation.service';
import { SharedService } from 'src/app/services/shared.service';
import { ResizeService } from 'src/app/services/resize.service';
// import { SharedService } from 'src/app/services/shared.service';
import { getvisitedPromotions } from 'src/app/store/promotions/promotions.action';
import { selectVisitedPromotions } from 'src/app/store/promotions/promotions.selectors';

@Component({
  selector: 'app-promotion-item',
  templateUrl: './promotion-item.component.html',
  styleUrls: ['./promotion-item.component.scss']
})
export class PromotionItemComponent {
  lang: string = "en";
  @Input() data: any;
  @Output() closeMobileMenu: EventEmitter<boolean> = new EventEmitter();
  visitedPromotions: any;
  height: number = 0;
  @ViewChild('card', { static: false }) card: any;

  constructor(
    private translate: TranslateService,
    private TranslationService: TranslationService,
    private sharedService: SharedService,
    // private store: Store
    // private sharedService: SharedService,
    private store: Store,
    private resizeService: ResizeService
  ) {
    this.lang = this.TranslationService.getSelectedLanguage();
  }

  // closeMenu() {
  //   this.sharedService.vistNode(this.data.id, 'promotions');
  //   this.closeMobileMenu.emit(true);
  // }

  // isVisited() {
  //   return this.sharedService.isVistedNode(this.data.id, 'promotions');
  // }
  ngOnInit() {
    this.store.select(selectVisitedPromotions).subscribe((promotions) => {
      this.visitedPromotions = promotions.length > 0 ? promotions : []
    });

    setTimeout(() => {
      this.updateCarouselConfig();
    });
    this.resizeService.screenWidthChange$.subscribe(data => this.updateCarouselConfig());

  }

  ngAfterViewInit(): void {

  }

  updateCarouselConfig() {
    if (this.card) {
      if (typeof window !== 'undefined') {
        const ratio: number = 440 / 270;
        this.height = this.card.nativeElement.offsetWidth / ratio;
      }
    }
  }

  visitedLinkAdd(): void {
    let id = this.data.id
    if (this.visitedPromotions.length > 0) {
      if (this.visitedPromotions.every((item: string) => item !== id)) {
        this.visitedPromotions = [...this.visitedPromotions, id]
        this.store.dispatch(getvisitedPromotions({ promotions: this.visitedPromotions }))
      }
    } else {
      this.store.dispatch(getvisitedPromotions({ promotions: [id.toString()] }))
    }
  }

  checkVisited() {
    return this.visitedPromotions.every((item: string) => item !== this.data.id);
  }
  isExternalMethod(link: string) {
    return this.sharedService.isExternalMethod(link);
  }
}
