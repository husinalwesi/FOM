import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceItemComponent } from './service-item.component';
import { SvgModule } from '../svg/svg.module';

@NgModule({
  declarations: [
    ServiceItemComponent
  ],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [ServiceItemComponent]
})
export class ServiceItemModule { }
