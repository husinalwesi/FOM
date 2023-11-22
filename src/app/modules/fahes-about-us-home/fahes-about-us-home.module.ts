import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahesAboutUsHomeComponent } from './fahes-about-us-home.component';
import { SvgModule } from '../svg/svg.module';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    FahesAboutUsHomeComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule,
    TranslationModule
  ],
  exports: [FahesAboutUsHomeComponent]
})
export class FahesAboutUsHomeModule { }
