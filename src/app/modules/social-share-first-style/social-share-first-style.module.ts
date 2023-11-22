import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialShareFirstStyleComponent } from './social-share-first-style.component';
import { SvgModule } from '../svg/svg.module';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [SocialShareFirstStyleComponent],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule,
    TranslationModule
  ],
  exports: [SocialShareFirstStyleComponent]
})
export class SocialShareFirstStyleModule { }
