import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeLineComponent } from './time-line.component';
import { TimeLineItemModule } from '../time-line-item/time-line-item.module';
import { TranslationModule } from 'src/app/i18n/translation.module';

@NgModule({
  declarations: [
    TimeLineComponent
  ],
  imports: [
    CommonModule,
    TimeLineItemModule,
    TranslationModule
  ],
  exports: [TimeLineComponent]
})
export class TimeLineModule { }
