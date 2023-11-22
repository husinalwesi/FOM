import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyNumbers]'
})
export class onlyNumbersDirective {
  regexStr = '[+0-9]';

  constructor() { }

  @HostListener('keypress', ['$event'])
  onKeypress(event: any) {
    return new RegExp(this.regexStr).test(event.key)
  }

  @HostListener('paste', ['$event'])
  bloclPaste(event: ClipboardEvent) {
    this.validateFields(event);
  }

  validateFields(e: ClipboardEvent) {
    if (typeof window !== 'undefined') {
      e.preventDefault()
      const pastData = e.clipboardData?.getData('text/plain')
      document.execCommand('insertHTML', false, pastData?.replace(/[^+0-9]/g, ''));
    }
  }


}