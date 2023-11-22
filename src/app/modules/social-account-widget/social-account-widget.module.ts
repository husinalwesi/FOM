import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialAccountWidgetComponent } from './social-account-widget.component';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    SocialAccountWidgetComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule,
    LazyLoadImageModule
  ],
  exports: [SocialAccountWidgetComponent]
})
export class SocialAccountWidgetModule { }
