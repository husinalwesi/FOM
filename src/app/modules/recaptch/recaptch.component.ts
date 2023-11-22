import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recaptch',
  templateUrl: './recaptch.component.html',
  styleUrls: ['./recaptch.component.scss']
})
export class RecaptchComponent {
  @Input() isSubmit: boolean = false;
  siteKey: string = environment.recaptchaSiteKey;
  captcha: string = '';
  @Input() isVerified: boolean = false;
  @Output() onSuccess: EventEmitter<any> = new EventEmitter();

  resolved(captchaResponse: string) {
    const captchaResolved = (captchaResponse && captchaResponse.length > 0) ? true : false;
    if (captchaResolved) this.onSuccess.emit();
  }



}
