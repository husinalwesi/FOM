import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerItemComponent } from './career-item.component';
import { BtnOneModule } from '../btn-one/btn-one.module';

@NgModule({
  declarations: [
    CareerItemComponent
  ],
  imports: [
    CommonModule,
    BtnOneModule
  ],
  exports: [CareerItemComponent]
})
export class CareerItemModule { }
