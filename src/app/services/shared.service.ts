import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PageTransitionsService } from './page-transitions.service';
import { RouteLocalizationPipe } from '../pipes/route-localization.pipe';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
  // providers: [RouteLocalizationPipe]
})
export class SharedService {
  public loaderFlag$ = new BehaviorSubject<boolean>(false);
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private pageTransitionsService: PageTransitionsService,
    private router: Router,
    private RouteLocalizationPipe: RouteLocalizationPipe,
    private ngZone: NgZone,
  ) { }

  enableFullLoader() {
    this.loaderFlag$.next(true);
  }

  disableFullLoader() {
    this.loaderFlag$.next(false);
  }


  vistNode(category: string, id: string) {
    if (isPlatformBrowser(this.platformId)) {
      let savedData = localStorage.getItem(category) ? JSON.parse((localStorage.getItem(category) || '')) : [];
      savedData.push(id);
      localStorage.setItem(category, JSON.stringify(savedData));
    }

  }

  isVistedNode(category: string, id: string) {
    if (isPlatformBrowser(this.platformId)) {
      let savedData = localStorage.getItem(category) ? JSON.parse((localStorage.getItem(category) || '')) : [];
      return savedData.some((item: any) => item === id) || false;
    }
  }

  isValidImage(img: string) {
    return img && img !== '00000000-0000-0000-0000-000000000000' ? img : null;
  }

  isExternalMethod(link: string) {
    if (!link) return false;
    if (
      link.startsWith('//') ||
      link.startsWith('http://') ||
      link.startsWith('https://') ||
      link.startsWith('www.')
    ) {
      return true;
    }
    return false;
  }

  navigateTo(route: string) {
    this.pageTransitionsService.showPageTransition(() => {
      this.ngZone.run(() => {
        this.router.navigateByUrl(this.RouteLocalizationPipe.transform(route));
      });
    });
  }

}
