import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ResizeService } from 'src/app/services/resize.service';
import { RouteLocalizationPipe } from "src/app/pipes/route-localization.pipe";
import { PageTransitionsService } from 'src/app/services/page-transitions.service';
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow } from 'swiper/modules';
import { SharedService } from 'src/app/services/shared.service';
import { ViewChild, ViewEncapsulation, HostListener, Output, EventEmitter } from '@angular/core';
import { LoadAssetsService } from 'src/app/load-assets.service';
import { TranslationService } from 'src/app/i18n/translation.service';

@Component({
  selector: 'app-home-blogs',
  templateUrl: './home-blogs.component.html',
  styleUrls: ['./home-blogs.component.scss'],
  providers: [RouteLocalizationPipe]
})
export class HomeBlogsComponent {
  news: any = [1, 2, 3, 1, 2, 3, 1, 2, 3];

  constructor(
    private resizeService: ResizeService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private RouteLocalizationPipe: RouteLocalizationPipe,
    private pageTransitionsService: PageTransitionsService,
    private ngZone: NgZone,
    private loadAssetsService: LoadAssetsService,
    private TranslationService: TranslationService,
    private SharedService: SharedService
  ) {
  }

  navigate() {
    this.pageTransitionsService.showPageTransition(() => {
      this.ngZone.run(() => {
        this.router.navigateByUrl(this.RouteLocalizationPipe.transform(`/blogs`));
      });
    });
  }

}
