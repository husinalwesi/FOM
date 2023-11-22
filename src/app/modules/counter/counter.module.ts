import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { SvgModule } from '../svg/svg.module';

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [CounterComponent]
})
export class CounterModule { }
