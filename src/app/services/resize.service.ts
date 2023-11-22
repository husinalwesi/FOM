import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ResizeService {
  public screenWidth$ = new BehaviorSubject<number>(typeof window !== 'undefined' ? window.innerWidth : 0);
  public screenWidthChange$ = new BehaviorSubject<any>({
    isChanged: false,
    width: typeof window !== 'undefined' ? window.innerWidth : 0
  });

  constructor() { }


  initializeResizeEvent() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => this.updateResize());
    }
  }

  getWindowWidth() {
    return this.screenWidth$.value;
  }

  isDesktop() {
    return this.getWindowWidth() >= 1024;
  }

  isMobile() {
    return this.getWindowWidth() <= 768;
  }

  updateResize() {
    if (typeof window !== 'undefined') {
      const screenWidthTemp = window.innerWidth;
      if (this.screenWidth$.value != screenWidthTemp) {
        // special case happens when scrolling and hide the browser search bar..
        this.screenWidth$.next(screenWidthTemp);
        this.screenWidthChange$.next({
          isChanged: true,
          width: screenWidthTemp
        });
      }
    }
  }

}
