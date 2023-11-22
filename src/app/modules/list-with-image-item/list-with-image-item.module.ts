import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListWithImageItemComponent } from './list-with-image-item.component';
import { SvgModule } from '../svg/svg.module';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    ListWithImageItemComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    TranslationModule,
    LazyLoadImageModule
  ],
  exports: [ListWithImageItemComponent]
})
export class ListWithImageItemModule { }
