import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgModule } from '../svg/svg.module';
import { BreadcrumbSectionFirstStyleComponent } from './breadcrumb-section-first-style.component';
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { SocialShareFirstStyleModule } from '../social-share-first-style/social-share-first-style.module';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [BreadcrumbSectionFirstStyleComponent],
  imports: [
    CommonModule,
    SvgModule,
    BreadcrumbModule,
    SocialShareFirstStyleModule,
    TranslationModule
  ],
  exports: [BreadcrumbSectionFirstStyleComponent]
})
export class BreadcrumbSectionFirstStyleModule { }
