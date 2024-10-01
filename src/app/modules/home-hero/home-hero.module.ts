import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeroComponent } from './home-hero.component';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    HomeHeroComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule
  ],
  exports: [HomeHeroComponent]
})
export class HomeHeroModule { }
