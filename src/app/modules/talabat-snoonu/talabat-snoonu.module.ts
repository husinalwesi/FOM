import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalabatSnoonuComponent } from './talabat-snoonu.component';
import { DeliveryItemModule } from '../delivery-item/delivery-item.module';

@NgModule({
  declarations: [
    TalabatSnoonuComponent
  ],
  imports: [
    CommonModule,
    DeliveryItemModule
  ],
  exports: [TalabatSnoonuComponent]
})
export class TalabatSnoonuModule { }
