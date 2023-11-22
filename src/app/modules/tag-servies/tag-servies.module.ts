import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagServiesComponent } from './tag-servies.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [TagServiesComponent],
  imports: [
    CommonModule,
    TranslationModule,
    LazyLoadImageModule
  ],
  exports: [TagServiesComponent]
})
export class TagServiesModule { }
