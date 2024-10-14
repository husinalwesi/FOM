import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { PageTransitionsService } from 'src/app/services/page-transitions.service';
import { ResizeService } from 'src/app/services/resize.service';
declare let gsap: any;
declare let MotionPathPlugin: any;

@Component({
  selector: 'app-hero-home-circle-carousel',
  templateUrl: './hero-home-circle-carousel.component.html',
  styleUrls: ['./hero-home-circle-carousel.component.scss'],
  providers: [RouteLocalizationPipe]
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroHomeCircleCarouselComponent {
  showComponent: boolean = true;
  intervalId: any;
  // 
  itemStep: number = 0;
  wrapProgress: any;
  snap: any;
  tl: any;

  isFirstLoad: boolean = true;
  circleSelectedItem: number = 0;
  activeSubCategory: number = 0;

  showVideo: boolean = true;
  circleItems: any = [
    {
      title: 'Title 1',
      subTitle: 'sub',
      svg: 'assets/svgs/open-buffet.svg',
      subCategories: [
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: null,
          img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/1.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/2.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/3.mp4",
          img: null
        }
      ]
    },
    {
      title: 'Title 2',
      subTitle: 'sub',
      svg: 'assets/svgs/open-buffet.svg',
      subCategories: [],
      data: {
        video: null,
        img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
      }
    },
    {
      title: 'Title 3',
      subTitle: 'sub',
      svg: 'assets/svgs/open-buffet.svg',
      subCategories: [
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: null,
          img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/1.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/2.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/3.mp4",
          img: null
        }
      ]
    },
    {
      title: 'Title 4',
      subTitle: 'sub',
      svg: 'assets/svgs/open-buffet.svg',
      subCategories: [],
      data: {
        video: "assets/videos/circle/1.mp4",
        img: null
      }
    },
    {
      title: 'Title 5',
      subTitle: 'sub',
      svg: 'assets/svgs/open-buffet.svg',
      subCategories: [
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: null,
          img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/1.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/2.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/3.mp4",
          img: null
        }
      ]
    },
    {
      title: 'Title 6',
      subTitle: 'sub',
      svg: 'assets/svgs/open-buffet.svg',
      subCategories: [
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: null,
          img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/1.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/2.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/3.mp4",
          img: null
        }
      ]
    },
    {
      title: 'Title 7',
      subTitle: 'sub',
      svg: 'assets/svgs/open-buffet.svg',
      subCategories: [
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: null,
          img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/1.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/2.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/3.mp4",
          img: null
        }
      ]
    },
    {
      title: 'Title 8',
      subTitle: 'sub',
      svg: 'assets/svgs/open-buffet.svg',
      subCategories: [
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: null,
          img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/1.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/2.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/3.mp4",
          img: null
        }
      ]
    },
    {
      title: 'Title 9',
      subTitle: 'sub',
      svg: 'assets/svgs/open-buffet.svg',
      subCategories: [
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: null,
          img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/1.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/2.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/3.mp4",
          img: null
        }
      ]
    },
    {
      title: 'Title 10',
      subTitle: 'sub',
      svg: 'assets/svgs/open-buffet.svg',
      subCategories: [
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: null,
          img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/1.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/2.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/clothes.svg',
          video: "assets/videos/circle/3.mp4",
          img: null
        }
      ]
    }
  ];

  // 
  baseWidth: number = 1440;
  baseHeight: number = 896;
  // 
  defaultPadding: number = 20;
  defaultTotalCircleSizeOuter: number = 662;
  defaultCircleItemSize: number = 68;
  defaultBorderSize: number = 3;

  // padding: number = 20;
  // totalCircleSizeOuter: number = 662;
  // circleItemSize: number = 68;
  // borderSize: number = 3;

  totalCircleSizeOuter: number = 0;
  circleItemSize: number = 0;
  borderSize: number = 0;
  padding: number = 0;


  circleSize() {
    let paddingToTop: number = this.padding * 2;// 20px for each side..
    return this.totalCircleSizeOuter - this.circleItemSize - paddingToTop;
    // total size - one item - padding to the top..
  }

  innerCircleSize() {
    let paddingToBottom: number = this.padding * 2;// 20px for each side..
    return this.totalCircleSizeOuter - (paddingToBottom * 2) - (this.circleItemSize * 2);
  }

  // 

  constructor(
    private resizeService: ResizeService,
    private cdk: ChangeDetectorRef,
    private renderer: Renderer2,
    private el: ElementRef,


    private pageTransitionsService: PageTransitionsService,
    private router: Router,
    private RouteLocalizationPipe: RouteLocalizationPipe,
    private ngZone: NgZone,
  ) { }

  ngAfterViewInit(): void {

    // this.resizeService.screenWidthChange$
    //   .pipe(debounceTime(300)) // Adjust debounce time as needed
    //   .subscribe(data => {
    //     this.calculateSizes();
    //     setTimeout(() => this.initialization());
    //   });


    this.resizeService.screenWidthChange$.subscribe(data => {
      this.calculateSizes();
      setTimeout(() => {
        this.initialization();
      });
    });
  }

  calculateSizes() {
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
    const isMobile = screenWidth < 768;

    // Scale factor based on the reference dimensions
    const widthScale = screenWidth / this.baseWidth;
    const heightScale = screenHeight / this.baseHeight;

    // Choose the smaller scale to maintain aspect ratio
    const scale = Math.min(widthScale, heightScale);

    // Dynamically adjust sizes based on the scale
    // 16px each side..

    this.totalCircleSizeOuter = isMobile ? (screenWidth - (16 * 2)) : (this.defaultTotalCircleSizeOuter * scale);  // Adjust the outer circle size

    // this.totalCircleSizeOuter = isMobile ? (screenWidth - (16 * 2)) : (this.defaultTotalCircleSizeOuter * scale);  // Adjust the outer circle size

    this.circleItemSize = this.defaultCircleItemSize;
    // this.circleItemSize = this.defaultCircleItemSize * scale;  // Adjust the item size
    // this.circleItemSize = isMobile ? this.defaultCircleItemSize : (this.defaultCircleItemSize * scale);  // Adjust the item size

    this.borderSize = this.defaultBorderSize;
    // this.borderSize = this.defaultBorderSize * scale;  // Adjust border size
    // this.borderSize = isMobile ? this.defaultBorderSize : (this.defaultBorderSize * scale);  // Adjust border size

    this.padding = this.defaultPadding;
    // this.padding = this.defaultPadding * scale;
    // this.padding = isMobile ? this.defaultPadding : (this.defaultPadding * scale);

    this.cdk.detectChanges();
  }

  initialization() {
    this.wrapProgress = null;
    this.itemStep = 0;
    this.snap = null;
    if (this.tl) this.tl.kill();

    this.circleSelectedItem = 0;
    this.activeSubCategory = 0;
    this.showComponent = false;
    // 
    setTimeout(() => {
      // 
      this.stopTimer();
      // 
      this.showComponent = true;
      setTimeout(() => {
        this.initialization2();
      });
    });
  }

  initialization2() {
    // Calculate sizes based on screen dimensions
    gsap.registerPlugin(MotionPathPlugin);

    const circlePath = MotionPathPlugin.convertToPath("#holder", false)[0];
    if (!circlePath) return;
    // console.log(circlePath);

    circlePath.id = "circlePath";
    const svgHeroHome: any = this.el.nativeElement.querySelector("#svgHeroHome");
    if (!svgHeroHome) return;
    svgHeroHome.prepend(circlePath);


    let items = gsap.utils.toArray(".item");
    let numItems = items.length;
    this.wrapProgress = gsap.utils.wrap(0, 1);
    this.itemStep = 1 / numItems;
    this.snap = gsap.utils.snap(this.itemStep);
    let wrapTracker = gsap.utils.wrap(0, numItems);
    let tracker = { item: 0 };


    gsap.set(items, {
      motionPath: {
        path: circlePath,
        align: circlePath,
        alignOrigin: [0.5, 0.5],
        end: (i: number) => i / items.length
      }, scale: 1
    });

    this.tl = gsap.timeline({ paused: true, reversed: true });

    this.tl.to('.wrapper', {
      rotation: 360,
      transformOrigin: 'center',
      duration: 1,
      ease: 'none'
    });

    this.tl.to("#inner-circle", {
      rotation: "-=360",
      transformOrigin: 'center',
      duration: 1,
      ease: 'none',
    }, 0);


    this.tl.to(items, {
      rotation: "-=360",
      transformOrigin: 'center',
      duration: 1,
      ease: 'none',
    }, 0);

    this.tl.to(tracker, {
      item: numItems,
      duration: 1,
      ease: 'none',
      modifiers: {
        item(value: number) {
          return wrapTracker(numItems - Math.round(value))
        }
      }
    }, 0);


    items.forEach((el: any, i: number) => {
      el.addEventListener("click", () => {
        let current = tracker.item;
        if (i === current) return;
        var diff = current - i;

        if (Math.abs(diff) < numItems / 2) {
          this.moveWheel(diff * this.itemStep);
        } else {
          var amt = numItems - Math.abs(diff);

          if (current > i) {
            this.moveWheel(amt * -this.itemStep);
          } else {
            this.moveWheel(amt * this.itemStep);
          }
        }
      });
    });

    this.autoPlay();
  }


  autoPlay() {
    // return;
    this.startTimer();
    const carouselElement = this.el.nativeElement.querySelector('.wrapper');
    this.renderer.listen(carouselElement, 'mouseenter', () => this.stopTimer());
    this.renderer.listen(carouselElement, 'mouseleave', () => this.startTimer());
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 5000);
  }

  stopTimer() {
    clearInterval(this.intervalId);
  }

  // prev() {
  //   this.moveWheel(this.itemStep);
  //   this.circleSelectedItem = (this.circleSelectedItem - 1) < 0 ? this.circleItems.length - 1 : this.circleSelectedItem - 1;
  //   this.activeSubCategory = 0;
  // }

  next() {
    this.moveWheel(-this.itemStep);
    this.circleSelectedItem = (this.circleSelectedItem + 1) >= this.circleItems.length ? 0 : this.circleSelectedItem + 1;
    this.activeSubCategory = 0;
  }

  moveWheel(amount: any) {
    let tl: any = this.tl;
    let wrapProgress: any = this.wrapProgress;
    let snap: any = this.snap;
    // 
    let progress = tl.progress();
    tl.progress(wrapProgress(snap(tl.progress() + amount)))
    tl.progress(progress);

    gsap.to(tl, {
      progress: snap(tl.progress() + amount),
      modifiers: {
        progress: wrapProgress
      }
    });
  }

  getSubCategories() {
    return this.circleItems?.[this.circleSelectedItem]?.subCategories || [];
  }

  getMedia() {
    if (this.getSubCategories().length > 0) {
      return this.getSubCategories()?.[this.activeSubCategory];
    } else {
      return this.circleItems?.[this.circleSelectedItem]?.data;
    }
  }

  setCircleSelectedItem(index: number) {
    this.circleSelectedItem = index;
    this.activeSubCategory = 0;
    this.updateVideo();
    this.playClickSound();
  }

  setSubCategorySelectedItem(index: number) {
    this.activeSubCategory = index;
    this.updateVideo();
    this.playClickSound();
  }

  updateVideo() {
    this.showVideo = false;
    setTimeout(() => {
      this.showVideo = true;
    });
  }

  playClickSound() {
    if (typeof window !== 'undefined') {
      // Get the audio element
      let sound: any = document.getElementById('clickSound');
      if (!sound) return;
      // Play the sound
      sound.currentTime = 0; // Rewind to the start
      sound.play();
    }
  }

  click() {
    this.pageTransitionsService.showPageTransition(() => {
      this.ngZone.run(() => {
        this.router.navigateByUrl(this.RouteLocalizationPipe.transform(`listing`));
      });
    });
  }

}
