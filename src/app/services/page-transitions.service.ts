import { Injectable } from '@angular/core';
import gsap from 'gsap';

@Injectable({
  providedIn: 'root'
})
export class PageTransitionsService {

  constructor() { }

  HideLoad() {
    return;
    if (typeof window !== 'undefined') {
      // return;
      var tl_transitOut = gsap.timeline();

      // var tl_transitOut = gsap.timeline({
      //   // defaults: { duration: 1, ease: 'expo.inOut' },
      //   onComplete: () => {
      //     window.scrollTo({ top: 0, behavior: "smooth" });
      //     // if (callback) {
      //     //   callback(); // Call the passed callback function
      //     // }
      //   }
      // });

      tl_transitOut.to(".ptr-preloader", { duration: 1, autoAlpha: 0, ease: 'expo.inOut' });
      tl_transitOut.to(".ptr-overlay", { duration: 1, scaleY: 0, transformOrigin: "center top", ease: 'expo.inOut' }, 0.3);


      // tl_transitOut.to(".tt-header", { duration: 0, y: -20, clearProps: "all" });

      // tt-Header appear
      // tl_transitOut.from(".other", { duration: 1, y: 20, autoAlpha: 1, ease: 'expo.inOut', clearProps: "all" }, 0.6);
      // tl_transitOut.to(".tt-header", { duration: 1, y: 0, autoAlpha: 1, ease: 'expo.inOut', clearProps: "all" }, 0.6);

      tl_transitOut.from("#page-content", { duration: 1.5, autoAlpha: 0, y: 80, ease: 'expo.easeOut', clearProps: "all" }, 0.8);
      tl_transitOut.set("#page-transition", { duration: 1, autoAlpha: 0, ease: 'expo.inOut' }, 1);
      // console.log(tl_transitOut);
      setTimeout(() => {
        window.scrollTo({ top: 0 });
      }, 600);
    }
  }

  showPageTransition(callback: () => void) {
    callback();
    return;
    // 
    if (typeof window !== 'undefined') {
      var tl_transitIn = gsap.timeline({
        defaults: { duration: 1, ease: 'expo.inOut' },
        onComplete: () => {
          if (callback) {
            callback(); // Call the passed callback function
          }
        }
      });

      tl_transitIn.set("#page-transition", { autoAlpha: 1 });
      tl_transitIn.to(".ptr-overlay", { scaleY: 1, transformOrigin: "center bottom" }, 0);
      // alert(123);
      tl_transitIn.to("#content-wrap", { y: -80, autoAlpha: 0, clearProps: "all" }, 0);
      // tl_transitIn.to(".tt-header", { y: -20, autoAlpha: 0 }, 0);
      // tl_transitIn.to(".other", { y: -80, autoAlpha: 0, clearProps: "all" }, 0);
      // tl_transitIn.to(".other", { y: -20, autoAlpha: 0 }, 0);
      tl_transitIn.to(".ptr-preloader", { autoAlpha: 1 }, 0.4);
    }
  }

  initializePageTransition() {
    return;
    if (typeof window !== 'undefined') {
      var tl_transitIn = gsap.timeline();
      tl_transitIn.to("#content-wrap", { y: -80, clearProps: "all" });
    }
  }

}
