import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessPageComponent } from './success-page.component';
import { SuccessPageRoutingModule } from './success-page-routing.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';



@NgModule({
  declarations: [
    SuccessPageComponent
  ],
  imports: [
    CommonModule,
    SuccessPageRoutingModule,
    BreadcrumbSectionSecondStyleModule
  ]
})
export class SuccessPageModule { }
