import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxsIconNewsComponent } from './boxs-icon-news.component';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BoxsIconNewsComponent],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule,
    RouterModule
  ],
  exports: [BoxsIconNewsComponent]
})
export class BoxsIconNewsModule { }
