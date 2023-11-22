import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialShareSecondStyleComponent } from './social-share-second-style.component';
import { SvgModule } from '../svg/svg.module';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    SocialShareSecondStyleComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule,
    TranslationModule
  ],
  exports: [SocialShareSecondStyleComponent]
})
export class SocialShareSecondStyleModule { }
