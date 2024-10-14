import { Component, ElementRef, ViewChild } from '@angular/core';
import { ResizeService } from 'src/app/services/resize.service';


@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss']
})
export class HomeHeroComponent {
  // @ViewChild('heroHomeCircleCarouselEle', { read: ElementRef }) heroHomeCircleCarouselEle!: ElementRef;

  constructor(private resizeService: ResizeService) { }

  ngAfterViewInit(): void {
    // this.resizeService.screenWidthChange$.subscribe(data => this.setPosition());
  }

  // setPosition() {
  //   if (!this.heroHomeCircleCarouselEle) return;
  //   const heroHomeCircleCarouselEle = this.heroHomeCircleCarouselEle?.nativeElement;
  //   heroHomeCircleCarouselEle.style.marginTop = `-${heroHomeCircleCarouselEle.offsetHeight / 2}px`;
  // }


  // showVideo: boolean = true;
  // circleItems: any = [
  //   {
  //     title: 'Title 1',
  //     subTitle: 'Subtitle',
  //     svg: 'assets/svgs/open-buffet.svg',
  //     subCategories: [
  //       {
  //         title: "sub cate 1",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: null,
  //         img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
  //       },
  //       {
  //         title: "sub cate 2",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/1.mp4",
  //         img: null
  //       },
  //       {
  //         title: "sub cate 3",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/2.mp4",
  //         img: null
  //       },
  //       {
  //         title: "sub cate 4",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/3.mp4",
  //         img: null
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Title 2',
  //     subTitle: 'Subtitle',
  //     svg: 'assets/svgs/open-buffet.svg',
  //     subCategories: [
  //       {
  //         title: "sub cate 1",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: null,
  //         img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
  //       },
  //       {
  //         title: "sub cate 2",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/1.mp4",
  //         img: null
  //       },
  //       {
  //         title: "sub cate 3",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/2.mp4",
  //         img: null
  //       },
  //       {
  //         title: "sub cate 4",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/3.mp4",
  //         img: null
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Title 3',
  //     subTitle: 'Subtitle',
  //     svg: 'assets/svgs/open-buffet.svg',
  //     subCategories: [
  //       {
  //         title: "sub cate 1",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: null,
  //         img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
  //       },
  //       {
  //         title: "sub cate 2",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/1.mp4",
  //         img: null
  //       },
  //       {
  //         title: "sub cate 3",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/2.mp4",
  //         img: null
  //       },
  //       {
  //         title: "sub cate 4",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/3.mp4",
  //         img: null
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Title 4',
  //     subTitle: 'Subtitle',
  //     svg: 'assets/svgs/open-buffet.svg',
  //     subCategories: [
  //       {
  //         title: "sub cate 1",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: null,
  //         img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
  //       },
  //       {
  //         title: "sub cate 2",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/1.mp4",
  //         img: null
  //       },
  //       {
  //         title: "sub cate 3",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/2.mp4",
  //         img: null
  //       },
  //       {
  //         title: "sub cate 4",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/3.mp4",
  //         img: null
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Title 5',
  //     subTitle: 'Subtitle',
  //     svg: 'assets/svgs/open-buffet.svg',
  //     subCategories: [
  //       {
  //         title: "sub cate 1",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: null,
  //         img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
  //       },
  //       {
  //         title: "sub cate 2",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/1.mp4",
  //         img: null
  //       },
  //       {
  //         title: "sub cate 3",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/2.mp4",
  //         img: null
  //       },
  //       {
  //         title: "sub cate 4",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/3.mp4",
  //         img: null
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Title 6',
  //     subTitle: 'Subtitle',
  //     svg: 'assets/svgs/open-buffet.svg',
  //     subCategories: [
  //       {
  //         title: "sub cate 1",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: null,
  //         img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
  //       },
  //       {
  //         title: "sub cate 2",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/1.mp4",
  //         img: null
  //       },
  //       {
  //         title: "sub cate 3",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/2.mp4",
  //         img: null
  //       },
  //       {
  //         title: "sub cate 4",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/3.mp4",
  //         img: null
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Title 7',
  //     subTitle: 'Subtitle',
  //     svg: 'assets/svgs/open-buffet.svg',
  //     subCategories: [
  //       {
  //         title: "sub cate 1",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: null,
  //         img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
  //       },
  //       {
  //         title: "sub cate 2",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/1.mp4",
  //         img: null
  //       },
  //       {
  //         title: "sub cate 3",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/2.mp4",
  //         img: null
  //       },
  //       {
  //         title: "sub cate 4",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/3.mp4",
  //         img: null
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Title 8',
  //     subTitle: 'Subtitle',
  //     svg: 'assets/svgs/open-buffet.svg',
  //     subCategories: [
  //       {
  //         title: "sub cate 1",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: null,
  //         img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
  //       },
  //       {
  //         title: "sub cate 2",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/1.mp4",
  //         img: null
  //       },
  //       {
  //         title: "sub cate 3",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/2.mp4",
  //         img: null
  //       },
  //       {
  //         title: "sub cate 4",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/3.mp4",
  //         img: null
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Title 9',
  //     subTitle: 'Subtitle',
  //     svg: 'assets/svgs/open-buffet.svg',
  //     subCategories: [
  //       {
  //         title: "sub cate 1",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: null,
  //         img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
  //       },
  //       {
  //         title: "sub cate 2",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/1.mp4",
  //         img: null
  //       },
  //       {
  //         title: "sub cate 3",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/2.mp4",
  //         img: null
  //       },
  //       {
  //         title: "sub cate 4",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/3.mp4",
  //         img: null
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Title 10',
  //     subTitle: 'Subtitle',
  //     svg: 'assets/svgs/open-buffet.svg',
  //     subCategories: [
  //       {
  //         title: "sub cate 1",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: null,
  //         img: "https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg"
  //       },
  //       {
  //         title: "sub cate 2",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/1.mp4",
  //         img: null
  //       },
  //       {
  //         title: "sub cate 3",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/2.mp4",
  //         img: null
  //       },
  //       {
  //         title: "sub cate 4",
  //         subTitle: 'Subtitle',
  //         svg: 'assets/svgs/clothes.svg',
  //         video: "assets/videos/circle/3.mp4",
  //         img: null
  //       }
  //     ]
  //   }
  // ];
  // circleSelectedItem: number = 0;
  // activeSubCategory: number = 0;
  // // 
  // items: any[] = [];








  // init() {
  //   // this.playVideo();
  //   gsap.registerPlugin(MotionPathPlugin);

  //   const circlePath = MotionPathPlugin.convertToPath("#holder", false)[0];
  //   if (!circlePath) return;
  //   circlePath.id = "circlePath";
  //   document.querySelector('#circle-svg')?.prepend(circlePath);
  //   // console.log(circlePath);


  //   this.items = gsap.utils.toArray(".item");
  //   const numItems = this.items.length;
  //   const itemStep = 1 / numItems;
  //   const wrapProgress = gsap.utils.wrap(0, 1);
  //   const snap = gsap.utils.snap(itemStep);
  //   const wrapTracker = gsap.utils.wrap(0, numItems);
  //   const tracker = { item: 0 };
  //   // console.log(circlePath);

  //   gsap.set(this.items, {
  //     motionPath: {
  //       path: circlePath,
  //       align: circlePath,
  //       alignOrigin: [0.5, 0.5],
  //       end: (i: number) => i / numItems,
  //     },
  //     // scale: 1
  //   });

  //   // const tl = gsap.timeline({ repeat: -1, paused: true, reversed: true });
  //   const tl = gsap.timeline({ paused: true, reversed: true });
  //   tl.to(".wrapper", {
  //     rotation: 360,
  //     transformOrigin: "center",
  //     duration: 1,
  //     ease: "none"
  //   });
  //   tl.to(//make it point to top
  //     this.items,
  //     {
  //       rotation: "-=360",
  //       transformOrigin: "center",
  //       duration: 1,
  //       ease: "none"
  //     },
  //     0
  //   );
  //   tl.to(
  //     tracker,
  //     {
  //       item: numItems,
  //       duration: 1,
  //       ease: "none",
  //       modifiers: {
  //         item: (value: any) => wrapTracker(numItems - Math.round(value)),
  //       }
  //     },
  //     0
  //   );

  //   this.items.forEach((el, i) => {
  //     el.addEventListener("click", () => {
  //       const current = tracker.item;
  //       const activeItem = i;

  //       if (i === current) return;

  //       document.querySelector(".item.active")?.classList.remove("active");
  //       this.items[activeItem].classList.add("active");

  //       const diff = current - i;
  //       if (Math.abs(diff) < numItems / 2) {
  //         this.moveWheel(diff * itemStep, tl, tracker, wrapProgress, snap);
  //       } else {
  //         const amt = numItems - Math.abs(diff);
  //         if (current > i) {
  //           this.moveWheel(amt * -itemStep, tl, tracker, wrapProgress, snap);
  //         } else {
  //           this.moveWheel(amt * itemStep, tl, tracker, wrapProgress, snap);
  //         }
  //       }
  //     });
  //   });

  //   // document.getElementById('next')?.addEventListener('click', () => {
  //   //   this.moveWheel(-itemStep, tl, tracker, wrapProgress, snap);
  //   // });

  //   // document.getElementById('prev')?.addEventListener('click', () => {
  //   //   this.moveWheel(itemStep, tl, tracker, wrapProgress, snap);
  //   // });
  // }


  // moveWheel(amount: number, tl: any, tracker: any, wrapProgress: any, snap: any): void {
  //   // console.log(amount, tl, tracker, wrapProgress, snap);

  //   const progress = tl.progress();
  //   tl.progress(wrapProgress(snap(tl.progress() + amount)));
  //   const next = tracker.item;
  //   tl.progress(progress);

  //   document.querySelector(".item.active")?.classList.remove("active");
  //   this.items[next].classList.add("active");

  //   gsap.to(tl, {
  //     progress: snap(tl.progress() + amount),
  //     modifiers: { progress: wrapProgress },
  //   });
  // }

  // getSubCategories() {
  //   return this.circleItems?.[this.circleSelectedItem]?.subCategories || [];
  // }

  // getMedia() {
  //   return this.getSubCategories()?.[this.activeSubCategory];
  // }

  // setCircleSelectedItem(index: number) {
  //   this.circleSelectedItem = index;
  //   this.activeSubCategory = 0;
  //   this.updateVideo();
  //   // this.playClickSound();
  // }

  // setSubCategorySelectedItem(index: number) {
  //   this.activeSubCategory = index;
  //   this.updateVideo();
  //   // this.playClickSound();
  // }

  // updateVideo() {
  //   this.showVideo = false;
  //   setTimeout(() => {
  //     this.showVideo = true;
  //   });
  // }


  // playClickSound() {
  //   // Get the audio element
  //   let sound: any = document.getElementById('clickSound');
  //   if (!sound) return;
  //   // Play the sound
  //   sound.currentTime = 0; // Rewind to the start
  //   sound.play();

  // }

}
