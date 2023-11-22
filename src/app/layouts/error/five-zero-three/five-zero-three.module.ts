import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiveZeroThreeRoutingModule } from './five-zero-three-routing.module';
import { FiveZeroThreeComponent } from './five-zero-three.component';


@NgModule({
  declarations: [
    FiveZeroThreeComponent
  ],
  imports: [
    CommonModule,
    FiveZeroThreeRoutingModule
  ]
})
export class FiveZeroThreeModule { }
