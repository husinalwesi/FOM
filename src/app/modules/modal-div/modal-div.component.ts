import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-div',
  templateUrl: './modal-div.component.html',
  styleUrls: ['./modal-div.component.scss']
})
export class ModalDivComponent {
  existAnimationEnabled: boolean = false;
  @Input() modalClasses: string = "w-full lg:max-w-[600px]";
  @Input() isModalEnabled: boolean = false;
  // @ViewChild('dialog', { static: true }) dialogElement!: ElementRef;
  @Output() closeModalByKeyboard: EventEmitter<boolean> = new EventEmitter();
  @Input() template!: TemplateRef<any>;
  isEnabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.enableDisableEscButton();
  }

  enableDisableEscButton() {
    // this.dialogElement.nativeElement.addEventListener('cancel', (event: any) => {
    //   event.preventDefault();
    //   this.closeModalByKeyboard.emit();
    // });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isModalEnabledChanges = changes['isModalEnabled'];
    if (!isModalEnabledChanges) return;
    // 
    if (isModalEnabledChanges.currentValue) this.showModal();
    else this.hideModal();
  }


  hideModal() {
    if (typeof window !== 'undefined') {
      this.existAnimationEnabled = true;
      setTimeout(() => {
        this.isEnabled = false;
        // this.dialogElement.nativeElement.close();
        document.body.style.overflow = `auto`;

        // const header: any = document.querySelector("header");
        // header.style.paddingRight = ``;

        // document.body.style.paddingRight = ``;
        this.existAnimationEnabled = false;
      }, 500);
    }
  }

  showModal() {
    if (typeof window !== 'undefined') {
      // this.dialogElement.nativeElement.showModal();
      this.isEnabled = true;
      // d .style.paddingRight = `8px`;
      // const header: any = document.querySelector("header");
      // header.style.paddingRight = `8px`;
      document.body.style.overflow = `hidden`;
    }
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.closeModalByKeyboard.emit();
  }

}
