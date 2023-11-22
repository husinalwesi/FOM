import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SocailMediaIconsNewsComponent } from './socail-media-icons-news.component';

@NgModule({
  declarations: [SocailMediaIconsNewsComponent],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule
  ],
  exports: [SocailMediaIconsNewsComponent]
})
export class SocailMediaIconsNewsModule { }
