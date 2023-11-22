import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from './svg.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    SvgComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    TranslationModule
  ],
  exports: [
    SvgComponent
  ]
})
export class SvgModule { }
