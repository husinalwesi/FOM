import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecaptchComponent } from './recaptch.component';
import { RecaptchaModule, RecaptchaFormsModule, RECAPTCHA_LANGUAGE } from 'ng-recaptcha';
import { FormsModule } from '@angular/forms';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { TranslationService } from 'src/app/i18n/translation.service';

@NgModule({
  declarations: [
    RecaptchComponent
  ],
  imports: [
    CommonModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    FormsModule,
    TranslationModule
  ],
  providers: [
    {
      provide: RECAPTCHA_LANGUAGE,
      // useValue: localStorage.getItem('LANGUAGE'),
      useValue: 'en',
    },
  ],
  exports: [RecaptchComponent]
})
export class RecaptchModule { }
