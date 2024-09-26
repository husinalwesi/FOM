import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    TranslationModule,
    SvgModule
  ],
})
export class HomePageModule { }
