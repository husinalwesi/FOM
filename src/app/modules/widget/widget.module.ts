import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget.component';
import { SvgModule } from '../svg/svg.module';
import { RouterModule } from '@angular/router';
import { NotificationCounterComponent } from 'src/app/components/notification-counter/notification-counter.component';
import { TranslationModule } from 'src/app/i18n/translation.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    WidgetComponent,
    NotificationCounterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SvgModule,
    TranslationModule,
    LazyLoadImageModule
  ],
  exports: [WidgetComponent]
})
export class WidgetModule { }
