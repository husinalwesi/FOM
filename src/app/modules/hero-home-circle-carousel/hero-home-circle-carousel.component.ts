import { ChangeDetectorRef, Component } from '@angular/core';
import { ResizeService } from 'src/app/services/resize.service';
declare let gsap: any;
declare let MotionPathPlugin: any;

@Component({
  selector: 'app-hero-home-circle-carousel',
  templateUrl: './hero-home-circle-carousel.component.html',
  styleUrls: ['./hero-home-circle-carousel.component.scss']
})
export class HeroHomeCircleCarouselComponent {
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
          svg: 'assets/svgs/test.svg',
          video: null,
          img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
          video: "assets/videos/circle/1.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
          video: "assets/videos/circle/2.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
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
          svg: 'assets/svgs/test.svg',
          video: null,
          img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
          video: "assets/videos/circle/1.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
          video: "assets/videos/circle/2.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
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
          svg: 'assets/svgs/test.svg',
          video: null,
          img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
          video: "assets/videos/circle/1.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
          video: "assets/videos/circle/2.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
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
          svg: 'assets/svgs/test.svg',
          video: null,
          img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
          video: "assets/videos/circle/1.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
          video: "assets/videos/circle/2.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
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
          svg: 'assets/svgs/test.svg',
          video: null,
          img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
          video: "assets/videos/circle/1.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
          video: "assets/videos/circle/2.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
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
          svg: 'assets/svgs/test.svg',
          video: null,
          img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
          video: "assets/videos/circle/1.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
          video: "assets/videos/circle/2.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
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
          svg: 'assets/svgs/test.svg',
          video: null,
          img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
          video: "assets/videos/circle/1.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
          video: "assets/videos/circle/2.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
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
          svg: 'assets/svgs/test.svg',
          video: null,
          img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
          video: "assets/videos/circle/1.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
          video: "assets/videos/circle/2.mp4",
          img: null
        },
        {
          title: "Subcate",
          subTitle: 'sub',
          svg: 'assets/svgs/test.svg',
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
    private cdk: ChangeDetectorRef
  ) { }

  ngAfterViewInit(): void {

    this.resizeService.screenWidthChange$.subscribe(data => {
      this.calculateSizes();
      setTimeout(() => {
        this.initialization()
      });
    });
  }

  calculateSizes() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const isMobile = screenWidth < 768;

    // Scale factor based on the reference dimensions
    const widthScale = screenWidth / this.baseWidth;
    const heightScale = screenHeight / this.baseHeight;

    // Choose the smaller scale to maintain aspect ratio
    const scale = Math.min(widthScale, heightScale);

    // Dynamically adjust sizes based on the scale
    // 16px each side..
    this.totalCircleSizeOuter = isMobile ? (screenWidth - (16 * 2)) : (this.defaultTotalCircleSizeOuter * scale);  // Adjust the outer circle size

    this.circleItemSize = this.defaultCircleItemSize * scale;  // Adjust the item size
    // this.circleItemSize = isMobile ? this.defaultCircleItemSize : (this.defaultCircleItemSize * scale);  // Adjust the item size

    this.borderSize = this.defaultBorderSize * scale;  // Adjust border size
    // this.borderSize = isMobile ? this.defaultBorderSize : (this.defaultBorderSize * scale);  // Adjust border size

    this.padding = this.defaultPadding * scale;
    // this.padding = isMobile ? this.defaultPadding : (this.defaultPadding * scale);

    this.cdk.detectChanges();
  }


  initialization() {
    // Calculate sizes based on screen dimensions
    gsap.registerPlugin(MotionPathPlugin);

    const circlePath = MotionPathPlugin.convertToPath("#holder", false)[0];

    circlePath.id = "circlePath";
    const svgHeroHome: any = document.querySelector("#svgHeroHome");
    if (!svgHeroHome) return;
    svgHeroHome.prepend(circlePath);

    let items = gsap.utils.toArray(".item"),
      numItems = items.length,
      itemStep = 1 / numItems,
      wrapProgress = gsap.utils.wrap(0, 1),
      snap = gsap.utils.snap(itemStep),
      wrapTracker = gsap.utils.wrap(0, numItems),
      tracker = { item: 0 };

    gsap.set(items, {
      motionPath: {
        path: circlePath,
        align: circlePath,
        alignOrigin: [0.5, 0.5],
        end: (i: number) => i / items.length
      }, scale: 1
    });

    const tl = gsap.timeline({ paused: true, reversed: true });

    tl.to('.wrapper', {
      rotation: 360,
      transformOrigin: 'center',
      duration: 1,
      ease: 'none'
    });

    tl.to("#inner-circle", {
      rotation: "-=360",
      transformOrigin: 'center',
      duration: 1,
      ease: 'none',
    }, 0);


    tl.to(items, {
      rotation: "-=360",
      transformOrigin: 'center',
      duration: 1,
      ease: 'none',
    }, 0);

    tl.to(tracker, {
      item: numItems,
      duration: 1,
      ease: 'none',
      modifiers: {
        item(value: number) {
          return wrapTracker(numItems - Math.round(value))
        }
      }
    }, 0);

    items.forEach((el: { addEventListener: (arg0: string, arg1: () => void) => void; }, i: number) => {

      el.addEventListener("click", () => {
        let current = tracker.item;
        if (i === current) return;
        var diff = current - i;

        if (Math.abs(diff) < numItems / 2) {
          this.moveWheel(diff * itemStep, tl, wrapProgress, snap);
        } else {
          var amt = numItems - Math.abs(diff);

          if (current > i) {
            this.moveWheel(amt * -itemStep, tl, wrapProgress, snap);
          } else {
            this.moveWheel(amt * itemStep, tl, wrapProgress, snap);
          }
        }
      });
    });


    const next: any = document.getElementById('nextHeroHome');
    if (next) {
      next.addEventListener("click", () => {
        return this.moveWheel(-itemStep, tl, wrapProgress, snap);
      });
    }

    const prev: any = document.getElementById('prevHeroHome');
    if (prev) {
      prev.addEventListener("click", () => {
        return this.moveWheel(itemStep, tl, wrapProgress, snap);
      });
    }


    this.autoPlay();

  }


  autoPlay() {
    setInterval(() => {
      this.next();
    }, 5000);
  }

  next() {
    const next: any = document.getElementById('nextHeroHome');
    if (next) {
      next.click();
      this.circleSelectedItem = (this.circleSelectedItem + 1) >= this.circleItems.length ? 0 : this.circleSelectedItem + 1;
      this.activeSubCategory = 0;
    }
  }

  moveWheel(amount: any, tl: any, wrapProgress: any, snap: any) {
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
    // Get the audio element
    let sound: any = document.getElementById('clickSound');
    if (!sound) return;
    // Play the sound
    sound.currentTime = 0; // Rewind to the start
    sound.play();
  }

}
