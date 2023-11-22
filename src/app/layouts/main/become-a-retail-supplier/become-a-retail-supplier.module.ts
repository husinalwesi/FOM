import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BecomeARetailSupplierComponent } from './become-a-retail-supplier.component';
import { BecomeARetailSupplierRoutingModule } from './become-a-retail-supplier-routing.module';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { OurStoryModule } from 'src/app/modules/our-story/our-story.module';
import { SvgModule } from 'src/app/modules/svg/svg.module';
import { BecomeARetailSupplierContentModule } from 'src/app/modules/become-a-retail-supplier-content/become-a-retail-supplier-content.module';



@NgModule({
  declarations: [BecomeARetailSupplierComponent],
  imports: [
    CommonModule,
    BecomeARetailSupplierRoutingModule,
    BreadcrumbSectionSecondStyleModule,
    OurStoryModule,
    BecomeARetailSupplierContentModule
  ]
})
export class BecomeARetailSupplierModule { }
