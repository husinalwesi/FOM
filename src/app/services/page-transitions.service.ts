import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageTransitionsService {

  constructor() { }

  HideLoad() {
    var tl_transitOut = gsap.timeline();

    // var tl_transitOut = gsap.timeline({
    //   // defaults: { duration: 1, ease: Expo.easeInOut },
    //   onComplete: () => {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    //     // if (callback) {
    //     //   callback(); // Call the passed callback function
    //     // }
    //   }
    // });

    tl_transitOut.to(".ptr-preloader", { duration: 1, autoAlpha: 0, ease: Expo.easeInOut });
    tl_transitOut.to(".ptr-overlay", { duration: 1, scaleY: 0, transformOrigin: "center top", ease: Expo.easeInOut }, 0.3);


    // tl_transitOut.to(".tt-header", { duration: 0, y: -20, clearProps: "all" });

    // tt-Header appear
    // tl_transitOut.from(".other", { duration: 1, y: 20, autoAlpha: 1, ease: Expo.easeInOut, clearProps: "all" }, 0.6);
    // tl_transitOut.to(".tt-header", { duration: 1, y: 0, autoAlpha: 1, ease: Expo.easeInOut, clearProps: "all" }, 0.6);

    tl_transitOut.from("#page-content", { duration: 1.5, autoAlpha: 0, y: 80, ease: Expo.easeOut, clearProps: "all" }, 0.8);
    tl_transitOut.set("#page-transition", { duration: 1, autoAlpha: 0, ease: Expo.easeInOut }, 1);
    // console.log(tl_transitOut);

  }

  showPageTransition(callback: () => void) {
    var tl_transitIn = gsap.timeline({
      defaults: { duration: 1, ease: Expo.easeInOut },
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

  initializePageTransition() {
    var tl_transitIn = gsap.timeline();
    tl_transitIn.to("#content-wrap", { y: -80, clearProps: "all" });
  }

}
