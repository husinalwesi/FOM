import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  public scrollChange$ = new BehaviorSubject<any>({
    isChanged: false,
    position: typeof window !== 'undefined' ? window.pageYOffset : 0
  });

  constructor() { }

  initializeScrollEvent() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', (e) => this.updateScroll(e));
    }
  }

  updateScroll(e: any) {
    if (typeof window !== 'undefined') {
      this.scrollChange$.next({
        isChanged: true,
        position: e?.target?.scrollingElement?.scrollTop || 0
      });
    }
  }

}
