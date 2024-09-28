import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { LoadAssetsService } from 'src/app/load-assets.service';
import { TranslationService } from 'src/app/i18n/translation.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

declare let gsap: any;
declare let MotionPathPlugin: any;


@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent {
  carousel: any = [1, 2, 3, 4, 1, 2, 3, 4];
  @ViewChild('videoPlayer') videoPlayer!: any;

  activeSubCategory: string = 'GROOM4';
  items: any[] = [];

  customOptions: OwlOptions = {
    smartSpeed: 1200,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    freeDrag: true,
    rtl: this.TranslationService.isRTL(),
    // dots: false,
    margin: 9,
    // dotsData: true,
    nav: true,
    items: 1,
    responsive: {
      0: {
        items: 1,
        dots: true,
        nav: true,
      },
      768: {
        items: 4,
        dots: true,
        nav: true,
      },
    },
    navText: ['', '']
    // navText: ['&#8249', '&#8250;'],
  }

  constructor(
    private loadAssetsService: LoadAssetsService,
    private TranslationService: TranslationService,
  ) {
    this.loadAssetsService.loadCss('assets/css/carousel.css', 'carousel-default');
  }

  ngAfterViewInit(): void {
    // https://www.pexels.com/search/videos/sample/
    const videoElem = this.videoPlayer.nativeElement;

    videoElem.muted = true; // Ensure it's muted
    const playPromise = videoElem.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Handle autoplay block, prompt user interaction
        console.log('Autoplay was prevented, require user interaction.');
      });
    }


    gsap.registerPlugin(MotionPathPlugin);

    const circlePath = MotionPathPlugin.convertToPath("#holder", false)[0];
    circlePath.id = "circlePath";
    document.querySelector('#circle-svg')?.prepend(circlePath);
    // console.log(circlePath);


    this.items = gsap.utils.toArray(".item");
    const numItems = this.items.length;
    const itemStep = 1 / numItems;
    const wrapProgress = gsap.utils.wrap(0, 1);
    const snap = gsap.utils.snap(itemStep);
    const wrapTracker = gsap.utils.wrap(0, numItems);
    const tracker = { item: 0 };
    // console.log(circlePath);

    gsap.set(this.items, {
      motionPath: {
        path: circlePath,
        align: circlePath,
        alignOrigin: [0.5, 0.5],
        end: (i: number) => i / numItems,
      },
      // scale: 1
    });

    const tl = gsap.timeline({ paused: true, reversed: true });
    tl.to(".wrapper", {
      rotation: 360,
      transformOrigin: "center",
      duration: 1,
      ease: "none"
    });
    tl.to(//make it point to top
      this.items,
      {
        rotation: "-=360",
        transformOrigin: "center",
        duration: 1,
        ease: "none"
      },
      0
    );
    tl.to(
      tracker,
      {
        item: numItems,
        duration: 1,
        ease: "none",
        modifiers: {
          item: (value: any) => wrapTracker(numItems - Math.round(value)),
        }
      },
      0
    );

    this.items.forEach((el, i) => {
      el.addEventListener("click", () => {
        const current = tracker.item;
        const activeItem = i;

        if (i === current) return;

        document.querySelector(".item.active")?.classList.remove("active");
        this.items[activeItem].classList.add("active");

        const diff = current - i;
        if (Math.abs(diff) < numItems / 2) {
          this.moveWheel(diff * itemStep, tl, tracker, wrapProgress, snap);
        } else {
          const amt = numItems - Math.abs(diff);
          if (current > i) {
            this.moveWheel(amt * -itemStep, tl, tracker, wrapProgress, snap);
          } else {
            this.moveWheel(amt * itemStep, tl, tracker, wrapProgress, snap);
          }
        }
      });
    });

    // document.getElementById('next')?.addEventListener('click', () => {
    //   this.moveWheel(-itemStep, tl, tracker, wrapProgress, snap);
    // });

    // document.getElementById('prev')?.addEventListener('click', () => {
    //   this.moveWheel(itemStep, tl, tracker, wrapProgress, snap);
    // });
  }

  moveWheel(amount: number, tl: any, tracker: any, wrapProgress: any, snap: any): void {
    // console.log(amount, tl, tracker, wrapProgress, snap);

    const progress = tl.progress();
    tl.progress(wrapProgress(snap(tl.progress() + amount)));
    const next = tracker.item;
    tl.progress(progress);

    document.querySelector(".item.active")?.classList.remove("active");
    this.items[next].classList.add("active");

    gsap.to(tl, {
      progress: snap(tl.progress() + amount),
      modifiers: { progress: wrapProgress },
    });
  }
}
