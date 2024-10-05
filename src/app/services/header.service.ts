import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  // Observable to keep track of header state
  private stickyHeader = new BehaviorSubject<boolean>(false);

  // Expose observable to be used by other components
  stickyHeader$ = this.stickyHeader.asObservable();

  constructor() { }

  useStickyHeader(isSticky: boolean = true) {
    this.stickyHeader.next(isSticky);
  }

}
