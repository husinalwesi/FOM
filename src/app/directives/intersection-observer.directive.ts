import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]'
})
export class IntersectionObserverDirective implements OnInit {
  @Input() animationClass = 'fade-in-visible';
  @HostBinding('class.fade-in') defaultClass = true;
  @Input() rootMargin: string = '0px';  // No extra margin
  @Input() threshold: number = 0.5;    // Require 75% visibility

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.renderer.addClass(this.el.nativeElement, this.animationClass);
            } else {
              this.renderer.removeClass(this.el.nativeElement, this.animationClass);
            }
          });
        },
        {
          rootMargin: this.rootMargin,
          threshold: this.threshold // 75% of the section must be visible to trigger
        }
      );

      observer.observe(this.el.nativeElement);
    }
  }
}
