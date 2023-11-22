import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourZeroOneComponent } from './four-zero-one.component';
import { FourZeroOneRoutingModule } from './four-zero-one-routing.module';



@NgModule({
  declarations: [
    FourZeroOneComponent
  ],
  imports: [
    CommonModule,
    FourZeroOneRoutingModule
  ]
})
export class FourZeroOneModule { }
