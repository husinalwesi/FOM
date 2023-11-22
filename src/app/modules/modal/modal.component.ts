import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  existAnimationEnabled: boolean = false;
  @Input() modalClasses: string = "w-full lg:max-w-[600px]";
  @Input() isModalEnabled: boolean = false;
  @ViewChild('dialog', { static: true }) dialogElement!: ElementRef;
  @Output() closeModalByKeyboard: EventEmitter<boolean> = new EventEmitter();
  @Input() template!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
    this.enableDisableEscButton();
  }

  enableDisableEscButton() {
    this.dialogElement.nativeElement.addEventListener('cancel', (event: any) => {
      event.preventDefault();
      this.closeModalByKeyboard.emit();
    });
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
        this.dialogElement.nativeElement.close();
        document.body.style.overflow = `auto`;
        this.existAnimationEnabled = false;
      }, 500);
    }
  }

  showModal() {
    if (typeof window !== 'undefined') {
      this.dialogElement.nativeElement.showModal();
      document.body.style.overflow = `hidden`;
    }
  }

}
