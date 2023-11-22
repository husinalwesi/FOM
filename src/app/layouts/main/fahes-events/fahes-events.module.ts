import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FahesEventsComponent } from './fahes-events.component';
import { FahesEventsRoutingModule } from './fahes-events-routing.module';
import { HeroBgHalfModule } from 'src/app/modules/hero-bg-half/hero-bg-half.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { DatePickerForthStyleModule } from 'src/app/modules/date-picker-forth-style/date-picker-forth-style.module';
import { TranslateModule } from '@ngx-translate/core';
import { FahesEventCardModule } from 'src/app/modules/fahes-event-card/fahes-event-card.module';
import { FormatDateToApiFormatPipe } from 'src/app/pipes/format-date-to-api-format.pipe';
import { PaginationModule } from 'src/app/modules/pagination/pagination.module';
import { NoDataModule } from 'src/app/modules/no-data/no-data.module';
import { ComponentLoaderModule } from 'src/app/modules/component-loader/component-loader.module';



@NgModule({
  declarations: [FahesEventsComponent],
  imports: [
    CommonModule,
    FahesEventsRoutingModule,
    SvgModule,
    DatePickerForthStyleModule,
    TranslateModule,
    FahesEventCardModule,
    PaginationModule,
    NoDataModule,
    ComponentLoaderModule
  ],
  providers: [FormatDateToApiFormatPipe]
})
export class FahesEventsModule { }
