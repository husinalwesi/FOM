import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeOfEthicsAndConductsRoutingModule } from './code-of-ethics-and-conducts-routing.module';
import { CodeOfEthicsAndConductsComponent } from './code-of-ethics-and-conducts.component';
import { BreadcrumbSectionSecondStyleModule } from 'src/app/modules/breadcrumb-section-second-style/breadcrumb-section-second-style.module';
import { ContentPageModule } from 'src/app/modules/content-page/content-page.module';
import { EthicItemModule } from 'src/app/modules/ethic-item/ethic-item.module';


@NgModule({
  declarations: [
    CodeOfEthicsAndConductsComponent
  ],
  imports: [
    CommonModule,
    CodeOfEthicsAndConductsRoutingModule,
    BreadcrumbSectionSecondStyleModule,
    ContentPageModule,
    EthicItemModule
  ]
})
export class CodeOfEthicsAndConductsModule { }
