import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceContainerComponent } from './service-container.component';
import { ServiceItemModule } from '../service-item/service-item.module';



@NgModule({
  declarations: [
    ServiceContainerComponent
  ],
  imports: [
    CommonModule,
    ServiceItemModule,
  ],
  exports: [ServiceContainerComponent]
})
export class ServiceContainerModule { }
