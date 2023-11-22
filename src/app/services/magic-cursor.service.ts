import { Injectable } from '@angular/core';
import gsap from 'gsap';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MagicCursorService {
  mouse: any = { x: 0, y: 0 };
  pos: any = { x: 0, y: 0 };
  ratio: any = 0.15;
  active: boolean = false;
  ball: any = null;
  buttonWrapers: any = null;

  constructor() { }

  initializeMagicCursor() {
    if (typeof window !== 'undefined') {
      if (!environment.isMagicCursorEnabled) return;
      this.ball = document.getElementById("ball");

      this.buttonWrapers = document.querySelectorAll(".button-wraper");
      //
      if (!this.ball) return;
      gsap.set(this.ball, { xPercent: -50, yPercent: -50 });

      document.addEventListener("mousemove", (e: any) => this.mouseMove(e));

      gsap.ticker.add(() => {
        this.updatePosition();
      });

      for (let index = 0; index < this.buttonWrapers.length; index++) {
        const buttonWraperInner = this.buttonWrapers[index].querySelector(".button-wraper-inner");
        this.buttonWrapers[index].addEventListener("mouseleave", (e: any) => this.mouseLeave(e, buttonWraperInner));
        this.buttonWrapers[index].addEventListener("mouseenter", (e: any) => this.mouseEnter(e, this.buttonWrapers[index]));
        this.buttonWrapers[index].addEventListener("mousemove", (e: any) => this.mouseMoveIcon(e, buttonWraperInner, this.buttonWrapers[index]));
      }
    }
  }

  mouseEnter(event: MouseEvent, buttonWraper: any) {
    if (!this.ball) return;
    gsap.to(event.target, 0.3, { scale: buttonWraper.getAttribute("data-element-scale") || 2 });
    gsap.to(this.ball, 0.3, { scale: 2, opacity: 0.5 });
    this.active = true;
  }

  mouseLeave(e: MouseEvent, buttonWraperInner: any) {
    if (!this.ball) return;
    gsap.to(e.target, { duration: 0.3, scale: 1 });
    gsap.to(this.ball, { duration: 0.3, scale: 0 });
    gsap.to(buttonWraperInner, { duration: 0.3, x: 0, y: 0 });
    this.active = false;
  }

  mouseMoveIcon(e: MouseEvent, buttonWraperInner: any, buttonWraper: any) {
    this.parallaxCursor(e, buttonWraper);
    this.parallaxIt(e, buttonWraperInner, buttonWraper);
  }

  mouseMove(e: any) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }

  updatePosition() {
    if (!this.ball) return;
    if (this.active) return;
    this.pos.x += (this.mouse.x - this.pos.x) * this.ratio;
    this.pos.y += (this.mouse.y - this.pos.y) * this.ratio;
    gsap.set(this.ball, { x: this.pos.x, y: this.pos.y });
  }

  parallaxIt(event: MouseEvent, buttonWraperInner: any, buttonWraper: any) {
    if (!this.ball) return;
    const movement = 10;
    if (!buttonWraper) return;
    const boundingRect = buttonWraper.getBoundingClientRect();
    const relX = event.clientX - boundingRect.left;
    const relY = event.clientY - boundingRect.top;
    gsap.to(buttonWraperInner, {
      duration: 0.3,
      x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
      y: (relY - boundingRect.height / 2) / boundingRect.height * movement,
      ease: 'power2.out'
    });
  }

  parallaxCursor(event: MouseEvent, buttonWraper: any) {
    if (!this.ball) return;
    const movement = 3;
    if (!buttonWraper) return;
    const rect = buttonWraper.getBoundingClientRect();
    const relX = event.clientX - rect.left;
    const relY = event.clientY - rect.top;
    this.pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
    this.pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
    gsap.to(this.ball, { duration: 0.3, x: this.pos.x, y: this.pos.y });
  }

}
