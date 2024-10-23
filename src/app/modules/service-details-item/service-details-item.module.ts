import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDetailsItemComponent } from './service-details-item.component';
import { SvgModule } from '../svg/svg.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ServiceDetailsItemComponent
  ],
  imports: [
    CommonModule,
    SvgModule,
    RouterModule
  ],
  exports: [ServiceDetailsItemComponent]
})
export class ServiceDetailsItemModule { }
