import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { ServiceItemModule } from '../service-item/service-item.module';



@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    ServiceItemModule
  ],
  exports: [ServicesComponent]
})
export class ServicesModule { }
