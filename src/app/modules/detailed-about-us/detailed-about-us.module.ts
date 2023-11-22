import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailedAboutUsComponent } from './detailed-about-us.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { RouterLink } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    DetailedAboutUsComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    RouterLink,
    LazyLoadImageModule
  ],
  exports: [DetailedAboutUsComponent]
})
export class DetailedAboutUsModule { }
