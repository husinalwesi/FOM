import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeLineItemComponent } from './time-line-item.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    TimeLineItemComponent
  ],
  imports: [
    CommonModule,
    TranslationModule,
    RouterModule,
    LazyLoadImageModule
  ],
  exports: [TimeLineItemComponent]
})
export class TimeLineItemModule { }
