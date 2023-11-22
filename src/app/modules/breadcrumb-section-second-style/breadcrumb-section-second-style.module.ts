import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { BreadcrumbSectionSecondStyleComponent } from './breadcrumb-section-second-style.component';
import { SocialShareSecondStyleModule } from '../social-share-second-style/social-share-second-style.module';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [BreadcrumbSectionSecondStyleComponent],
  imports: [
    CommonModule,
    BreadcrumbModule,
    SocialShareSecondStyleModule,
    TranslationModule
  ],
  exports: [BreadcrumbSectionSecondStyleComponent]
})
export class BreadcrumbSectionSecondStyleModule { }
