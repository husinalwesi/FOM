import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderDetailedRoutingModule } from './provider-detailed-routing.module';
import { ProviderDetailedComponent } from './provider-detailed.component';
import { SvgModule } from 'src/app/modules/svg/svg.module';


@NgModule({
  declarations: [
    ProviderDetailedComponent
  ],
  imports: [
    CommonModule,
    ProviderDetailedRoutingModule,
    SvgModule
  ]
})
export class ProviderDetailedModule { }
