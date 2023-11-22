import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[onlyText]'
})
export class OnlyTextDirective {

  @Input() onlyText: string = '';

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: any) {
    const input = event.target.value;
    let regex;
    if (this.onlyText === 'en') {
      regex = /^[a-zA-Z\s]*$/; // Allow English letters and spaces
    } else if (this.onlyText === 'ar') {
      regex = /^[\u0600-\u06FF\s]*$/; // Allow Arabic characters and spaces
    } else {
      regex = /^[a-zA-Z\u0600-\u06FF\s]*$/; // Allow both and spaces
    }

    if (!regex.test(input)) {
      event.preventDefault();
      let text = "";

      if (this.onlyText === 'en') text = input.replace(/[^a-zA-Z\s]*/g, ''); // Remove non-English characters and spaces
      else if (this.onlyText === 'ar') text = input.replace(/[^\u0600-\u06FF\s]*/g, ''); // Remove non-Arabic characters and spaces
      else text = input.replace(/[^\u0600-\u06FFa-zA-Z\s]*/g, ''); // Remove non-Arabic, non-English characters, and spaces

      let cleanedText = text.replace(/[@!^&/\\#,+()$~%.'":*?<>{}٪ـ١٢٣٤٥٦٧٨٩٠؛،؟]/g, ''); // Remove special characters
      this.el.nativeElement.value = cleanedText;
    } else {
      this.el.nativeElement.value = input.replace(/[@!^&/\\#,+()$~%.'":*?<>{}٪ـ١٢٣٤٥٦٧٨٩٠؛،؟]/g, ''); // Remove special characters
    }
  }
}
