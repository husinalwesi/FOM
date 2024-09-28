import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { throttle } from 'lodash';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  isStickyEnabled: boolean = false;
  @ViewChild('header', { static: true }) headerElement!: ElementRef;

  constructor() {
    this.updateScroll = throttle(this.updateScroll.bind(this), 200); // Throttle to run every 100ms
  }

  updateHeader() {
    // console.log('run');
    
    if (typeof window !== 'undefined') {
      this.isStickyEnabled = (window.scrollY || document.documentElement.scrollTop) > 50;
    }
  }

  @HostListener('window:scroll', ['$event']) updateScroll(event: Event) {
    this.updateHeader();
  }

}
