import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeroComponent } from './home-hero.component';
import { SvgModule } from '../svg/svg.module';

@NgModule({
  declarations: [
    HomeHeroComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [HomeHeroComponent]
})
export class HomeHeroModule { }
