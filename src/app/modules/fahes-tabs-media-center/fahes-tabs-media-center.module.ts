import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahesTabsMediaCenterComponent } from './fahes-tabs-media-center.component';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FahesTabsMediaCenterComponent],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule,
    RouterModule
  ],
  exports: [FahesTabsMediaCenterComponent]
})
export class FahesTabsMediaCenterModule { }
