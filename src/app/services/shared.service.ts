import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public loaderFlag$ = new BehaviorSubject<boolean>(false);
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

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

}
