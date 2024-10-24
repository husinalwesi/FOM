import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { SvgModule } from '../svg/svg.module';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SocialIconsModule } from "../social-icons/social-icons.module";

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule,
    TranslationModule,
    SocialIconsModule
],
  exports: [FooterComponent]
})
export class FooterModule { }
