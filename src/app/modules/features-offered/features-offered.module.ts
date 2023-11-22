import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesOfferedComponent } from './features-offered.component';
import { SvgModule } from '../svg/svg.module';
import { RouterModule } from '@angular/router';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    FeaturesOfferedComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule,
    TranslationModule,
    LazyLoadImageModule,
  ],
  exports: [FeaturesOfferedComponent]
})
export class FeaturesOfferedModule { }
