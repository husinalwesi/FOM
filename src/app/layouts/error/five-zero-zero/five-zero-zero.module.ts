import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiveZeroZeroRoutingModule } from './five-zero-zero-routing.module';
import { FiveZeroZeroComponent } from './five-zero-zero.component';


@NgModule({
  declarations: [
    FiveZeroZeroComponent
  ],
  imports: [
    CommonModule,
    FiveZeroZeroRoutingModule
  ]
})
export class FiveZeroZeroModule { }
